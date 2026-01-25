"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";

const steps = [
	{
		number: "01",
		title: "주문서\n양식 입력",
	},
	{
		number: "02",
		title: "담당 매니저\n확인 및 연락",
	},
	{
		number: "03",
		title: "주문\n확정",
	},
];

export default function OrderProcessSection(): React.ReactElement {
	useGSAP(() => {
		gsap.from(".process-title", {
			scrollTrigger: {
				trigger: ".process-section",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".process-step", {
			scrollTrigger: {
				trigger: ".process-steps",
				start: "top 85%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: "power3.out",
		});

		gsap.from(".process-line", {
			scrollTrigger: {
				trigger: ".process-steps",
				start: "top 85%",
			},
			scaleX: 0,
			opacity: 0,
			duration: 0.6,
			stagger: 0.2,
			delay: 0.3,
			ease: "power3.out",
		});
	}, []);

	return (
		<section className="process-section bg-[#F5F5F5] py-[100px] px-6 lg:px-[120px]">
			<div className="flex flex-col gap-12">
				{/* Title */}
				<h2 className="process-title text-[42px] font-bold text-[#0D0D0D]">
					주문 프로세스
				</h2>

				{/* Steps */}
				<div className="process-steps flex flex-col lg:flex-row items-center w-full">
					{steps.map((step, index) => (
						<div key={step.number} className="contents">
							{/* Step */}
							<div className="process-step flex-1 flex flex-col items-center gap-5">
								<span className="text-[48px] font-bold text-primary">
									{step.number}
								</span>
								<p className="text-xl font-semibold text-[#0D0D0D] text-center leading-[1.4] whitespace-pre-line">
									{step.title}
								</p>
							</div>

							{/* Connector Line */}
							{index < steps.length - 1 && (
								<>
									{/* Desktop Line */}
									<div className="process-line hidden lg:flex items-center justify-center w-[100px] h-[60px]">
										<div className="w-full h-0.5 bg-[#E5E5E5]" />
									</div>
									{/* Mobile Line */}
									<div className="process-line lg:hidden flex items-center justify-center h-[60px] w-[2px]">
										<div className="h-full w-0.5 bg-[#E5E5E5]" />
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
