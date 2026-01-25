# ClientsSection 컴포넌트 구현 계획

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** FAQ 섹션 다음에 고객사 쇼케이스 섹션을 추가하여 기업 케이터링 서비스 이용 고객사들을 보여준다.

**Architecture:** FAQSection과 동일한 패턴으로 섹션 헤더 + 5열 카드 그리드 구성. GSAP ScrollTrigger로 스크롤 애니메이션 적용. 플레이스홀더 이미지로 시작하여 추후 실제 이미지로 교체.

**Tech Stack:** Next.js 16 + React 19 + Tailwind CSS 4 + GSAP

---

## Task 1: ClientsSection 컴포넌트 기본 구조 생성

**Files:**
- Create: `app/components/ClientsSection.tsx`

**Step 1: 컴포넌트 파일 생성 및 기본 구조 작성**

```tsx
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";

const clients = [
	{
		name: "토스",
		event: "프론트엔드 다이빙 클럽",
		image: "/placeholder-client.png",
	},
	{
		name: "GS",
		event: "전사 해커톤",
		image: "/placeholder-client.png",
	},
	{
		name: "쏘카",
		event: "디너톡",
		image: "/placeholder-client.png",
	},
	{
		name: "원티드랩",
		event: "10주년 축하행사",
		image: "/placeholder-client.png",
	},
	{
		name: "딜라이트룸",
		event: "사내 워크샵",
		image: "/placeholder-client.png",
	},
];

export default function ClientsSection(): React.ReactElement {
	useGSAP(() => {
		// 애니메이션은 Task 3에서 추가
	}, []);

	return (
		<section className="clients-section bg-white py-[100px] px-20">
			<div className="flex flex-col items-center gap-[60px]">
				{/* Header */}
				<div className="clients-header flex flex-col items-center gap-4">
					<span className="text-[13px] font-semibold text-primary tracking-[3px]">
						CLIENTS
					</span>
					<h2 className="text-[44px] font-bold text-[#0D0D0D] text-center">
						함께한 고객사
					</h2>
				</div>

				{/* Grid - placeholder */}
				<div className="clients-grid">
					{/* 카드 그리드는 Task 2에서 구현 */}
				</div>
			</div>
		</section>
	);
}
```

**Step 2: 개발 서버에서 확인**

Run: `bun dev`
Expected: 서버 실행 (에러 없음)

**Step 3: 커밋**

```bash
git add app/components/ClientsSection.tsx
git commit -m "feat(ClientsSection): 컴포넌트 기본 구조 및 데이터 정의"
```

---

## Task 2: 카드 그리드 구현

**Files:**
- Modify: `app/components/ClientsSection.tsx:46-48`

**Step 1: 카드 그리드 및 반응형 레이아웃 구현**

`{/* Grid - placeholder */}` 부분을 다음으로 교체:

```tsx
{/* Card Grid */}
<div className="clients-grid w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
	{clients.map((client) => (
		<div
			key={client.name}
			className="client-card flex flex-col items-center gap-4"
		>
			{/* Image placeholder */}
			<div className="w-full aspect-[4/3] rounded-xl bg-[#F5F5F5] overflow-hidden transition-transform duration-300 hover:scale-105">
				{/* 실제 이미지는 추후 추가 */}
			</div>
			{/* Client info */}
			<div className="flex flex-col items-center gap-1">
				<span className="text-lg font-bold text-[#0D0D0D] text-center">
					{client.name}
				</span>
				<span className="text-sm text-[#666666] text-center">
					{client.event}
				</span>
			</div>
		</div>
	))}
</div>
```

**Step 2: 브라우저에서 반응형 확인**

- 데스크탑 (1280px+): 5열 그리드
- 태블릿 (768px-1279px): 3열 그리드
- 모바일 (~767px): 2열 그리드

**Step 3: 커밋**

```bash
git add app/components/ClientsSection.tsx
git commit -m "feat(ClientsSection): 반응형 카드 그리드 구현"
```

