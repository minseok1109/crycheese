export default function Footer(): React.ReactElement {
	return (
		<footer
			id="footer"
			className="bg-[#F5F5F5] py-20 px-6 lg:px-[120px]"
		>
			<div className="flex flex-col gap-12">
				{/* CTA Card */}
				<div className="bg-white border border-[#EEEEEE] rounded-2xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					<h3 className="text-xl font-semibold text-[#0D0D0D]">
						케이터링 서비스가 더 궁금하신가요?
					</h3>
					<a
						href="/crycheese-catering.pdf"
						download
						className="flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
					>
						<span>📄</span>
						<span>소개서 다운로드</span>
					</a>
				</div>

				{/* Divider */}
				<div className="w-full h-px bg-[#EEEEEE]" />

				{/* Info Section */}
				<div className="flex flex-col gap-4">
					<h4 className="text-xl font-bold text-[#0D0D0D]">
						크라이치즈버거
					</h4>
					<div className="flex flex-col gap-2">
						<div className="flex gap-4">
							<span className="text-sm font-normal text-[#999999]">고객센터</span>
							<span className="text-sm font-normal text-[#333333]">000-0000-0000</span>
						</div>
						<div className="flex gap-4">
							<span className="text-sm font-normal text-[#999999]">이메일</span>
							<span className="text-sm font-normal text-[#333333]">contact@crycheese.com</span>
						</div>
						<div className="flex gap-4">
							<span className="text-sm font-normal text-[#999999]">운영시간</span>
							<span className="text-sm font-normal text-[#333333]">평일 09:00 - 18:00</span>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="w-full h-px bg-[#EEEEEE]" />

				{/* Copyright */}
				<p className="text-[13px] font-normal text-[#999999]">
					© {new Date().getFullYear()} 크라이치즈버거. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
