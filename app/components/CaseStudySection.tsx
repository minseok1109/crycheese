"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface Testimonial {
	body: string;
	author: {
		name: string;
		company: string;
	};
	imageUrl: string;
}

const testimonials: Testimonial[] = [
		{
			body: "회사 행사에서 직원들 모두가 정말 좋아했어요! 버거가 여전히 따뜻했고 퀄리티가 훌륭했습니다.",
			author: {
				name: "이벤트 매니저",
				company: "테크 스타트업 A",
			},
			imageUrl: "https://picsum.photos/seed/event1/800/600",
		},
		{
			body: "연례 야유회를 위해 500개의 버거를 주문했는데, 배달 시간도 정확하고 맛도 한결같았습니다.",
			author: {
				name: "HR 이사",
				company: "글로벌 기업 B",
			},
			imageUrl: "https://picsum.photos/seed/event2/800/600",
		},
		{
			body: "지금까지 이용해본 케이터링 중 최고였습니다. 가성비와 맛 모두 강력 추천합니다.",
			author: {
				name: "팀장",
				company: "디자인 에이전시 C",
			},
			imageUrl: "https://picsum.photos/seed/event3/800/600",
		},
		{
			body: "급하게 잡힌 행사였는데도 완벽하게 준비해주셨어요. 덕분에 행사가 성공적으로 끝났습니다.",
			author: {
				name: "총무팀 대리",
				company: "마케팅 펌 D",
			},
			imageUrl: "https://picsum.photos/seed/event4/800/600",
		},
		{
			body: "비건 메뉴 옵션까지 챙겨주셔서 세심한 배려에 감동했습니다. 다음 행사도 무조건 크라이치즈버거입니다!",
			author: {
				name: "복지 담당자",
				company: "IT 기업 E",
			},
			imageUrl: "https://picsum.photos/seed/event5/800/600",
		},
		{
			body: "따뜻한 상태로 배달되어 매장에서 먹는 것과 차이가 없었어요. 직원들 만족도가 역대 최고였습니다.",
			author: {
				name: "대표",
				company: "스타트업 F",
			},
			imageUrl: "https://picsum.photos/seed/event6/800/600",
		},
];

export default function CaseStudySection(): React.ReactElement {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(".case-header", {
			scrollTrigger: {
				trigger: ".case-section",
				start: "top 80%",
			},
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		gsap.from(".testimonial-card", {
			scrollTrigger: {
				trigger: ".testimonial-grid",
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
		<section className="bg-white py-24 sm:py-32 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 case-section">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-xl text-center case-header">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
						고객 후기
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
						기업 고객들이 사랑하는 브랜드
					</p>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 testimonial-grid">
						{testimonials.map((testimonial, index) => (
							<div
								key={`${testimonial.author.company}-${index}`}
								className="testimonial-card"
							>
								<figure className="rounded-2xl bg-zinc-50 dark:bg-zinc-800 h-full flex flex-col justify-between overflow-hidden">
									<div className="relative h-48 w-full">
										<Image
											src={testimonial.imageUrl}
											alt={`${testimonial.author.company} 행사 이미지`}
											fill
											className="object-cover"
											unoptimized
										/>
									</div>
									<div className="p-8 flex flex-col flex-grow justify-between">
										<blockquote className="text-zinc-900 dark:text-zinc-50">
											<p>“{testimonial.body}”</p>
										</blockquote>
										<figcaption className="mt-6 flex items-center gap-x-4">
											{/* Placeholder for avatar */}
											<div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center font-bold text-zinc-500 shrink-0">
												{testimonial.author.name[0]}
											</div>
											<div>
												<div className="font-semibold text-zinc-900 dark:text-zinc-50">
													{testimonial.author.name}
												</div>
												<div className="text-zinc-600 dark:text-zinc-400">
													{testimonial.author.company}
												</div>
											</div>
										</figcaption>
									</div>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
