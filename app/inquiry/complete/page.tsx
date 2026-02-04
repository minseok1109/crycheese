import Link from "next/link";

export default function InquiryCompletePage(): React.ReactElement {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white px-6">
			<div className="text-center">
				<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
					<svg
						className="h-8 w-8 text-green-600"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12.75l6 6 9-13.5"
						/>
					</svg>
				</div>
				<h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
					문의가 접수되었습니다
				</h1>
				<p className="mt-4 text-lg leading-8 text-zinc-600">
					24시간 이내에 담당자가 연락드리겠습니다.
				</p>
				<div className="mt-10">
					<Link
						href="/"
						className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
					>
						홈으로 돌아가기
					</Link>
				</div>
			</div>
		</main>
	);
}
