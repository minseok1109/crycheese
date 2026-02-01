# Logo Marquee 컴포넌트 생성

## Context

### Original Request
GSAP를 사용해 `public/logo/` 폴더의 이미지들로 무한 반복되는 로고 캐러셀 컴포넌트 생성

### 사용할 로고 이미지
- `/logo/놀유니버스.png`
- `/logo/딜라이트룸.png`
- `/logo/엘리스코딩.png`
- `/logo/인프랩.png`
- `/logo/p&g.png`
- `/logo/클래스101.png`
- `/logo/팀스파르타.png`
- `/logo/GS52g.png`

---

## Work Objectives

### Core Objective
GSAP를 활용해 로고들이 좌측으로 무한 스크롤되는 마키(Marquee) 컴포넌트 구현

### Concrete Deliverables
- `app/components/LogoMarquee.tsx` 컴포넌트

### Definition of Done
- [ ] 로고가 좌측으로 부드럽게 스크롤됨
- [ ] 끊김 없이 무한 반복됨
- [ ] 호버 시 그레이스케일 해제 효과
- [ ] 좌우 페이드 그라데이션 적용

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO (테스트 불필요)
- **User wants tests**: Manual-only
- **QA approach**: 브라우저에서 시각적 확인

---

## TODOs

- [ ] 1. LogoMarquee 컴포넌트 생성

  **What to do**:
  - `app/components/LogoMarquee.tsx` 생성
  - GSAP 무한 애니메이션 구현 (`repeat: -1`, x축 이동)
  - 로고 2번 복제하여 끊김 없는 스크롤 구현
  - 호버 효과 (grayscale 해제, scale 확대)
  - 좌우 페이드 그라데이션

  **Parallelizable**: NO (단일 작업)

  **References**:
  - `lib/gsap/register.ts` - GSAP import 패턴
  - `app/components/Hero.tsx:14-81` - useGSAP 사용 패턴
  - `app/components/ClientsSection.tsx` - 섹션 레이아웃 스타일

  **구현 코드**:
  ```tsx
  "use client";

  import { useGSAP } from "@gsap/react";
  import Image from "next/image";
  import { useRef } from "react";
  import { gsap } from "@/lib/gsap/register";

  const logos = [
    { name: "놀유니버스", src: "/logo/놀유니버스.png" },
    { name: "딜라이트룸", src: "/logo/딜라이트룸.png" },
    { name: "엘리스코딩", src: "/logo/엘리스코딩.png" },
    { name: "인프랩", src: "/logo/인프랩.png" },
    { name: "P&G", src: "/logo/p&g.png" },
    { name: "클래스101", src: "/logo/클래스101.png" },
    { name: "팀스파르타", src: "/logo/팀스파르타.png" },
    { name: "GS", src: "/logo/GS52g.png" },
  ];

  export default function LogoMarquee(): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(
      () => {
        if (!trackRef.current) return;

        const track = trackRef.current;
        const items = track.querySelectorAll(".logo-item");
        
        // 전체 트랙 너비의 절반만큼 이동 (복제된 로고 세트)
        const totalWidth = track.scrollWidth / 2;

        gsap.to(track, {
          x: -totalWidth,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });

        // 개별 로고 호버 효과
        items.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.1, duration: 0.3, ease: "power2.out" });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
      },
      { scope: containerRef }
    );

    // 로고를 2번 복제하여 끊김 없는 무한 스크롤 구현
    const duplicatedLogos = [...logos, ...logos];

    return (
      <section
        ref={containerRef}
        className="logo-marquee-section bg-[#FAF8F4] py-12 md:py-16 overflow-hidden"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 px-5">
            <span className="text-[13px] font-semibold text-primary tracking-[3px]">
              TRUSTED BY
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-[#0D0D0D] text-center">
              함께한 기업들
            </h2>
          </div>

          {/* Logo Track */}
          <div className="w-full relative">
            {/* 좌우 페이드 그라데이션 */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#FAF8F4] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#FAF8F4] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <div
              ref={trackRef}
              className="flex items-center gap-12 md:gap-16 w-max"
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="logo-item flex-shrink-0 w-[120px] md:w-[160px] h-[60px] md:h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} 로고`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 160px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  ```

  **Acceptance Criteria**:
  - [ ] 파일 생성됨: `app/components/LogoMarquee.tsx`
  - [ ] `bun dev` 실행 후 에러 없음
  - [ ] 브라우저에서 로고 좌측 스크롤 확인
  - [ ] 끊김 없이 무한 반복 확인
  - [ ] 호버 시 색상 복원 및 확대 효과 확인

  **Commit**: YES
  - Message: `feat(components): add LogoMarquee infinite scroll component`
  - Files: `app/components/LogoMarquee.tsx`

---

## Success Criteria

### Verification Commands
```bash
bun dev  # 개발 서버 실행
# http://localhost:3000 접속하여 로고 마키 확인
```

### Final Checklist
- [ ] 로고 무한 스크롤 동작
- [ ] GSAP 애니메이션 매끄러움
- [ ] 반응형 (모바일/데스크톱)
- [ ] 접근성 (alt 텍스트)
