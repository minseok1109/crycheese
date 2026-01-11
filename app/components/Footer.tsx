import Link from "next/link";

export default function Footer(): React.ReactElement {
	return (
		<footer className="bg-zinc-50 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<div className="flex justify-center space-x-10">
					<Link href="#" className="text-zinc-400 hover:text-zinc-500">
						Instagram
					</Link>
					<Link href="#" className="text-zinc-400 hover:text-zinc-500">
						문의하기
					</Link>
				</div>
				<div className="mt-10 text-center text-xs leading-5 text-zinc-500">
					<p>
						&copy; {new Date().getFullYear()} Cry Cheese Burger. All rights
						reserved.
					</p>
					<p className="mt-2">고객센터: help@crycheeseburger.com</p>
				</div>
			</div>
		</footer>
	);
}
