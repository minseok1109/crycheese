"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Hero(): React.ReactElement {
	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(".hero-text-1", {
			y: 30,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		})
			.from(
				".hero-text-2",
				{
					y: 30,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
				},
				"-=0.8",
			)
			.from(
				".hero-desc",
				{
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: "power3.out",
				},
				"-=0.6",
			)
			.from(
				".hero-btn",
				{
					y: 20,
					opacity: 0,
					duration: 0.8,
					stagger: 0.2,
					ease: "power3.out",
				},
				"-=0.6",
			);

		gsap.from(".hero-image", {
			x: 50,
			opacity: 0,
			duration: 1.2,
			ease: "power3.out",
			delay: 0.2,
		});
	}, []);

	return (
		<section className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 lg:pt-0">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16 lg:pb-24 lg:flex lg:h-[700px] lg:items-center">
				<div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
					<h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl break-keep">
						<span className="block text-primary hero-text-1">
							크라이치즈버거와
						</span>
						<span className="block hero-text-2">함께하는 행복한 순간</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300 break-keep hero-desc">
						갓 구운 신선한 버거로 기업 행사와 모임을 더욱 특별하게 만들어보세요.
						크라이치즈버거의 즐거움을 사무실로 배달해 드립니다.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
						<Link
							href="#inquiry"
							className="hero-btn rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-zinc-900 shadow-md hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
						>
							문의하기
						</Link>
						<Link
							href="#features"
							className="hero-btn text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100 hover:text-primary transition-colors"
						>
							더 알아보기 <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>

				{/* Hero Image */}
				<div className="mt-16 sm:mt-24 lg:mt-0 lg:absolute lg:right-0 lg:h-full lg:w-1/2 hero-image">
					<div className="relative h-64 w-full sm:h-96 lg:h-full">
						<Image
							src="/catering-hero.png"
							alt="Cry Cheese Catering Event"
							fill
							className="object-cover lg:rounded-l-3xl"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
