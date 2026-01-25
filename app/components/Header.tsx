"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollToElement } from "@/lib/utils/scroll";

export default function Header(): React.ReactElement {
	return (
		<header className="sticky top-0 z-50 w-full bg-white h-20">
			<div className="mx-auto flex h-full items-center justify-between px-6 lg:px-[120px]">
				<Link href="/" className="flex items-center">
					<div className="relative h-[50px] w-[200px]">
						<Image
							src="/crycheese-logo.png"
							alt="크라이치즈버거 로고"
							fill
							className="object-contain object-left"
						/>
					</div>
				</Link>

				<Link
					href="#inquiry"
					className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-primary-dark hover:shadow-lg active:scale-95"
					onClick={(e) => scrollToElement(e, "#inquiry")}
				>
					<span>단체 상담하기</span>
					<span>→</span>
				</Link>
			</div>
		</header>
	);
}
