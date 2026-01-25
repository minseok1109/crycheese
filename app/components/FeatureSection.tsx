"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";
import Link from "next/link";
import { scrollToElement } from "@/lib/utils/scroll";

const features = [
	{
		number: "01",
		title: "전담 매니저가 배정되어 처음부터 끝까지",
		description:
			"행사 준비만으로도 바쁜데, 음식 주문까지 신경 쓰기에는 시간이 부족합니다.\n\n크라이치즈버거는 단체주문 전담 매니저가 배정되어 접수부터 메뉴 구성, 일정 조율, 배송 전 과정을 책임지고 관리해드립니다.",
	},
	{
		number: "02",
		title: "남녀노소 모두가 좋아하는 맛",
		description:
			"임원, 직원, 고객까지 다양한 연령대의 입맛을 모두 만족시키는 메뉴를 찾기 어렵습니다.\n\n크라이치즈버거는 특제 패티와 신선한 재료로 버거를 만듭니다. 남녀노소 누구나 좋아하는 클래식한 맛으로 모두가 만족하는 단체식사를 제공합니다.",
	},
	{
		number: "03",
		title: "행사에 맞는 메뉴 구성 제안",
		description:
			"사내 행사, 워크숍, 단체급식 등 상황마다 어떤 메뉴가 좋은지 고민됩니다.\n\n행사 목적과 분위기에 맞춰 가장 어울리는 메뉴를 전담 매니저가 직접 제안드립니다. 예산과 인원에 맞춘 최적의 플랜으로 준비해드립니다.",
	},
	{
		number: "04",
		title: "현장 세팅부터 배부까지 케이터링",
		description:
			"더 좋은 행사를 기획하고 싶지만, 행사 준비 인원이 한정되어 있어 걱정이 됩니다.\n\n크라이치즈버거의 특별 케이터링 서비스를 이용해보세요.\n음식 수령, 세팅, 배부 등 현장의 모든 업무를 대행하여 처리해드립니다. 행사 분위기에 맞는 맞춤 이벤트를 함께 제안드립니다.",
	},
];

export default function FeatureSection(): React.ReactElement {
	useGSAP(() => {
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
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: "power3.out",
		});

		gsap.from(".catering-banner", {
			scrollTrigger: {
				trigger: ".catering-banner",
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
			id="features"
			className="bg-[#FAF8F4] py-20 px-6 lg:px-20"
		>
			<div className="flex flex-col items-center gap-12">
				{/* Header */}
				<div className="feature-header flex flex-col items-center gap-5 text-center">
					<h2 className="text-[40px] font-bold leading-[1.2] text-[#2C2C2C]">
						왜 크라이치즈버거와 함께 해야할까요?
					</h2>
					<p className="text-xl font-medium text-[#6B6B6B]">
						행사 준비와 관련된 모든 고민을 해결해드립니다.
					</p>
				</div>

				{/* Feature Grid - 2x2 */}
				<div className="feature-grid w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="feature-card bg-white rounded-[20px] p-9 shadow-soft flex flex-col gap-4"
						>
							<div className="flex items-center gap-3">
								<span className="text-2xl font-bold text-primary tracking-wider">
									{feature.number}
								</span>
								<h3 className="text-lg font-bold text-[#0D0D0D]">
									{feature.title}
								</h3>
							</div>
							<p className="text-[15px] font-normal leading-[1.7] text-[#6B6B6B] whitespace-pre-line">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				{/* Catering Banner */}
				<div className="catering-banner w-full bg-primary-gradient rounded-[20px] p-10 lg:px-12 flex flex-col items-center gap-3 text-center shadow-primary-lg">
					<h3 className="text-[22px] font-bold text-[#0D0D0D]">
						크라이치즈버거의 특별 케이터링 서비스를 이용해보세요.
					</h3>
					<p className="text-base font-normal text-[#0D0D0D]/80 leading-[1.6]">
						음식 수령, 세팅, 배부 등 현장의 모든 업무를 대행하여 처리해드립니다.
						<br />
						행사 분위기에 맞는 맞춤 이벤트를 함께 제안드립니다.
					</p>
				</div>

				{/* CTA Button */}
				<div className="pt-6">
					<Link
						href="#inquiry"
						className="inline-flex items-center gap-2.5 rounded-full bg-[#2C2C2C] px-10 py-[18px] text-base font-semibold text-white shadow-soft-lg transition-all hover:bg-[#1a1a1a] hover:shadow-xl active:scale-95"
						onClick={(e) => scrollToElement(e, "#inquiry")}
					>
						<span>상담 신청하기</span>
						<span>→</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
