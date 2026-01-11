"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ThemeType = "pink" | "purple" | "blue";

interface Feature {
	label: string;
	title: string;
	points: string[];
	theme: ThemeType;
	gridClass: string;
}

interface ThemeStyle {
	bg: string;
	label: string;
	title: string;
	icon: string;
}

const features: Feature[] = [
	{
		label: "POINT 1",
		title: "현장 조리 시스템",
		points: [
			"현장에서 직접 패티를 굽습니다",
			"신선한 야채를 조리합니다",
			"따뜻하고 맛있는 최상의 버거를 제공합니다",
		],
		theme: "pink",
		gridClass: "lg:col-span-1",
	},
	{
		label: "POINT 2",
		title: "프리미엄 식재료",
		points: [
			"냉동이 아닌 100% 신선한 소고기 패티",
			"풍미 가득한 최고급 치즈 사용",
			"신선하고 부드러운 번 사용",
		],
		theme: "purple",
		gridClass: "lg:col-span-1",
	},
	{
		label: "POINT 3",
		title: "대규모 주문 소화",
		points: [
			"소규모 팀 점심부터 대형 행사까지",
			"7,000개 이상의 대형 행사 완벽 소화",
			"행사 규모에 맞춘 맞춤형 서비스 제공",
		],
		theme: "blue",
		gridClass: "lg:col-span-2",
	},
];

const themeStyles: Record<ThemeType, ThemeStyle> = {
	pink: {
		bg: "bg-pink-50 dark:bg-pink-950/30",
		label: "text-pink-600 dark:text-pink-400",
		title: "text-pink-700 dark:text-pink-300",
		icon: "text-pink-600 dark:text-pink-400",
	},
	purple: {
		bg: "bg-purple-50 dark:bg-purple-950/30",
		label: "text-purple-600 dark:text-purple-400",
		title: "text-purple-700 dark:text-purple-300",
		icon: "text-purple-600 dark:text-purple-400",
	},
	blue: {
		bg: "bg-sky-50 dark:bg-sky-950/30",
		label: "text-sky-600 dark:text-sky-400",
		title: "text-sky-700 dark:text-sky-300",
		icon: "text-sky-600 dark:text-sky-400",
	},
};

export default function FeatureSection(): React.ReactElement {

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(".feature-header", {
			scrollTrigger: {
				trigger: "#features",
				start: "top 80%",
			},
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		gsap.from(".feature-card", {
			scrollTrigger: {
				trigger: ".feature-grid",
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
		<section id="features" className="bg-white py-24 sm:py-32 dark:bg-zinc-900">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center feature-header mb-16">
					<h2 className="text-base font-semibold leading-7 text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
						왜 크라이치즈버거인가요?
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl break-keep">
						기업 케이터링을 위한 완벽한 선택
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 break-keep">
						단순한 식사, 그 이상의 가치를 전합니다. 일관된 품질과 맛으로 수많은
						기업의 선택을 받았습니다.
					</p>
				</div>

				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 feature-grid">
						{features.map((feature) => {
							const styles = themeStyles[feature.theme];
							return (
								<div
									key={feature.title}
									className={`feature-card rounded-3xl p-8 sm:p-10 ${styles.bg} ${feature.gridClass} relative overflow-hidden min-h-[320px] flex flex-col`}
								>
									<div className="relative z-10">
										<div className={`text-sm font-bold mb-2 ${styles.label}`}>
											{feature.label}
										</div>
										<h3 className={`text-2xl font-bold mb-6 ${styles.title}`}>
											{feature.title}
										</h3>
										<ul className="space-y-3">
											{feature.points.map((point) => (
												<li
													key={point}
													className="flex items-start text-zinc-700 dark:text-zinc-300 font-medium"
												>
													<svg
														className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${styles.icon}`}
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
															clipRule="evenodd"
														/>
													</svg>
													{point}
												</li>
											))}
										</ul>
									</div>
									{/* Decorative Image Placeholder */}
									<div className="absolute right-0 bottom-0 top-10 w-1/3 opacity-10 pointer-events-none">
										{feature.theme === "pink" && (
											<svg
												viewBox="0 0 200 200"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-current text-pink-500"
											>
												<title>Pink abstract shape</title>
												<path
													fill="#FF0066"
													d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.2,90.2,-19.4,87.3,-5.7C84.4,8,75.9,20.6,67,31.8C58.1,43,48.8,52.8,38.1,60.6C27.4,68.4,15.2,74.2,2.3,70.2C-10.6,66.2,-24.2,52.4,-36.8,40.8C-49.4,29.2,-61,19.8,-66.6,6.3C-72.2,-7.2,-71.8,-24.8,-63.4,-38.7C-55,-52.6,-38.6,-62.8,-23.4,-68.8C-8.2,-74.8,5.8,-76.6,20.2,-78.4L44.7,-76.4Z"
													transform="translate(100 100)"
												/>
											</svg>
										)}
										{feature.theme === "purple" && (
											<svg
												viewBox="0 0 200 200"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-current text-purple-500"
											>
												<title>Purple abstract shape</title>
												<path
													fill="#8A2BE2"
													d="M44.3,-71.3C57.3,-65.4,67.7,-55.1,75.2,-43.3C82.7,-31.5,87.3,-18.2,85.7,-5.7C84.1,6.8,76.3,18.5,67.6,29.1C58.9,39.7,49.3,49.2,38.2,56.7C27.1,64.2,14.5,69.7,1.3,67.5C-11.9,65.3,-25.7,55.4,-37.9,46.1C-50.1,36.8,-60.7,28.1,-67.2,16.5C-73.7,4.9,-76.1,-9.6,-71.8,-22.4C-67.5,-35.2,-56.5,-46.3,-44.7,-52.7C-32.9,-59.1,-20.3,-60.8,-7.2,-60.8C5.9,-60.8,11.8,-59.1,17.7,-60.8L44.3,-71.3Z"
													transform="translate(100 100)"
												/>
											</svg>
										)}
										{feature.theme === "blue" && (
											<svg
												viewBox="0 0 200 200"
												xmlns="http://www.w3.org/2000/svg"
												className="fill-current text-sky-500"
											>
												<title>Blue abstract shape</title>
												<path
													fill="#00BFFF"
													d="M39.9,-65.7C54.1,-60.5,69.9,-56.9,78.8,-47.5C87.7,-38.1,89.7,-22.9,86.4,-9.1C83.1,4.7,74.5,17.1,65.8,29.2C57.1,41.3,48.3,53.1,36.9,61.8C25.5,70.5,11.5,76.1,-2.1,79.7C-15.7,83.3,-28.9,84.9,-40.4,78.2C-51.9,71.5,-61.7,56.5,-69.8,41.7C-77.9,26.9,-84.3,12.3,-82.5,-1.3C-80.7,-14.9,-70.7,-27.5,-60.4,-38.5C-50.1,-49.5,-39.5,-58.9,-27.8,-65.4C-16.1,-71.9,-3.3,-75.5,9.7,-75.5C22.7,-75.5,35.4,-77.9,39.9,-65.7Z"
													transform="translate(100 100)"
												/>
											</svg>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
