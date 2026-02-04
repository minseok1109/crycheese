import type { InquiryFormData } from "@/lib/schemas/inquiry";

export async function sendSlackNotification(data: InquiryFormData): Promise<void> {
	const webhookUrl = process.env.SLACK_WEBHOOK_URL;

	if (!webhookUrl) {
		console.log("SLACK_WEBHOOK_URL 미설정: Slack 알림 스킵");
		return;
	}

	const message = {
		text: `홈페이지 인바운드 문의가 들어왔습니다.
1. 조직: ${data.companyName}
2. 이름: ${data.name}
3. 연락처: ${data.contact}
4. 행사 일시: ${data.deliveryDate} ${data.deliveryTime}
5. 인원 수: ${data.headcount}명
6. 1인당 예산: ${data.budgetPerPerson.toLocaleString()}원
7. 문의 내용: ${data.message || "-"}`,
	};

	try {
		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(message),
		});

		if (!response.ok) {
			throw new Error(`Slack API 응답 오류: ${response.status}`);
		}

		console.log("Slack 알림 전송 완료");
	} catch (error) {
		console.error("Slack 알림 전송 실패:", error);
	}
}
