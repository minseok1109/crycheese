"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MenuItem {
	name: string;
	description: string;
	price: string;
	color: string;
}

const menus: MenuItem[] = [
	{
		name: "더블 치즈버거",
		description: "두 장의 패티와 치즈가 어우러진 시그니처 버거",
		price: "Best Choice",
		color: "bg-yellow-100 dark:bg-yellow-900/20",
	},
	{
		name: "치즈버거",
		description: "신선한 야채와 고소한 치즈의 클래식한 조화",
		price: "Classic",
		color: "bg-orange-100 dark:bg-orange-900/20",
	},
	{
		name: "애니멀 스타일 감자튀김",
		description: "구운 양파, 치즈, 특제 소스가 듬뿍 올라간 시크릿 메뉴",
		price: "Side",
		color: "bg-red-100 dark:bg-red-900/20",
	},
];

export default function MenuPreview(): React.ReactElement {

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(".menu-header", {
			scrollTrigger: {
				trigger: ".menu-section",
				start: "top 80%",
			},
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		gsap.from(".menu-card", {
			scrollTrigger: {
				trigger: ".menu-grid",
				start: "top 80%",
			},
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: "power3.out",
		});
	}, []);

	return (
		<section className="bg-zinc-50 py-24 sm:py-32 dark:bg-black menu-section">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center menu-header">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
						메뉴 소개
					</h2>
					<p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
						심플하지만 완벽합니다. 시크릿 메뉴로 나만의 버거를 즐겨보세요.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 menu-grid">
					{menus.map((menu) => (
						<div
							key={menu.name}
							className={`menu-card flex flex-col justify-between rounded-3xl p-8 ring-1 ring-zinc-200 dark:ring-zinc-800 xl:p-10 ${menu.color}`}
						>
							<div>
								<div className="flex items-center justify-between gap-x-4">
									<h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-zinc-50">
										{menu.name}
									</h3>
									<span className="rounded-full bg-white dark:bg-black px-2.5 py-1 text-xs font-semibold leading-5 text-zinc-600 dark:text-zinc-300">
										{menu.price}
									</span>
								</div>
								<p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
									{menu.description}
								</p>
							</div>
							<div className="mt-8 flex justify-center">
								{/* Placeholder for burger image */}
								<div className="h-40 w-40 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center">
									<span className="text-2xl">🍔</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
