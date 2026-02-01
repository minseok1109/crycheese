"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToElement } from "@/lib/utils/scroll";

export default function Header(): React.ReactElement {
	return (
		<header className="sticky top-0 z-50 w-full bg-white h-20">
			<div className="mx-auto flex h-full items-center justify-between px-6 lg:px-[120px]">
				<Link href="/" className="flex items-center">
					<Image
						src="/logo_character_with_text.png"
						alt="크라이치즈버거 로고"
						width={224}
						height={224}
						className="h-56 w-auto"
						priority
					/>
				</Link>

				<Link
					href="#inquiry"
					className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm md:px-6 md:py-3 md:text-base font-semibold text-black transition-all hover:bg-primary-dark hover:shadow-lg active:scale-95"
					onClick={(e) => scrollToElement(e, "#inquiry")}
				>
					<span>문의하기</span>
					<span>→</span>
				</Link>
			</div>
		</header>
	);
}
