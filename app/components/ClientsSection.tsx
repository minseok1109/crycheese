"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";

const clients = [
	{
		name: "토스",
		event: "프론트엔드 다이빙 클럽",
		image: "/placeholder-client.png",
	},
	{
		name: "GS",
		event: "전사 해커톤",
		image: "/placeholder-client.png",
	},
	{
		name: "쏘카",
		event: "디너톡",
		image: "/placeholder-client.png",
	},
	{
		name: "원티드랩",
		event: "10주년 축하행사",
		image: "/placeholder-client.png",
	},
	{
		name: "딜라이트룸",
		event: "사내 워크샵",
		image: "/placeholder-client.png",
	},
];

export default function ClientsSection(): React.ReactElement {
	useGSAP(() => {
		// 애니메이션은 Task 3에서 추가
	}, []);

	return (
		<section className="clients-section bg-white py-[100px] px-20">
			<div className="flex flex-col items-center gap-[60px]">
				{/* Header */}
				<div className="clients-header flex flex-col items-center gap-4">
					<span className="text-[13px] font-semibold text-primary tracking-[3px]">
						CLIENTS
					</span>
					<h2 className="text-[44px] font-bold text-[#0D0D0D] text-center">
						함께한 고객사
					</h2>
				</div>

				{/* Card Grid */}
				<div className="clients-grid w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{clients.map((client) => (
						<div
							key={client.name}
							className="client-card flex flex-col items-center gap-4"
						>
							{/* Image placeholder */}
							<div className="w-full aspect-[4/3] rounded-xl bg-[#F5F5F5] overflow-hidden transition-transform duration-300 hover:scale-105">
								{/* 실제 이미지는 추후 추가 */}
							</div>
							{/* Client info */}
							<div className="flex flex-col items-center gap-1">
								<span className="text-lg font-bold text-[#0D0D0D] text-center">
									{client.name}
								</span>
								<span className="text-sm text-[#666666] text-center">
									{client.event}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
