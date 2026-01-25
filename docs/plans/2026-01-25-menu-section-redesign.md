# 메뉴 섹션 탭 네비게이션 리디자인 구현 계획

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 현재 4개 섹션으로 나열된 메뉴를 탭 네비게이션으로 전환하여 세로 길이를 60% 감소시키고 사용성 개선

**Architecture:** RECOMMENDED 섹션은 유지하고, BURGER/SIDE/SET 섹션을 탭 기반 UI로 통합. React useState로 탭 상태 관리, GSAP로 탭 전환 애니메이션 구현.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, GSAP + ScrollTrigger

---

## 디자인 스펙 요약

### 탭 UI
- 비활성: `#999999`, 밑줄 없음
- 활성: `#0D0D0D`, 밑줄 `#F8B81C` (2px)
- 호버: `#0D0D0D`
- 폰트: 12px, font-weight 600, letter-spacing 2px
- 탭 간격: 32px
- 탭 영역 아래 구분선: `#E5E5E5`

### 카드 크기
- BURGER: 280px 너비, 200px 이미지
- SIDE/SET: 200px 너비, 140px 이미지

### 애니메이션
- 탭 전환: fade-in (opacity 0→1, y 20→0, 300ms)
- 카드 stagger: 0.1초

---

## Task 1: 탭 상태 관리 추가

**Files:**
- Modify: `app/components/MenuPreview.tsx:1-10`

**Step 1: 탭 타입과 상태 추가**

`"use client";` 아래에 다음 코드 추가:

```tsx
import { useState } from "react";

type TabType = "BURGER" | "SIDE" | "SET";
```

**Step 2: 컴포넌트 내부에 useState 추가**

`export default function MenuPreview()` 함수 시작부에:

```tsx
const [activeTab, setActiveTab] = useState<TabType>("BURGER");
```

**Step 3: 커밋**

```bash
git add app/components/MenuPreview.tsx
git commit -m "feat(MenuPreview): 탭 상태 관리 추가"
```

---

## Task 2: 탭 네비게이션 UI 구현

**Files:**
- Modify: `app/components/MenuPreview.tsx`

**Step 1: 탭 데이터 정의**

컴포넌트 외부에 추가:

```tsx
const tabs: { id: TabType; label: string }[] = [
	{ id: "BURGER", label: "BURGER" },
	{ id: "SIDE", label: "SIDE" },
	{ id: "SET", label: "SET" },
];
```

**Step 2: 탭 네비게이션 JSX 작성**

RECOMMENDED 섹션 아래, 기존 BURGER 섹션 자리에 다음 추가:

```tsx
{/* Tab Navigation */}
<div className="tab-navigation flex flex-col gap-6">
	<div className="flex gap-8">
		{tabs.map((tab) => (
			<button
				key={tab.id}
				onClick={() => setActiveTab(tab.id)}
				className={`relative text-xs font-semibold tracking-[2px] pb-2 transition-colors ${
					activeTab === tab.id
						? "text-[#0D0D0D]"
						: "text-[#999999] hover:text-[#0D0D0D]"
				}`}
			>
				{tab.label}
				{activeTab === tab.id && (
					<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F8B81C]" />
				)}
			</button>
		))}
	</div>
	<div className="w-full h-px bg-[#E5E5E5]" />
</div>
```

**Step 3: 개발 서버에서 탭 UI 확인**

```bash
bun dev
# 브라우저에서 http://localhost:3000 확인
# 탭 클릭 시 activeTab 상태 변경 확인
```

**Step 4: 커밋**

```bash
git add app/components/MenuPreview.tsx
git commit -m "feat(MenuPreview): 탭 네비게이션 UI 구현"
```

---

## Task 3: 탭별 콘텐츠 렌더링

**Files:**
- Modify: `app/components/MenuPreview.tsx`

**Step 1: 카테고리별 메뉴 맵 생성**

컴포넌트 외부에 추가:

