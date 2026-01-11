import Image from "next/image";
import Link from "next/link";

const NAV_LINK_STYLES =
	"text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors";

const navLinks = [
	{ href: "#", label: "브랜드 스토리" },
	{ href: "#", label: "메뉴" },
	{ href: "#", label: "매장 찾기" },
];

export default function Header(): React.ReactElement {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center gap-2">
					<div className="relative h-8 w-8 overflow-hidden rounded-full">
						<Image
							src="/crycheese-logo.png"
							alt="Cry Cheese Burger Logo"
							fill
							className="object-cover"
						/>
					</div>
					<span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
						Cry Cheese Burger
					</span>
				</Link>
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link key={link.label} href={link.href} className={NAV_LINK_STYLES}>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-4">
					<Link
						href="#inquiry"
						className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105 active:scale-95"
					>
						단체 주문
					</Link>
				</div>
			</div>
		</header>
	);
}
