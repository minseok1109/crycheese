"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";
import Image from "next/image";

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

const allMenuCategories = [
	{
		category: "버거",
		items: ["싱글치즈버거", "더블치즈버거", "치킨샌드위치", "불치킨샌드위치"],
	},
	{
		category: "세트",
		items: ["치즈버거세트", "치킨샌드위치세트"],
	},
	{
		category: "사이드",
		items: ["크라이치킨접시", "치즈감자", "치킨핑거", "불치킨핑거"],
	},
];

export default function MenuPreview(): React.ReactElement {
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

		gsap.from(".all-menu-section", {
			scrollTrigger: {
				trigger: ".all-menu-section",
				start: "top 85%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
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

				{/* All Menu Section */}
				<div className="all-menu-section flex flex-col gap-6">
					{/* Label */}
					<div className="flex flex-col gap-3">
						<span className="text-xs font-semibold text-[#999999] tracking-[2px]">
							ALL MENU
						</span>
						<div className="w-full h-px bg-[#E5E5E5]" />
					</div>

					{/* Menu List */}
					<div className="flex flex-col gap-4">
						{allMenuCategories.map((cat) => (
							<div key={cat.category} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
								<span className="text-sm font-semibold text-[#999999] min-w-[60px]">
									{cat.category}
								</span>
								<span className="text-sm font-normal text-[#666666]">
									{cat.items.join(" · ")}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
