"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap/register";

type TabType = "BURGER" | "SIDE" | "SET";

interface MenuItem {
	name: string;
	image: string;
}

interface MenuCardProps {
	menu: MenuItem;
	className?: string;
	imageHeight: string;
	titleSize?: "lg" | "base";
}

const RECOMMENDED_MENUS: MenuItem[] = [
	{
		name: "싱글 치즈버거",
		image: "/crycheese/추천 메뉴/cheeseburger_chicken_2types_2pcs_drink.png",
	},
	{
		name: "더블치즈버거",
		image: "/crycheese/추천 메뉴/cheeseburger_fries_chicken_2pcs_drink.png",
	},
	{
		name: "치킨 샌드위치",
		image: "/crycheese/추천 메뉴/cheeseburger_fries_spicy_chicken_2pcs_drink.png",
	},
];

const MENUS_BY_CATEGORY: Record<TabType, MenuItem[]> = {
	BURGER: [
		{ name: "싱글 치즈버거", image: "/crycheese/버거/single_cheeseburger_cutout.png" },
		{ name: "더블치즈버거", image: "/crycheese/버거/single_double_cheeseburger_cutout.png" },
		{ name: "치킨 샌드위치", image: "/crycheese/버거/chicken_burger_cutout.png" },
		{ name: "불치킨 샌드위치", image: "/crycheese/버거/spicy_chicken_burger_cutout.png" },
	],
	SIDE: [
		{ name: "치즈감자", image: "/crycheese/사이드 메뉴/cheese_fries_cutout.png" },
		{ name: "치킨핑거", image: "/crycheese/사이드 메뉴/chicken_finger_platter_2pcs_cutout.png" },
		{ name: "불치킨핑거", image: "/crycheese/사이드 메뉴/spicy_chicken_finger_platter_2pcs_cutout.png" },
	],
	SET: [
		{ name: "치즈버거세트", image: "/crycheese/세트/set_cheeseburger_fries_drink.jpg" },
		{ name: "치킨샌드위치 세트", image: "/crycheese/세트/chicken_burger_set.jpg" },
	],
};

const TABS: { id: TabType; label: string }[] = [
	{ id: "BURGER", label: "BURGER" },
	{ id: "SIDE", label: "SIDE" },
	{ id: "SET", label: "SET" },
];

const CARD_SIZES = {
	BURGER: { width: "w-[calc(50%-12px)] sm:w-[280px]", imageHeight: "h-[200px]" },
	DEFAULT: { width: "w-[calc(50%-12px)] sm:w-[200px]", imageHeight: "h-[140px]" },
} as const;

function getCardSizes(tab: TabType): { width: string; imageHeight: string } {
	return tab === "BURGER" ? CARD_SIZES.BURGER : CARD_SIZES.DEFAULT;
}

function MenuCard({ menu, className = "", imageHeight, titleSize = "lg" }: MenuCardProps): React.ReactElement {
	return (
		<div className={`rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] ${className}`}>
			<div className={`relative w-full ${imageHeight}`}>
				<Image src={menu.image} alt={menu.name} fill className="object-cover" />
			</div>
			<div className={titleSize === "lg" ? "p-5" : "p-4"}>
				<h3 className={`${titleSize === "lg" ? "text-lg" : "text-base"} font-semibold text-[#0D0D0D]`}>
					{menu.name}
				</h3>
			</div>
		</div>
	);
}

function createScrollAnimation(
	target: string,
	trigger: string,
	options: { y?: number; duration?: number; stagger?: number } = {},
): void {
	const { y = 20, duration = 0.6, stagger } = options;
	gsap.from(target, {
		scrollTrigger: { trigger, start: "top 85%" },
		y,
		opacity: 0,
		duration,
		stagger,
		ease: "power3.out",
	});
}

export default function MenuPreview(): React.ReactElement {
	const [activeTab, setActiveTab] = useState<TabType>("BURGER");
	const tabContentRef = useRef<HTMLDivElement>(null);

	function handleTabChange(tab: TabType): void {
		if (tab === activeTab) return;

		setActiveTab(tab);

		setTimeout(() => {
			if (!tabContentRef.current) return;

			gsap.fromTo(
				tabContentRef.current.querySelectorAll(".tab-menu-card"),
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power3.out" },
			);
		}, 0);
	}

	useGSAP(() => {
		gsap.from(".menu-title", {
			scrollTrigger: { trigger: "#menu", start: "top 80%" },
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		createScrollAnimation(".recommended-label", ".recommended-section");
		createScrollAnimation(".menu-card", ".menu-grid", { y: 40, duration: 0.8, stagger: 0.15 });
		createScrollAnimation(".tab-navigation", ".tab-navigation");
		createScrollAnimation(".tab-content .tab-menu-card", ".tab-content", { y: 40, duration: 0.8, stagger: 0.1 });
	}, []);

	const currentMenus = MENUS_BY_CATEGORY[activeTab];
	const { width, imageHeight } = getCardSizes(activeTab);
	const titleSize = activeTab === "BURGER" ? "lg" : "base";

	return (
		<section id="menu" className="bg-white py-[100px] px-6 lg:px-[120px]">
			<div className="flex flex-col gap-12">
				<h2 className="menu-title text-[42px] font-bold text-[#0D0D0D]">메뉴 구성</h2>

				<div className="recommended-section flex flex-col gap-6">
					<div className="recommended-label flex flex-col gap-3">
						<span className="text-xs font-semibold text-[#999999] tracking-[2px]">RECOMMENDED</span>
						<div className="w-full h-px bg-[#E5E5E5]" />
					</div>

					<div className="menu-grid flex flex-col sm:flex-row gap-6">
						{RECOMMENDED_MENUS.map((menu) => (
							<MenuCard
								key={menu.name}
								menu={menu}
								className="menu-card w-full sm:w-[280px]"
								imageHeight="h-[200px]"
							/>
						))}
					</div>
				</div>

				<nav className="tab-navigation flex flex-col gap-6">
					<div className="flex gap-4 sm:gap-8">
						{TABS.map((tab) => {
							const isActive = activeTab === tab.id;
							return (
								<button
									type="button"
									key={tab.id}
									onClick={() => handleTabChange(tab.id)}
									className={`relative text-xs font-semibold tracking-[2px] pb-2 transition-colors ${
										isActive ? "text-[#0D0D0D]" : "text-[#999999] hover:text-[#0D0D0D]"
									}`}
								>
									{tab.label}
									{isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F8B81C]" />}
								</button>
							);
						})}
					</div>
				</nav>

				<div ref={tabContentRef} className="tab-content flex flex-wrap gap-6">
					{currentMenus.map((menu) => (
						<MenuCard
							key={menu.name}
							menu={menu}
							className={`tab-menu-card ${width}`}
							imageHeight={imageHeight}
							titleSize={titleSize}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
