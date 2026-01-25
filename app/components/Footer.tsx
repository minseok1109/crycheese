export default function Footer(): React.ReactElement {
	return (
		<footer
			id="footer"
			className="bg-[#1A1A1A] py-20 px-6 lg:px-[120px]"
		>
			<div className="flex flex-col gap-12">
				{/* CTA Card */}
				<div className="bg-[#2D2D2D] rounded-2xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					<h3 className="text-xl font-semibold text-white">
						케이터링 서비스가 더 궁금하신가요?
					</h3>
					<a
						href="/crycheese-catering.pdf"
						download
						className="flex items-center gap-2 rounded-lg border border-[#666666] px-7 py-3.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
					>
						<span>📄</span>
						<span>소개서 다운로드</span>
					</a>
				</div>

				{/* Divider */}
				<div className="w-full h-px bg-[#2D2D2D]" />

				{/* Info Section */}
				<div className="flex flex-col gap-4">
					<h4 className="text-xl font-bold text-white">
						크라이치즈버거
					</h4>
					<div className="flex flex-col gap-2">
						<div className="flex gap-4">
							<span className="text-sm font-normal text-[#999999]">고객센터</span>
							<span className="text-sm font-normal text-[#E5E5E5]">000-0000-0000</span>
						</div>
						<div className="flex gap-4">
							<span className="text-sm font-normal text-[#999999]">이메일</span>
							<span className="text-sm font-normal text-[#E5E5E5]">contact@crycheese.com</span>
						</div>
						<div className="flex gap-4">
							<span className="text-sm font-normal text-[#999999]">운영시간</span>
							<span className="text-sm font-normal text-[#E5E5E5]">평일 09:00 - 18:00</span>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="w-full h-px bg-[#2D2D2D]" />

				{/* Copyright */}
				<p className="text-[13px] font-normal text-[#666666]">
					© {new Date().getFullYear()} 크라이치즈버거. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
