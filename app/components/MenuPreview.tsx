"use client";

import { useState, useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";
import Image from "next/image";

type TabType = "BURGER" | "SIDE" | "SET";

interface MenuItem {
	name: string;
	image: string;
}

const recommendedMenus: MenuItem[] = [
	{
		name: "싱글치즈버거",
		image: "/menu-single-cheese.png",
	},
	{
		name: "더블치즈버거",
		image: "/menu-double-cheese.png",
	},
	{
		name: "치킨샌드위치",
		image: "/menu-chicken-sandwich.png",
	},
];

const burgerMenus: MenuItem[] = [
	{ name: "싱글치즈버거", image: "/single_cheeseburger.png" },
	{ name: "더블치즈버거", image: "/double_cheeseburger.png" },
	{ name: "치킨샌드위치", image: "/menu-chicken-sandwich.png" },
	{ name: "불치킨샌드위치", image: "/spicy_chicken_burger.png" },
];

const sideMenus: MenuItem[] = [
	{ name: "크라이치킨접시", image: "/menu-cry-chicken.png" },
	{ name: "치즈감자", image: "/menu-cheese-potato.png" },
	{ name: "치킨핑거", image: "/menu-chicken-finger.png" },
];

const setMenus: MenuItem[] = [
	{ name: "싱글치즈버거세트", image: "/menu-single-set.png" },
	{ name: "더블치즈버거세트", image: "/menu-double-set.png" },
	{ name: "치킨샌드위치세트", image: "/menu-chicken-set.png" },
	{ name: "불치킨샌드위치세트", image: "/menu-spicy-chicken-set.png" },
];

const tabs: { id: TabType; label: string }[] = [
	{ id: "BURGER", label: "BURGER" },
	{ id: "SIDE", label: "SIDE" },
	{ id: "SET", label: "SET" },
];

const menusByCategory: Record<TabType, MenuItem[]> = {
	BURGER: burgerMenus,
	SIDE: sideMenus,
	SET: setMenus,
};

const cardSizes: Record<TabType, { width: string; imageHeight: string }> = {
	BURGER: { width: "w-full sm:w-[280px]", imageHeight: "h-[200px]" },
	SIDE: { width: "w-[calc(50%-12px)] sm:w-[200px]", imageHeight: "h-[140px]" },
	SET: { width: "w-[calc(50%-12px)] sm:w-[200px]", imageHeight: "h-[140px]" },
};

export default function MenuPreview(): React.ReactElement {
	const [activeTab, setActiveTab] = useState<TabType>("BURGER");
	const tabContentRef = useRef<HTMLDivElement>(null);

	const handleTabChange = (tab: TabType) => {
		if (tab === activeTab) return;

		// 먼저 탭 상태 변경
		setActiveTab(tab);

		// 다음 틱에서 애니메이션 실행
		setTimeout(() => {
			if (tabContentRef.current) {
				gsap.fromTo(
					tabContentRef.current.querySelectorAll(".tab-menu-card"),
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.3,
						stagger: 0.1,
						ease: "power3.out",
					}
				);
			}
		}, 0);
	};

	useGSAP(() => {
		gsap.from(".menu-title", {
			scrollTrigger: {
				trigger: "#menu",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".recommended-label", {
			scrollTrigger: {
				trigger: ".recommended-section",
				start: "top 85%",
			},
			y: 20,
			opacity: 0,
			duration: 0.6,
			ease: "power3.out",
		});

		gsap.from(".menu-card", {
			scrollTrigger: {
				trigger: ".menu-grid",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: "power3.out",
		});

		gsap.from(".burger-section", {
			scrollTrigger: {
				trigger: ".burger-section",
				start: "top 85%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".burger-section .small-menu-card", {
			scrollTrigger: {
				trigger: ".burger-section",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: "power3.out",
		});

		gsap.from(".side-section", {
			scrollTrigger: {
				trigger: ".side-section",
				start: "top 85%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".side-section .small-menu-card", {
			scrollTrigger: {
				trigger: ".side-section",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: "power3.out",
		});

		gsap.from(".set-section", {
			scrollTrigger: {
				trigger: ".set-section",
				start: "top 85%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".set-section .small-menu-card", {
			scrollTrigger: {
				trigger: ".set-section",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: "power3.out",
		});
	}, []);

	return (
		<section
			id="menu"
			className="bg-white py-[100px] px-6 lg:px-[120px]"
		>
			<div className="flex flex-col gap-12">
				{/* Title */}
				<h2 className="menu-title text-[42px] font-bold text-[#0D0D0D]">
					메뉴 구성
				</h2>

				{/* Recommended Section */}
				<div className="recommended-section flex flex-col gap-6">
					{/* Label */}
					<div className="recommended-label flex flex-col gap-3">
						<span className="text-xs font-semibold text-[#999999] tracking-[2px]">
							RECOMMENDED
						</span>
						<div className="w-full h-px bg-[#E5E5E5]" />
					</div>

					{/* Menu Grid */}
					<div className="menu-grid flex flex-col sm:flex-row gap-6">
						{recommendedMenus.map((menu) => (
							<div
								key={menu.name}
								className="menu-card w-full sm:w-[280px] rounded-2xl bg-[#F5F5F5] overflow-hidden transition-transform hover:scale-[1.02]"
							>
								<div className="relative w-full h-[200px] bg-[#EEEEEE]">
									<Image
										src={menu.image}
										alt={menu.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-5">
									<h3 className="text-lg font-semibold text-[#0D0D0D]">
										{menu.name}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Tab Navigation */}
				<div className="tab-navigation flex flex-col gap-6">
					<div className="flex gap-8">
						{tabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								onClick={() => handleTabChange(tab.id)}
								className={`relative text-xs font-semibold tracking-[2px] pb-2 transition-colors ${
									activeTab === tab.id
										? "text-[#0D0D0D]"
										: "text-[#999999] hover:text-[#0D0D0D]"
								}`}
							>
								{tab.label}
								{activeTab === tab.id && (
									<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F8B81C]" />
								)}
							</button>
						))}
					</div>
					<div className="w-full h-px bg-[#E5E5E5]" />
				</div>

				{/* Tab Content */}
				<div ref={tabContentRef} className="tab-content flex flex-wrap gap-6">
					{menusByCategory[activeTab].map((menu) => {
						const sizes = cardSizes[activeTab];
						return (
							<div
								key={menu.name}
								className={`tab-menu-card ${sizes.width} rounded-2xl bg-[#F5F5F5] overflow-hidden transition-transform hover:scale-[1.02]`}
							>
								<div className={`relative w-full ${sizes.imageHeight} bg-[#E0E0E0]`}>
									<Image
										src={menu.image}
										alt={menu.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className={`${activeTab === "BURGER" ? "text-lg" : "text-base"} font-semibold text-[#0D0D0D]`}>
										{menu.name}
									</h3>
								</div>
							</div>
						);
					})}
				</div>

				{/* Burger Section */}
				<div className="burger-section flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<span className="text-xs font-semibold text-[#999999] tracking-[2px]">
							BURGER
						</span>
						<div className="w-full h-px bg-[#E5E5E5]" />
					</div>
					<div className="flex flex-wrap gap-6">
						{burgerMenus.map((menu) => (
							<div
								key={menu.name}
								className="small-menu-card w-[calc(50%-12px)] sm:w-[200px] rounded-2xl bg-[#F5F5F5] overflow-hidden transition-transform hover:scale-[1.02]"
							>
								<div className="relative w-full h-[150px] bg-[#E0E0E0]">
									<Image
										src={menu.image}
										alt={menu.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="text-base font-semibold text-[#0D0D0D]">
										{menu.name}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Side Section */}
				<div className="side-section flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<span className="text-xs font-semibold text-[#999999] tracking-[2px]">
							SIDE
						</span>
						<div className="w-full h-px bg-[#E5E5E5]" />
					</div>
					<div className="flex flex-wrap gap-6">
						{sideMenus.map((menu) => (
							<div
								key={menu.name}
								className="small-menu-card w-[calc(50%-12px)] sm:w-[200px] rounded-2xl bg-[#F5F5F5] overflow-hidden transition-transform hover:scale-[1.02]"
							>
								<div className="relative w-full h-[150px] bg-[#E0E0E0]">
									<Image
										src={menu.image}
										alt={menu.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="text-base font-semibold text-[#0D0D0D]">
										{menu.name}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Set Section */}
				<div className="set-section flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<span className="text-xs font-semibold text-[#999999] tracking-[2px]">
							SET
						</span>
						<div className="w-full h-px bg-[#E5E5E5]" />
					</div>
					<div className="flex flex-wrap gap-6">
						{setMenus.map((menu) => (
							<div
								key={menu.name}
								className="small-menu-card w-[calc(50%-12px)] sm:w-[200px] rounded-2xl bg-[#F5F5F5] overflow-hidden transition-transform hover:scale-[1.02]"
							>
								<div className="relative w-full h-[150px] bg-[#E0E0E0]">
									<Image
										src={menu.image}
										alt={menu.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="text-base font-semibold text-[#0D0D0D]">
										{menu.name}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