```tsx
const menusByCategory: Record<TabType, MenuItem[]> = {
	BURGER: burgerMenus,
	SIDE: sideMenus,
	SET: setMenus,
};

const cardSizes: Record<TabType, { width: string; imageHeight: string }> = {
	BURGER: { width: "w-full sm:w-[280px]", imageHeight: "h-[200px]" },
	SIDE: { width: "w-[calc(50%-12px)] sm:w-[200px]", imageHeight: "h-[140px]" },
	SET: { width: "w-[calc(50%-12px)] sm:w-[200px]", imageHeight: "h-[140px]" },
};
```

**Step 2: 탭 콘텐츠 렌더링 JSX 추가**

탭 네비게이션 div 바로 아래에 추가:

```tsx
{/* Tab Content */}
<div className="tab-content flex flex-wrap gap-6">
	{menusByCategory[activeTab].map((menu) => {
		const sizes = cardSizes[activeTab];
		return (
			<div
				key={menu.name}
				className={`tab-menu-card ${sizes.width} rounded-2xl bg-[#F5F5F5] overflow-hidden transition-transform hover:scale-[1.02]`}
			>
				<div className={`relative w-full ${sizes.imageHeight} bg-[#E0E0E0]`}>
					<Image
						src={menu.image}
						alt={menu.name}
						fill
						className="object-cover"
					/>
				</div>
				<div className="p-4">
					<h3 className={`${activeTab === "BURGER" ? "text-lg" : "text-base"} font-semibold text-[#0D0D0D]`}>
						{menu.name}
					</h3>
				</div>
			</div>
		);
	})}
</div>
```

**Step 3: 개발 서버에서 확인**

```bash
bun dev
# 탭 클릭 시 해당 카테고리 메뉴 카드 표시 확인
# BURGER: 큰 카드 4개
# SIDE: 작은 카드 3개
# SET: 작은 카드 4개
```

**Step 4: 커밋**

```bash
git add app/components/MenuPreview.tsx
git commit -m "feat(MenuPreview): 탭별 콘텐츠 렌더링 구현"
```

---

## Task 4: 탭 전환 애니메이션

**Files:**
- Modify: `app/components/MenuPreview.tsx`

**Step 1: useRef 추가**

import 섹션에 추가:

```tsx
import { useRef } from "react";
```

컴포넌트 내부에 추가:

```tsx
const tabContentRef = useRef<HTMLDivElement>(null);
```

**Step 2: 탭 전환 시 애니메이션 함수 추가**

컴포넌트 내부에 추가:

```tsx
const handleTabChange = (tab: TabType) => {
	if (tab === activeTab) return;

	// 먼저 탭 상태 변경
	setActiveTab(tab);

	// 다음 틱에서 애니메이션 실행
	setTimeout(() => {
		if (tabContentRef.current) {
			gsap.fromTo(
				tabContentRef.current.querySelectorAll(".tab-menu-card"),
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					stagger: 0.1,
					ease: "power3.out",
				}
			);
		}
	}, 0);
};
```

**Step 3: 탭 버튼 onClick 업데이트**

기존:
```tsx
onClick={() => setActiveTab(tab.id)}
```

변경:
```tsx
onClick={() => handleTabChange(tab.id)}
```

**Step 4: tab-content div에 ref 추가**

```tsx
<div ref={tabContentRef} className="tab-content flex flex-wrap gap-6">
```

**Step 5: 개발 서버에서 애니메이션 확인**

```bash
bun dev
# 탭 전환 시 fade-in + stagger 애니메이션 동작 확인
```

**Step 6: 커밋**

```bash
git add app/components/MenuPreview.tsx
git commit -m "feat(MenuPreview): 탭 전환 애니메이션 추가"
```

---

## Task 5: 기존 섹션 코드 제거

**Files:**
- Modify: `app/components/MenuPreview.tsx`

**Step 1: 불필요한 GSAP 애니메이션 제거**

`useGSAP` 내부에서 다음 애니메이션 블록 삭제:
- `.burger-section` 관련 (라인 83-104)
- `.side-section` 관련 (라인 106-127)
- `.set-section` 관련 (라인 129-150)

유지할 애니메이션:
- `.menu-title`
- `.recommended-label`
- `.menu-card`

**Step 2: 탭 네비게이션 애니메이션 추가**

`useGSAP` 내부에 추가:

```tsx
gsap.from(".tab-navigation", {
	scrollTrigger: {
		trigger: ".tab-navigation",
		start: "top 85%",
	},
	y: 20,
	opacity: 0,
	duration: 0.6,
	ease: "power3.out",
});

