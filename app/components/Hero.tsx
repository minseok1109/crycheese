"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { scrollToElement } from "@/lib/utils/scroll";

export default function Hero(): React.ReactElement {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			gsap.set(".hero-title", { y: 60, opacity: 0 });
			gsap.set(".hero-subtitle", { y: 40, opacity: 0 });
			gsap.set(".hero-divider", { scaleX: 0, opacity: 0 });
			gsap.set(".hero-cta", { y: 30, opacity: 0 });
			gsap.set(".hero-info", { y: 20, opacity: 0 });
			gsap.set(".hero-image", { scale: 1.05, opacity: 0 });

			tl.to(".hero-title", {
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.15,
			})
				.to(
					".hero-subtitle",
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						stagger: 0.1,
					},
					"-=0.6",
				)
				.to(
					".hero-divider",
					{
						scaleX: 1,
						opacity: 1,
						duration: 0.6,
					},
					"-=0.4",
				)
				.to(
					".hero-cta",
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
					},
					"-=0.3",
				)
				.to(
					".hero-info",
					{
						y: 0,
						opacity: 1,
						duration: 0.5,
					},
					"-=0.2",
				)
				.to(
					".hero-image",
					{
						scale: 1,
						opacity: 1,
						duration: 1.2,
						ease: "expo.out",
					},
					"-=1.5",
				);
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="w-full bg-white py-[100px] px-6 lg:px-[120px]"
		>
			<div className="flex flex-col lg:flex-row items-center gap-[60px]">
				{/* Left: Content */}
				<div className="flex-1 flex flex-col gap-8">
					{/* Title */}
					<div>
						<h1 className="text-[56px] font-bold leading-[1.1] text-[#0D0D0D] tracking-tight">
							<span className="hero-title block">메뉴 고민부터</span>
							<span className="hero-title block">현장 배부까지</span>
						</h1>
					</div>

					{/* Subtitle */}
					<div className="flex flex-col gap-2">
						<p className="hero-subtitle text-2xl font-normal text-[#666666]">
							실패 없는 행사를 위한
						</p>
						<p className="hero-subtitle text-2xl font-normal text-[#666666]">
							최고의 선택.
						</p>
					</div>

					{/* Divider */}
					<div className="hero-divider w-[60px] h-[2px] bg-[#E5E5E5] origin-left" />

					{/* CTA Button */}
					<Link
						href="#inquiry"
						className="hero-cta inline-flex items-center gap-3 self-start rounded-full bg-primary px-9 py-[18px] text-lg font-semibold text-[#0D0D0D] transition-all hover:bg-primary-dark hover:shadow-lg active:scale-95"
						onClick={(e) => scrollToElement(e, "#inquiry")}
					>
						<span>단체 상담하기</span>
						<span>→</span>
					</Link>

					{/* Info Text */}
					<p className="hero-info text-sm font-medium text-[#999999]">
						단체주문 30개 이상 | 전화 상담 후 확정
					</p>
				</div>

				{/* Right: Image */}
				<div className="hero-image relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden">
					<Image
						src="/catering-hero.png"
						alt="크라이치즈버거 케이터링"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
