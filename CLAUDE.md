# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

크라이치즈버거 기업 케이터링 서비스 랜딩 페이지. Next.js 16 App Router 기반 프로젝트.

## 개발 명령어

```bash
bun dev      # 개발 서버 실행 (http://localhost:3000)
bun build    # 프로덕션 빌드
bun lint     # ESLint 실행
bun start    # 프로덕션 서버 실행
```

## 기술 스택

- **프레임워크**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **스타일링**: Tailwind CSS 4 (CSS-first 설정, `@import "tailwindcss"` 방식)
- **애니메이션**: GSAP + @gsap/react (ScrollTrigger 포함)
- **패키지 매니저**: Bun

## 아키텍처

### 라우팅 구조
- `app/page.tsx` - 메인 랜딩 페이지 (케이터링 서비스 소개)
- `app/event/page.tsx` - 기업 행사 케이터링 전용 페이지

### 컴포넌트 구성
메인 페이지는 다음 섹션 컴포넌트들로 구성:
- `Header` - 네비게이션
- `Hero` - 히어로 섹션 (GSAP 애니메이션 적용)
- `FeatureSection` - 특징 소개 (ScrollTrigger 애니메이션)
- `MenuPreview` - 메뉴 미리보기
- `CaseStudySection` - 사례 연구
- `InquiryForm` - 문의 폼
- `Footer` - 푸터

### 스타일링 컨벤션
- Tailwind CSS 4의 `@theme inline` 디렉티브로 커스텀 색상 정의
- 주요 색상: `--color-primary: #F8B81C` (브랜드 옐로우)
- 다크모드 지원 (`dark:` 프리픽스 사용)
- 반응형: 모바일 우선, `sm:`, `md:`, `lg:` 브레이크포인트

### GSAP 애니메이션 패턴
```tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger 사용 시 등록 필요
gsap.registerPlugin(ScrollTrigger);
```

## Path Alias

`@/*` → 프로젝트 루트 (tsconfig.json에 설정됨)
