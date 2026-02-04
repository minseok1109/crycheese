import { google } from "googleapis";
import type { InquiryFormData } from "@/lib/schemas/inquiry";

function getGoogleAuth() {
	const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
	const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

	if (!email || !privateKey) {
		throw new Error("Google Service Account 인증 정보가 설정되지 않았습니다");
	}

	return new google.auth.JWT({
		email,
		key: privateKey,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});
}

const SHEET_COLUMNS = [
	"접수일시",
	"이름",
	"연락처",
	"이메일",
	"유입경로",
	"추천인",
	"단체정보",
	"단체명",
	"행사유형",
	"배송일",
	"배송시간",
	"인원수",
	"1인당예산",
	"배송주소",
	"결제방법",
	"문의내용",
] as const;

export async function appendToGoogleSheet(data: InquiryFormData): Promise<void> {
	const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

	if (!spreadsheetId) {
		console.log("GOOGLE_SHEETS_ID 미설정: Google Sheets 저장 스킵");
		return;
	}

	try {
		const auth = getGoogleAuth();
		const sheets = google.sheets({ version: "v4", auth });

		const kstTime = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

		const rowData: Record<(typeof SHEET_COLUMNS)[number], string> = {
			접수일시: kstTime,
			이름: data.name,
			연락처: data.contact,
			이메일: data.email,
			유입경로: data.referralSource || "",
			추천인: data.referrerName || "",
			단체정보: data.eventType || "",
			단체명: data.companyName,
			행사유형: data.eventTypeDetail || "",
			배송일: data.deliveryDate,
			배송시간: data.deliveryTime,
			인원수: String(data.headcount),
			"1인당예산": data.budgetPerPerson.toLocaleString(),
			배송주소: data.deliveryAddress,
			결제방법: data.paymentMethod,
			문의내용: data.message || "",
		};

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: "주문접수!A:P",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [SHEET_COLUMNS.map((col) => rowData[col])],
			},
		});

		console.log("Google Sheets 저장 완료");
	} catch (error) {
		console.error("Google Sheets 저장 실패:", error);
	}
}
