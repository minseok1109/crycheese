"use client";

import { useGSAP } from "@gsap/react";
import { Calculator, type LucideIcon, ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

type ValueCard = {
	icon: LucideIcon;
	title: string;
	description: string;
};

const valueCards: ValueCard[] = [
	{
		icon: Zap,
		title: "3분이면 주문 끝납니다",
		description: "복잡한 절차 없이,\n간단한 문의로 주문이 완료됩니다.",
	},
	{
		icon: Calculator,
		title: "예산에 맞춰 저희가 다 짜드립니다",
		description: "예산을 알려주시면,\n최적의 메뉴 구성을 제안해드립니다.",
	},
	{
		icon: ShieldCheck,
		title: "절대 안늦습니다",
		description: "약속한 시간, 약속한 장소.\n전문 배송팀이 책임집니다.",
	},
];

export default function WhyCrySection() {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!headerRef.current || !cardsRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse",
				},
			});

			tl.from(headerRef.current.children, {
				y: 30,
				opacity: 0,
				duration: 0.6,
				stagger: 0.15,
				ease: "power2.out",
			});

			tl.from(
				cardsRef.current.children,
				{
					y: 40,
					opacity: 0,
					duration: 0.5,
					stagger: 0.15,
					ease: "power2.out",
				},
				"-=0.3",
			);

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className="bg-white py-[100px] px-6 lg:px-[120px] overflow-hidden"
		>
			<div className="flex flex-col items-center gap-16 max-w-[1200px] mx-auto">
				{/* 섹션 헤더 */}
				<div
					ref={headerRef}
					className="flex flex-col items-center gap-4 text-center"
				>
					<span className="inline-block bg-[#FFF8E1] text-[#F8B81C] text-[13px] font-semibold tracking-[2px] px-5 py-2 rounded-[20px]">
						WHY CRY CHEESE BURGER
					</span>
					<h2 className="text-[#0D0D0D] text-2xl md:text-4xl lg:text-[44px] font-bold leading-tight">
						도시락 대신 크라이 하는 이유
					</h2>
				</div>

				{/* 카드 그리드 */}
				<div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{valueCards.map((card) => {
						const IconComponent = card.icon;
						return (
							<div
								key={card.title}
								className="bg-[#FAFAFA] rounded-3xl p-10 flex flex-col items-center gap-6 text-center"
							>
								<div className="w-20 h-20 bg-[#FFF8E1] rounded-full flex items-center justify-center">
									<IconComponent
										className="w-9 h-9 text-[#F8B81C]"
										strokeWidth={1.5}
									/>
								</div>
								<h3 className="text-[22px] font-bold text-[#0D0D0D]">
									{card.title}
								</h3>
								<p className="text-base text-[#666666] leading-relaxed whitespace-pre-line">
									{card.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
