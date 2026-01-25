"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";

const supports = [
	{
		title: "홍보 포스터",
		description: "사내 게시판용 행사 알림 포스터를 제작해드립니다.",
		icon: "📢",
	},
	{
		title: "엉엉이 인형탈",
		description:
			"크라이치즈버거의 마스코트 엉엉이가 행사 분위기를 띄워드립니다.",
		icon: "🧸",
	},
	{
		title: "럭키드로우 쿠폰",
		description: "행사의 재미를 더할 수 있는 경품 이벤트를 지원합니다.",
		icon: "🎁",
	},
];

export default function EventSupportSection(): React.ReactElement {
	useGSAP(() => {
		gsap.from(".event-header", {
			scrollTrigger: {
				trigger: ".event-section",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".support-card", {
			scrollTrigger: {
				trigger: ".support-grid",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: "power3.out",
		});
	}, []);

	return (
		<section className="event-section py-20 px-6 lg:px-[120px]">
			<div className="w-full rounded-[32px] p-10 lg:p-[60px] lg:px-12"
				style={{
					background: "linear-gradient(180deg, #FFF8E1 0%, #FFFBF0 50%, #FFF5E0 100%)"
				}}
			>
				<div className="flex flex-col items-center gap-12">
					{/* Header */}
					<div className="event-header flex flex-col items-center gap-4 text-center">
						<p className="text-xl font-medium text-primary">
							행사를 더욱 즐겁게 꾸미고 싶으신가요?
						</p>
						<div className="w-[60px] h-[3px] rounded-sm bg-primary" />
						<h2 className="text-[32px] font-bold leading-[1.3] text-[#0D0D0D] max-w-[550px]">
							행사를 더 특별하게!
							<br />
							크라이치즈버거만의 맞춤 이벤트 지원
						</h2>
					</div>

					{/* Support Cards */}
					<div className="support-grid flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
						{supports.map((item) => (
							<div
								key={item.title}
								className="support-card flex flex-col items-center gap-5 bg-white rounded-3xl p-6 pt-6 w-full sm:w-[220px] shadow-primary"
							>
								<div className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-3xl"
									style={{
										background: "linear-gradient(180deg, #FFF3E0 0%, #FFE0B2 100%)"
									}}
								>
									{item.icon}
								</div>
								<div className="flex flex-col items-center gap-2 text-center">
									<h3 className="text-lg font-bold text-[#0D0D0D]">
										{item.title}
									</h3>
									<p className="text-sm font-normal text-[#666666] leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Note */}
					<p className="text-sm font-normal text-[#999999] text-center">
						* 행사 규모와 성격에 따라 맞춤 상담이 가능합니다
					</p>
				</div>
			</div>
		</section>
	);
}
