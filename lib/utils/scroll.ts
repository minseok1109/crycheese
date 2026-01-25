import { gsap } from "@/lib/gsap/register";

/**
 * GSAP ScrollToPlugin을 사용해 부드러운 스크롤 이동을 수행합니다.
 */
export function scrollToElement(
	e: React.MouseEvent<HTMLAnchorElement>,
	href: string,
): void {
	e.preventDefault();
	const targetId = href.replace("#", "");
	const element = document.getElementById(targetId);

	if (element) {
		gsap.to(window, {
			duration: 1,
			scrollTo: { y: element, offsetY: 80 },
			ease: "power3.inOut",
		});
	}
}
