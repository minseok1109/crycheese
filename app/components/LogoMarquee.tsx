"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap/register";

const logos = [
  { src: "/logo/GS52g.png", alt: "GS25" },
  { src: "/logo/팀스파르타.png", alt: "팀스파르타" },
  { src: "/logo/클래스101.png", alt: "클래스101" },
  { src: "/logo/p&g.png", alt: "P&G" },
  { src: "/logo/인프랩.png", alt: "인프랩" },
  { src: "/logo/엘리스코딩.png", alt: "엘리스코딩" },
  { src: "/logo/딜라이트룸.png", alt: "딜라이트룸" },
  { src: "/logo/놀유니버스.png", alt: "놀유니버스" },
  { src: "/logo/카카오뱅크.png", alt: "카카오뱅크" },
  { src: "/logo/lunit.png", alt: "Lunit" },
  { src: "/logo/remember.png", alt: "Remember" },
  { src: "/logo/toss.png", alt: "Toss" },
];

function LogoRow(): React.ReactElement {
  return (
    <div className="flex gap-16 shrink-0">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="shrink-0 flex items-center justify-center w-[240px] h-[72px]"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={240}
            height={72}
            className="object-contain max-h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 왼쪽에서 오른쪽으로 이동 (무한 마퀴 효과)
      gsap.fromTo(
        ".marquee-track",
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 5,
          ease: "none",
          repeat: -1,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col gap-10 w-full bg-white py-16 overflow-hidden"
    >
      {/* 타이틀 */}
      <h2 className="text-center text-3xl font-bold text-black mb-9">
        수많은 기업이 먼저 함께 했습니다
      </h2>

      {/* 두 개의 동일한 로고 row를 나란히 배치 */}
      <div className="marquee-track flex gap-16">
        <LogoRow />
        <LogoRow />
      </div>
    </section>
  );
}
