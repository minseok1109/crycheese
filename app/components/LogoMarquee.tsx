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

// gap-8 = 32px (tailwind)
const GAP_PX = 32;

function LogoRow(): React.ReactElement {
  return (
    <div className="logo-row flex gap-8 shrink-0">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="shrink-0 flex items-center justify-center w-[120px] h-[48px] md:w-[180px] md:h-[60px] lg:w-[240px] lg:h-[72px]"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={240}
            height={72}
            className="object-contain max-h-full w-auto"
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // 첫 번째 LogoRow의 너비를 계산
      const logoRow = track.querySelector(".logo-row") as HTMLElement;
      if (!logoRow) return;

      const rowWidth = logoRow.offsetWidth + GAP_PX;

      // 왼쪽에서 오른쪽으로 이동하는 무한 마퀴
      gsap.fromTo(
        track,
        { x: -rowWidth },
        {
          x: 0,
          duration: 20,
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
      <div ref={trackRef} className="flex gap-8">
        <LogoRow />
        <LogoRow />
      </div>
    </section>
  );
}