gsap.from(".tab-content .tab-menu-card", {
	scrollTrigger: {
		trigger: ".tab-content",
		start: "top 85%",
	},
	y: 40,
	opacity: 0,
	duration: 0.8,
	stagger: 0.1,
	ease: "power3.out",
});
```

**Step 3: 기존 섹션 JSX 제거**

다음 섹션들 완전 삭제:
- `{/* Burger Section */}` 전체 (라인 199-229)
- `{/* Side Section */}` 전체 (라인 231-261)
- `{/* Set Section */}` 전체 (라인 263-293)

**Step 4: 개발 서버에서 최종 확인**

```bash
bun dev
# 페이지 로드 시 스크롤 애니메이션 동작 확인
# 탭 기능 정상 동작 확인
# 이전 섹션들이 제거되었는지 확인
```

**Step 5: 커밋**

```bash
git add app/components/MenuPreview.tsx
git commit -m "refactor(MenuPreview): 기존 섹션 코드 제거 및 정리"
```

---

## Task 6: 반응형 스타일 조정

**Files:**
- Modify: `app/components/MenuPreview.tsx`

**Step 1: 모바일 탭 간격 조정**

탭 컨테이너 클래스 수정:

기존:
```tsx
<div className="flex gap-8">
```

변경:
```tsx
<div className="flex gap-4 sm:gap-8">
```

**Step 2: 모바일에서 BURGER 카드 2열 그리드**

BURGER 카드 너비 수정:

기존:
```tsx
BURGER: { width: "w-full sm:w-[280px]", imageHeight: "h-[200px]" },
```

변경:
```tsx
BURGER: { width: "w-[calc(50%-12px)] sm:w-[280px]", imageHeight: "h-[200px]" },
```

**Step 3: 개발 서버에서 반응형 확인**

```bash
bun dev
# 브라우저 개발자 도구에서 모바일 뷰 확인
# 탭 간격 축소 확인
# BURGER 탭 2열 그리드 확인
```

**Step 4: 커밋**

```bash
git add app/components/MenuPreview.tsx
git commit -m "style(MenuPreview): 모바일 반응형 스타일 조정"
```

---

## Task 7: 빌드 검증

**Files:**
- None (검증만)

**Step 1: 린트 실행**

```bash
bun lint
```

Expected: 에러 없음

**Step 2: 프로덕션 빌드**

```bash
bun build
```

Expected: 빌드 성공

**Step 3: 최종 커밋 (필요시)**

린트 또는 빌드 에러가 있었다면 수정 후:

```bash
git add .
git commit -m "fix(MenuPreview): 빌드 에러 수정"
```

---

## 최종 결과물 구조

```
MenuPreview.tsx
├── imports (useState, useRef, useGSAP, gsap, Image)
├── types (TabType, MenuItem)
├── data (tabs, recommendedMenus, burgerMenus, sideMenus, setMenus, menusByCategory, cardSizes)
└── component
    ├── state (activeTab, tabContentRef)
    ├── handleTabChange()
    ├── useGSAP (title, recommended, tab-navigation, tab-content)
    └── JSX
        ├── 타이틀
        ├── RECOMMENDED 섹션 (기존 유지)
        ├── Tab Navigation
        └── Tab Content
```

## 기대 효과

| 항목 | 현재 | 개선안 |
|------|------|--------|
| 세로 길이 | 4개 섹션 풀 표시 | 1개 탭 콘텐츠만 표시 (~60% 감소) |
| 코드 라인 | ~297줄 | ~180줄 (중복 제거) |
| 사용자 경험 | 스크롤 많음 | 탭으로 빠른 탐색 |
