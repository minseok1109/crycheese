import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schemas/inquiry";

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const body = await request.json();

		const result = inquirySchema.safeParse(body);
		if (!result.success) {
			console.error("Validation error:", result.error);
			return NextResponse.json(
				{ error: "입력값이 올바르지 않습니다", details: result.error.issues },
				{ status: 400 },
			);
		}

		const {
			name,
			contact,
			email,
			referralSource,
			referrerName,
			companyName,
			eventType,
			deliveryDate,
			deliveryTime,
			deliveryAddress,
			paymentMethod,
			message,
		} = result.data;

		// 1. Google Sheets 저장 로직 (환경변수 존재 시)
		// const googleSheetId = process.env.GOOGLE_SHEETS_ID;
		// if (googleSheetId) {
		//   // TODO: Google Sheets API 연동
		// }

		// 2. Slack 알림 전송
		const webhookUrl = process.env.SLACK_WEBHOOK_URL;
		if (webhookUrl) {
			const slackMessage = `📋 새 단체 주문 접수
			
• 담당자: ${name}
• 단체명: ${companyName} (${eventType || "미지정"})
• 연락처: ${contact}
• 이메일: ${email}
• 유입경로: ${referralSource}${referrerName ? ` (추천인: ${referrerName})` : ""}

🚚 배송 정보
• 일시: ${deliveryDate} ${deliveryTime}
• 주소: ${deliveryAddress}
• 결제: ${paymentMethod}

💬 문의 내용:
${message || "(내용 없음)"}`;

			const slackResponse = await fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text: slackMessage }),
			});

			if (!slackResponse.ok) {
				console.error("Slack 메시지 전송 실패");
				// Slack 전송 실패하더라도 클라이언트에게는 성공 응답을 보내는 것이 좋음 (로깅만 함)
			}
		} else {
			console.log("SLACK_WEBHOOK_URL 미설정: 메시지 전송 스킵");
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "서버 오류가 발생했습니다" },
			{ status: 500 },
		);
	}
}
