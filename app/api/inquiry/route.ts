import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/schemas/inquiry";
import { appendToGoogleSheet } from "@/lib/services/google-sheets";
import { sendSlackNotification } from "@/lib/services/slack";

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

		// Google Sheets 저장 & Slack 알림 병렬 처리
		await Promise.all([
			appendToGoogleSheet(result.data),
			sendSlackNotification(result.data),
		]);

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "서버 오류가 발생했습니다" },
			{ status: 500 },
		);
	}
}
