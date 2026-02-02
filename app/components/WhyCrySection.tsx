"use client";

import { useGSAP } from "@gsap/react";
import { BadgeCheck, Headset, type LucideIcon, Timer } from "lucide-react";
import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

type ValueCard = {
	icon: LucideIcon;
	title: string;
	description: string;
};

const valueCards: ValueCard[] = [
	{
		icon: Headset,
		title: "1:1 전담 매니저 매칭",
		description: "견적부터 배송까지,\n전화 한 통이면 끝입니다.",
	},
	{
		icon: BadgeCheck,
		title: "검증된 단체 맞춤 메뉴",
		description:
			"7만 명이 검증한 호불호 없는 맛,\n행사 성격에 맞는 최적의 구성을 제안합니다.",
	},
	{
		icon: Timer,
		title: "정시 도착 보장",
		description:
			"행사 지연은 이제 그만,\n전문 배송팀이 정시 도착을 보장합니다.",
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
			className="bg-white py-[100px] px-6 lg:px-[120px]"
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
						행사 담당자가 크라이치즈버거만 고집하는 이유
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
