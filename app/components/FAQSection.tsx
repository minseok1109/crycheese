"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";
import { useState } from "react";

const faqs = [
	{
		question: "최소 주문 수량이 몇개인가요?",
		answer: "최소 30개부터 주문 가능합니다. 수량이 적을 경우 전화 상담을 통해 조율이 가능하니 편하게 문의해주세요.",
	},
	{
		question: "최소 며칠전까지 예약을 해야하나요?",
		answer: "행사 기준 3일전 주문이 가능합니다. 급한 주문의 경우 전화로 문의해주시면 가능 여부를 확인해 드립니다.",
	},
	{
		question: "제 시간에 배송이 가능할까요?",
		answer: "네, 전문 배송팀이 약속된 시간에 맞춰 안전하게 배송해 드립니다. 교통 상황을 고려하여 여유 있게 출발하며, 도착 예정 시간을 미리 안내해 드립니다.",
	},
	{
		question: "근처에 매장이 없는데 주문이 가능할까요?",
		answer: "서울, 인천 전역 퀵서비스를 운영하고 있습니다. 거리에 따라 배송비가 발생할 수 있으며, 자세한 비용은 상담 시 안내해 드립니다.",
	},
	{
		question: "포장은 어떻게 진행되나요?",
		answer: "보온 유지를 위해 특수 제작된 박스에 담아 배송되며, 버거는 1인분씩 개별 종이 포장되어 있어 나눠드리기 편리합니다.",
	},
	{
		question: "결제는 어떻게 하나요?",
		answer: "계좌이체와 카드결제 모두 가능합니다. 법인카드 결제도 가능하며, 필요시 견적서, 거래명세서, 세금계산서 등 증빙서류 발행도 신속하게 처리해 드립니다.",
	},
];

export default function FAQSection(): React.ReactElement {
	const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([1]));

	useGSAP(() => {
		gsap.from(".faq-header", {
			scrollTrigger: {
				trigger: ".faq-section",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		// FAQ 아이템 애니메이션 제거 - ScrollTrigger 타이밍 이슈로 인해 안정적이지 않음
	}, []);

	const toggleAccordion = (index: number) => {
		setOpenIndexes((prev) => {
			const next = new Set(prev);
			if (next.has(index)) {
				next.delete(index);
			} else {
				next.add(index);
			}
			return next;
		});
	};

	return (
		<section className="faq-section bg-white py-[60px] px-4 md:py-[100px] md:px-20">
			<div className="flex flex-col items-center gap-[60px]">
				{/* Header */}
				<div className="faq-header flex flex-col items-center gap-4">
					<span className="text-[13px] font-semibold text-primary tracking-[3px]">
						FAQ
					</span>
					<h2 className="text-[44px] font-bold text-[#0D0D0D] text-center">
						자주 묻는 질문
					</h2>
				</div>

				{/* FAQ List - 2 columns grid */}
				<div className="faq-list w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
					{faqs.map((faq, index) => {
						const isOpen = openIndexes.has(index);
						return (
							<div
								key={faq.question}
								className={`faq-item rounded-2xl transition-all px-6 ${
									isOpen
										? "bg-[#FFF9ED] border-2 border-primary"
										: "bg-white border border-[#EEEEEE]"
								}`}
							>
								<button
									type="button"
									onClick={() => toggleAccordion(index)}
									className="flex w-full items-center justify-between py-6"
								>
									<div className="flex items-center gap-4">
										<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
											<span className="text-[13px] font-bold text-white">
												{String(index + 1).padStart(2, "0")}
											</span>
										</div>
										<span className="text-lg font-semibold text-[#0D0D0D] text-left">
											{faq.question}
										</span>
									</div>
									<span
										className={`text-2xl font-light shrink-0 ml-4 ${
											isOpen ? "text-primary" : "text-[#999999]"
										}`}
									>
										{isOpen ? "−" : "+"}
									</span>
								</button>
								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${
										isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
									}`}
								>
									<div className="pb-6 pl-[52px]">
										<p className="text-[15px] font-normal text-[#666666] leading-[1.7]">
											{faq.answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
