"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { gsap } from "@/lib/gsap/register";

const EVENT_IMAGES = [
	{ src: "/event/event_photo_1.jpg", alt: "기업 케이터링 행사" },
	{ src: "/event/event_photo_2.jpg", alt: "사내 행사 케이터링" },
	{ src: "/event/event_photo_3.jpg", alt: "버거 케이터링 서비스" },
	{ src: "/event/event_photo_5.jpeg", alt: "행사 현장 세팅" },
	{ src: "/event/event_photo_6.jpeg", alt: "케이터링 서비스 현장" },
	{ src: "/event/main_screen.jpg", alt: "메인 행사 스크린" },
	{ src: "/event/mascot_promo_1.jpeg", alt: "크라이치즈 마스코트" },
	{ src: "/event/package_photo.jpg", alt: "버거 패키지" },
	{ src: "/event/burger_bag_handover.jpeg", alt: "버거 전달 현장" },
	{ src: "/event/burger_prep_kitchen.jpeg", alt: "버거 조리 준비" },
	{ src: "/event/event_booth_hecto.jpeg", alt: "헥토 이벤트 부스" },
	{ src: "/event/mascot_photo_moment.jpeg", alt: "마스코트 포토타임" },
];

const BREAKPOINT_COLS = {
	default: 4,
	1280: 3,
	768: 2,
	480: 1,
};

export default function EventGallery(): React.ReactElement {
	useGSAP(() => {
		gsap.from(".gallery-title", {
			scrollTrigger: {
				trigger: ".gallery-section",
				start: "top 80%",
			},
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});

		gsap.from(".gallery-item", {
			scrollTrigger: {
				trigger: ".gallery-grid",
				start: "top 85%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: "power3.out",
		});
	}, []);

	return (
		<section className="gallery-section bg-[#FAF8F4] py-[100px] px-6 lg:px-20">
			<div className="flex flex-col items-center gap-[60px]">
				{/* Header */}
				<h2 className="gallery-title text-[44px] font-bold text-[#0D0D0D] text-center">
					행사 현장
				</h2>

				{/* Masonry Gallery */}
				<Masonry
					breakpointCols={BREAKPOINT_COLS}
					className="gallery-grid flex w-full gap-4"
					columnClassName="masonry-column flex flex-col gap-4"
				>
					{EVENT_IMAGES.map((image, index) => (
						<div
							key={image.src}
							className="gallery-item group relative overflow-hidden rounded-2xl"
						>
							<Image
								src={image.src}
								alt={image.alt}
								width={600}
								height={400}
								className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-110"
								sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
								priority={index < 4}
							/>
						</div>
					))}
				</Masonry>
			</div>
		</section>
	);
}
