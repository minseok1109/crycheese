"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";

interface Review {
	number: string;
	quote: string;
	highlighted: boolean;
}

const CARD_STYLES = {
	default: {
		card: "bg-white border border-[#EEEEEE] shadow-[0_4px_20px_0_rgba(0,0,0,0.02)]",
		icon: "bg-primary/8",
		iconText: "text-primary",
		quote: "text-[#444444] font-medium",
	},
	highlighted: {
		card: "bg-white border-2 border-primary shadow-[0_8px_30px_0_rgba(248,184,28,0.09)]",
		icon: "bg-primary",
		iconText: "text-white",
		quote: "text-[#222222] font-semibold",
	},
} as const;

const reviews: Review[] = [
	{
		number: "01",
		quote: "크라이치즈버거에서 메뉴구성부터 배송까지 모든 과정을 맡아주어서 편리했어요.",
		highlighted: false,
	},
	{
		number: "02",
		quote: "행사 진행하랴, 음식 받아서 세팅하랴 고민이 많았는데, 덕분에 이번에는 진행에만 집중할 수 있었어요.",
		highlighted: true,
	},
	{
		number: "03",
		quote: "항상 비슷한 식단이라 고민이었거든요. 이번에 버거로 바꿨더니 다들 만족스럽게 식사 하셔서 정말 뿌듯했습니다.",
		highlighted: false,
	},
];

export default function CaseStudySection(): React.ReactElement {
	useGSAP(() => {
		gsap.from(".case-title", {
			scrollTrigger: {
				trigger: ".case-section",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".review-card", {
			scrollTrigger: {
				trigger: ".review-cards",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: "power3.out",
		});
	}, []);

	return (
		<section className="case-section bg-[#FAF8F4] py-[100px] px-6 lg:px-20">
			<div className="flex flex-col items-center gap-[60px]">
				{/* Header */}
				<h2 className="case-title text-[44px] font-bold text-[#0D0D0D] text-center">
					고객들의 생생한 후기
				</h2>

				{/* Review Cards */}
				<div className="review-cards flex flex-col lg:flex-row gap-6 w-full">
					{reviews.map((review) => {
						const styles = review.highlighted
							? CARD_STYLES.highlighted
							: CARD_STYLES.default;

						return (
							<div
								key={review.number}
								className={`review-card flex-1 flex flex-col justify-center gap-5 rounded-[20px] p-9 ${styles.card}`}
							>
								<div
									className={`w-11 h-11 rounded-full flex items-center justify-center ${styles.icon}`}
								>
									<span className={`text-sm font-bold ${styles.iconText}`}>
										{review.number}
									</span>
								</div>
								<p className={`text-base leading-[1.8] ${styles.quote}`}>
									{review.quote}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
