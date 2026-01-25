import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "기업 행사 케이터링 | 크라이치즈버거",
	description:
		"스타트업이 가장 사랑하는 버거, 크라이치즈버거가 여러분의 행사를 특별하게 만들어 드립니다.",
};

export default function EventPage() {
	return (
		<main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#F8B81C] selection:text-[#1A1A1A]">
			<section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
				<div className="absolute inset-0 z-0">
					<Image
						src="/event/event-2.svg"
						alt="Corporate Event Background"
						fill
						className="object-cover opacity-60"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
					<span className="inline-block py-1 px-3 rounded-full bg-[#F8B81C] text-[#1A1A1A] text-sm font-bold tracking-wide mb-6">
						CORPORATE CATERING
					</span>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						크라이치즈버거
						<br />
						기업 행사 케이터링
					</h1>
					<p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
						스타트업이 가장 사랑하는 버거,
						<br className="md:hidden" />
						크라이치즈버거가 여러분의 행사를 특별하게 만들어 드립니다
					</p>
					<button
						type="button"
						className="bg-[#F8B81C] hover:bg-[#E5A617] text-[#1A1A1A] font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-transparent"
					>
						문의하기
					</button>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
							크라이치즈버거 기업 행사 서비스
						</h2>
						<p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
							단순한 식사가 아닌, 행사의 품격을 높이는 경험을 제공합니다.
							크라이치즈버거의 신선한 맛과 에너지를 오피스에서 그대로
							즐겨보세요.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6 text-3xl">
								🍔
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">
								맞춤형 케이터링
							</h3>
							<p className="text-gray-600 leading-relaxed">
								행사 규모와 예산에 맞춰
								<br />
								최적의 메뉴 구성을 제안해 드립니다.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6 text-3xl">
								🥬
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">
								신선한 재료
							</h3>
							<p className="text-gray-600 leading-relaxed">
								매일 아침 준비되는 신선한 야채와
								<br />
								100% 순쇠고기 패티를 사용합니다.
							</p>
						</div>

						<div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-[#FFF8E7] rounded-full flex items-center justify-center mb-6 text-3xl">
								🚚
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">
								편리한 배송
							</h3>
							<p className="text-gray-600 leading-relaxed">
								원하는 시간과 장소에 맞춰
								<br />
								가장 따뜻한 상태로 전달해 드립니다.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-end mb-12">
						<div>
							<span className="text-[#F8B81C] font-bold tracking-wider text-sm uppercase mb-2 block">
								Gallery
							</span>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								행사 현장 스케치
							</h2>
						</div>
						<p className="text-gray-500 mt-4 md:mt-0">
							수많은 기업들과 함께한 즐거운 순간들입니다.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
							<Image
								src="/event/event-1.svg"
								alt="크라이치즈버거 포장백을 전달받는 고객의 손"
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 transition-opacity duration-300"></div>
							<div className="absolute bottom-0 left-0 p-6">
								<p className="text-white text-lg font-bold">딜리버리 서비스</p>
								<p className="text-gray-300 text-sm mt-1">
									따뜻한 마음을 전달합니다
								</p>
							</div>
						</div>

						<div className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
							<Image
								src="/event/event-2.svg"
								alt="버거 모자를 쓴 크라이치즈버거 직원들이 컨퍼런스에서 서비스하는 모습"
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 transition-opacity duration-300"></div>
							<div className="absolute bottom-0 left-0 p-6">
								<p className="text-white text-lg font-bold">현장 케이터링</p>
								<p className="text-gray-300 text-sm mt-1">
									전문 스태프의 친절한 서비스
								</p>
							</div>
						</div>

						<div className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
							<Image
								src="/event/event-3.svg"
								alt="스파크플러스에서 진행된 스타트업 행사 발표 현장"
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 transition-opacity duration-300"></div>
							<div className="absolute bottom-0 left-0 p-6">
								<p className="text-white text-lg font-bold">
									스타트업 행사 지원
								</p>
								<p className="text-gray-300 text-sm mt-1">
									성공적인 행사를 위한 파트너
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
							크라이치즈버거만의 특장점
						</h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
							<div className="text-4xl mb-6">🍅</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-900">
								프리미엄 재료
							</h3>
							<p className="text-gray-600 leading-relaxed">
								냉동이 아닌 냉장 100% 소고기 패티, 신선한 야채, 그리고 치즈
								본연의 맛. 타협하지 않는 재료 원칙으로 최고의 맛을 선사합니다.
							</p>
						</div>

						<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
							<div className="text-4xl mb-6">🎯</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-900">
								맞춤 서비스
							</h3>
							<p className="text-gray-600 leading-relaxed">
								소규모 미팅부터 대형 컨퍼런스까지. 행사의 성격과 인원에 맞춰
								가장 효율적이고 만족스러운 구성을 제안합니다.
							</p>
						</div>

						<div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
							<div className="text-4xl mb-6">🤝</div>
							<h3 className="text-2xl font-bold mb-4 text-gray-900">
								신뢰의 파트너
							</h3>
							<p className="text-gray-600 leading-relaxed">
								수많은 스타트업과 기업들이 선택한 파트너. &ldquo;국내 스타트업
								생태계를 진심으로 응원합니다&rdquo;라는 슬로건 아래 함께
								성장합니다.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-[#F8B81C] to-[#FFCE54] transform skew-y-3 origin-bottom-left scale-110"></div>
				<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#1A1A1A]">
					<h2 className="text-3xl md:text-5xl font-bold mb-8">
						기업 행사를 계획하고 계신가요?
					</h2>
					<p className="text-xl opacity-90 mb-10 font-medium">
						크라이치즈버거와 함께 특별한 순간을 만들어 보세요.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							type="button"
							className="bg-white text-[#1A1A1A] text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
						>
							견적 문의하기
						</button>
						<button
							type="button"
							className="bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] text-lg font-bold py-4 px-12 rounded-full hover:bg-black/10 transition-colors"
						>
							제안서 다운로드
						</button>
					</div>
				</div>
			</section>

			<footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="text-lg font-bold text-white flex items-center gap-2">
						<span className="w-8 h-8 rounded-full bg-[#F8B81C] flex items-center justify-center text-[#1A1A1A] text-xs">
							C
						</span>
						CRYCHEESE BURGER
					</div>
					<div className="text-sm">
						© 2025 크라이치즈버거. All rights reserved.
					</div>
				</div>
			</footer>
		</main>
	);
}