---

## Task 3: GSAP 스크롤 애니메이션 추가

**Files:**
- Modify: `app/components/ClientsSection.tsx:22-24`

**Step 1: useGSAP 내부 애니메이션 로직 추가**

`useGSAP` 콜백을 다음으로 교체:

```tsx
useGSAP(() => {
	// Header animation
	gsap.from(".clients-header", {
		scrollTrigger: {
			trigger: ".clients-section",
			start: "top 80%",
		},
		y: 30,
		opacity: 0,
		duration: 0.8,
		ease: "power3.out",
	});

	// Cards stagger animation
	gsap.from(".client-card", {
		scrollTrigger: {
			trigger: ".clients-grid",
			start: "top 80%",
		},
		y: 40,
		opacity: 0,
		duration: 0.6,
		stagger: 0.1,
		ease: "power3.out",
	});
}, []);
```

**Step 2: 브라우저에서 스크롤 애니메이션 확인**

- 섹션으로 스크롤 시 헤더가 먼저 페이드인
- 이어서 카드들이 순차적으로 페이드인

**Step 3: 커밋**

```bash
git add app/components/ClientsSection.tsx
git commit -m "feat(ClientsSection): GSAP 스크롤 애니메이션 추가"
```

---

## Task 4: 메인 페이지에 컴포넌트 통합

**Files:**
- Modify: `app/page.tsx:4` (import 추가)
- Modify: `app/page.tsx:24` (컴포넌트 배치)

**Step 1: import 문 추가**

`app/page.tsx` 상단 import 섹션에 추가 (FAQSection import 다음):

```tsx
import ClientsSection from "./components/ClientsSection";
```

**Step 2: 컴포넌트 배치**

`<FAQSection />` 다음, `</main>` 이전에 추가:

```tsx
<ClientsSection />
```

최종 구조:
```tsx
<main>
	<Hero />
	<FeatureSection />
	<EventSupportSection />
	<MenuPreview />
	<CaseStudySection />
	<OrderProcessSection />
	<InquiryForm />
	<FAQSection />
	<ClientsSection />
</main>
```

**Step 3: 브라우저에서 전체 페이지 확인**

- FAQ 섹션 다음에 ClientsSection 표시
- 스크롤 애니메이션 정상 동작

**Step 4: 커밋**

```bash
git add app/page.tsx
git commit -m "feat(page): ClientsSection 컴포넌트 통합"
```

---

## Task 5: 모바일 반응형 최적화

**Files:**
- Modify: `app/components/ClientsSection.tsx:29,32,36`

**Step 1: 섹션 패딩 반응형 적용**

섹션 className 수정:
```tsx
<section className="clients-section bg-white py-[60px] px-5 md:py-[100px] md:px-20">
```

**Step 2: 헤더 타이틀 반응형 적용**

제목 className 수정:
```tsx
<h2 className="text-[28px] md:text-[44px] font-bold text-[#0D0D0D] text-center">
```

**Step 3: 그리드 갭 반응형 적용**

그리드 className 수정:
```tsx
<div className="clients-grid w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
```

**Step 4: 모바일 뷰포트에서 확인**

- 모바일 (375px): 패딩 축소, 제목 28px, 갭 4
- 태블릿/데스크탑: 원래 스타일 유지

**Step 5: 커밋**

```bash
git add app/components/ClientsSection.tsx
git commit -m "style(ClientsSection): 모바일 반응형 스타일 최적화"
```

---

## 최종 파일 구조

```
app/
├── components/
│   └── ClientsSection.tsx  (새로 생성)
└── page.tsx                 (수정 - import 및 배치 추가)
```

## 추후 작업 (이 계획 범위 밖)

- [ ] 실제 고객사 이미지 추가 (`public/clients/` 폴더)
- [ ] Next.js Image 컴포넌트로 이미지 최적화
- [ ] 고객사별 로고 또는 행사 사진 적용
