import type { InquiryFormData } from "@/lib/schemas/inquiry";

export async function sendSlackNotification(data: InquiryFormData): Promise<void> {
	const webhookUrl = process.env.SLACK_WEBHOOK_URL;

	if (!webhookUrl) {
		console.log("SLACK_WEBHOOK_URL 미설정: Slack 알림 스킵");
		return;
	}

	const kstTime = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

	const message = {
		blocks: [
			{
				type: "header",
				text: {
					type: "plain_text",
					text: "🍔 새로운 케이터링 문의",
					emoji: true,
				},
			},
			{
				type: "section",
				fields: [
					{ type: "mrkdwn", text: `*접수일시*\n${kstTime}` },
					{ type: "mrkdwn", text: `*단체명*\n${data.companyName}` },
				],
			},
			{
				type: "divider",
			},
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: "*📋 주문자 정보*",
				},
			},
			{
				type: "section",
				fields: [
					{ type: "mrkdwn", text: `*이름*\n${data.name}` },
					{ type: "mrkdwn", text: `*연락처*\n${data.contact}` },
					{ type: "mrkdwn", text: `*이메일*\n${data.email}` },
					{ type: "mrkdwn", text: `*유입경로*\n${data.referralSource || "-"}` },
				],
			},
			{
				type: "divider",
			},
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: "*🚚 배송 정보*",
				},
			},
			{
				type: "section",
				fields: [
					{ type: "mrkdwn", text: `*배송일*\n${data.deliveryDate}` },
					{ type: "mrkdwn", text: `*배송시간*\n${data.deliveryTime}` },
					{ type: "mrkdwn", text: `*결제방법*\n${data.paymentMethod}` },
					{ type: "mrkdwn", text: `*행사유형*\n${data.eventTypeDetail || "-"}` },
				],
			},
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: `*배송주소*\n${data.deliveryAddress}`,
				},
			},
			...(data.message
				? [
						{
							type: "divider",
						},
						{
							type: "section",
							text: {
								type: "mrkdwn",
								text: `*💬 문의내용*\n${data.message}`,
							},
						},
					]
				: []),
		],
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
