# Footer White Theme Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Footer 컴포넌트를 다크 테마에서 화이트 테마로 변경하여 전체 페이지 디자인과 일관성 유지

**Architecture:** 단일 파일(Footer.tsx) 내 Tailwind CSS 클래스만 수정. 구조 변경 없이 색상값만 매핑 테이블에 따라 교체.

**Tech Stack:** Next.js, React, Tailwind CSS

---

### Task 1: Footer 배경색 변경

**Files:**
- Modify: `app/components/Footer.tsx:3-6`

**Step 1: 배경색 클래스 변경**

변경 전:
```tsx
<footer
  id="footer"
  className="bg-[#1A1A1A] py-20 px-6 lg:px-[120px]"
>
```

변경 후:
```tsx
<footer
  id="footer"
  className="bg-[#F5F5F5] py-20 px-6 lg:px-[120px]"
>
```

**Step 2: 브라우저에서 확인**

Run: `bun dev`
확인: Footer 배경이 연한 회색(#F5F5F5)으로 변경됨

**Step 3: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "style(Footer): 배경색 화이트 테마로 변경"
```

---

### Task 2: CTA 카드 스타일 변경

**Files:**
- Modify: `app/components/Footer.tsx:9`

**Step 1: CTA 카드 배경 및 테두리 변경**

변경 전:
```tsx
<div className="bg-[#2D2D2D] rounded-2xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
```

변경 후:
```tsx
<div className="bg-white border border-[#EEEEEE] rounded-2xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
```

**Step 2: CTA 제목 텍스트 색상 변경 (라인 10-12)**

변경 전:
```tsx
<h3 className="text-xl font-semibold text-white">
```

변경 후:
```tsx
<h3 className="text-xl font-semibold text-[#0D0D0D]">
```

**Step 3: 브라우저에서 확인**

확인: CTA 카드가 흰색 배경 + 연한 테두리, 제목이 검정색 텍스트

**Step 4: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "style(Footer): CTA 카드 화이트 테마로 변경"
```

---

### Task 3: 다운로드 버튼 Primary 스타일로 변경

**Files:**
- Modify: `app/components/Footer.tsx:13-17`

**Step 1: 버튼 스타일 변경**

변경 전:
```tsx
<a
  href="/crycheese-catering.pdf"
  download
  className="flex items-center gap-2 rounded-lg border border-[#666666] px-7 py-3.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
>
```

변경 후:
```tsx
<a
  href="/crycheese-catering.pdf"
  download
  className="flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
>
```

**Step 2: 브라우저에서 확인**

확인:
- 버튼이 노란색(Primary #F8B81C) 배경
- 흰색 텍스트, 볼드체
- hover 시 약간 어두워짐

**Step 3: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "style(Footer): 다운로드 버튼 Primary 스타일로 변경"
```

---

### Task 4: 구분선 색상 변경

**Files:**
- Modify: `app/components/Footer.tsx:24, 48`

**Step 1: 첫 번째 구분선 변경 (라인 24)**

변경 전:
```tsx
<div className="w-full h-px bg-[#2D2D2D]" />
```

변경 후:
```tsx
<div className="w-full h-px bg-[#EEEEEE]" />
```

**Step 2: 두 번째 구분선 변경 (라인 48)**

동일하게 `bg-[#2D2D2D]` → `bg-[#EEEEEE]`

**Step 3: 브라우저에서 확인**

확인: 구분선이 연한 회색(#EEEEEE)으로 표시됨

**Step 4: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "style(Footer): 구분선 색상 변경"
```

---

### Task 5: 회사 정보 섹션 텍스트 색상 변경

**Files:**
- Modify: `app/components/Footer.tsx:28-44`

**Step 1: 회사명 색상 변경 (라인 28-30)**

변경 전:
```tsx
<h4 className="text-xl font-bold text-white">
```

변경 후:
```tsx
<h4 className="text-xl font-bold text-[#0D0D0D]">
```

**Step 2: 정보값 색상 변경 (라인 34, 38, 42)**

3곳 모두 변경:

변경 전:
```tsx
<span className="text-sm font-normal text-[#E5E5E5]">
```

변경 후:
```tsx
<span className="text-sm font-normal text-[#333333]">
```

**Step 3: 브라우저에서 확인**

확인:
- "크라이치즈버거" 회사명이 검정색
- 라벨(고객센터, 이메일, 운영시간)은 회색 유지 (#999999)
- 정보값(번호, 이메일주소, 시간)이 진한 회색(#333333)

**Step 4: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "style(Footer): 회사 정보 텍스트 색상 변경"
```

---

### Task 6: Copyright 텍스트 색상 변경

**Files:**
- Modify: `app/components/Footer.tsx:51-53`

**Step 1: Copyright 색상 변경**

변경 전:
```tsx
<p className="text-[13px] font-normal text-[#666666]">
```

변경 후:
```tsx
<p className="text-[13px] font-normal text-[#999999]">
```

**Step 2: 브라우저에서 확인**

확인: Copyright 텍스트가 중간 회색(#999999)으로 표시됨

**Step 3: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "style(Footer): Copyright 텍스트 색상 변경"
```

---

### Task 7: 최종 확인 및 정리

**Step 1: 전체 페이지 스크롤하며 확인**

Run: `bun dev`
확인 항목:
- [ ] Footer 배경: 연한 회색 (#F5F5F5)
- [ ] CTA 카드: 흰색 배경 + 테두리
- [ ] CTA 제목: 검정색 텍스트
- [ ] 다운로드 버튼: 노란색 배경 (Primary)
- [ ] 구분선: 연한 회색 (#EEEEEE)
- [ ] 회사명: 검정색 텍스트
- [ ] 정보값: 진한 회색 텍스트
- [ ] Copyright: 중간 회색 텍스트

**Step 2: 반응형 확인**

- 데스크탑 (lg): CTA 카드 가로 배치
- 모바일: CTA 카드 세로 배치

**Step 3: Lint 확인**

Run: `bun lint`
Expected: 에러 없음

---

## 색상 변경 요약 테이블

| 요소 | 변경 전 | 변경 후 |
|------|---------|---------|
| Footer 배경 | `#1A1A1A` | `#F5F5F5` |
| CTA 카드 배경 | `#2D2D2D` | `#FFFFFF` + border |
| CTA 제목 | `text-white` | `text-[#0D0D0D]` |
| 다운로드 버튼 | border style | `bg-primary` |
| 구분선 | `#2D2D2D` | `#EEEEEE` |
| 회사명 | `text-white` | `text-[#0D0D0D]` |
| 정보값 | `#E5E5E5` | `#333333` |
| Copyright | `#666666` | `#999999` |
