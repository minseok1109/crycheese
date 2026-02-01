# PROJECT KNOWLEDGE BASE

**Generated:** 2026-01-26
**Commit:** 97e8487
**Branch:** main

## OVERVIEW

크라이치즈버거 기업 케이터링 랜딩페이지. Next.js 16 + Tailwind CSS 4 + GSAP 애니메이션.

## STRUCTURE

```
crycheese/
├── app/
│   ├── components/      # 11개 섹션 컴포넌트 (평면 구조)
│   ├── api/inquiry/     # Google Sheets + Slack 연동
│   ├── event/           # 기업 행사 페이지 (인라인 JSX)
│   ├── inquiry/complete/
│   └── page.tsx         # 메인 - 컴포넌트 조합
├── lib/
│   ├── gsap/register.ts # GSAP 플러그인 중앙 등록
│   ├── schemas/         # Zod 검증 스키마
│   ├── services/        # Google Sheets API
│   └── utils/scroll.ts  # 스크롤 유틸리티
├── docs/plans/          # 디자인 문서 (참고용)
└── public/crycheese/    # 메뉴 이미지 (한글 폴더명)
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| 새 섹션 추가 | `app/components/` | Hero.tsx 또는 FeatureSection.tsx 템플릿 |
| 폼 검증 | `lib/schemas/inquiry.ts` | Zod 스키마 |
| API 연동 | `app/api/inquiry/route.ts` | Google Sheets + Slack |
| 애니메이션 | `lib/gsap/register.ts` | ScrollTrigger, ScrollToPlugin 등록됨 |
| 커스텀 스타일 | `app/globals.css` | @theme inline + @layer utilities |
| 색상 변수 | `app/globals.css :root` | --primary: #F8B81C |

## CONVENTIONS

### GSAP 애니메이션 패턴

```tsx
"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";  // 중앙 모듈에서 import

useGSAP(() => {
  gsap.from(".element", {
    scrollTrigger: { trigger: "#section", start: "top 80%" },
    y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
  });
}, []);  // 빈 의존성 배열 필수
```

### Tailwind CSS 4 (CSS-first)

- `@theme inline` 디렉티브로 커스텀 색상 정의
- 커스텀 유틸리티: `.shadow-soft`, `.shadow-primary-lg`, `.bg-primary-gradient`
- 반응형: 모바일 우선 (`px-6 lg:px-[120px]`)
- 폰트: Pretendard (한글 최적화, `word-break: keep-all`)

### 스크롤 이동

```tsx
import { scrollToElement } from "@/lib/utils/scroll";

<Link href="#inquiry" onClick={(e) => scrollToElement(e, "#inquiry")}>
```

## ANTI-PATTERNS

| 금지 | 이유 |
|------|------|
| GSAP 플러그인 중복 등록 | `providers.tsx`에서 한 번만 등록됨 |
| FAQ에 ScrollTrigger 아이템 애니메이션 | 타이밍 이슈로 제거됨 (불안정) |
| `.env` 커밋 | Google 자격증명 포함 |
| 상태 변경 직후 DOM 애니메이션 | `setTimeout(() => gsap..., 0)` 필요 |

## UNIQUE STYLES

### 색상 체계

```css
--primary: #F8B81C        /* 브랜드 옐로우 */
--primary-dark: #E5A517
--secondary: #2C2C2C      /* 다크 그레이 */
--muted: #FAF8F4          /* 따뜻한 배경 */
--muted-alt: #F5F5F5      /* 차가운 배경 */
```

### 섹션 배경 패턴

- 흰색: `bg-white py-[100px] px-6 lg:px-[120px]`
- 따뜻한: `bg-[#FAF8F4] py-20 px-6 lg:px-20`
- 그래디언트: `bg-primary-gradient rounded-[20px]`

### 카드 스타일

- 기본: `bg-white rounded-[20px] p-9 shadow-soft`
- 강조: `border-2 border-primary shadow-[0_8px_30px_0_rgba(248,184,28,0.09)]`

## COMMANDS

```bash
bun dev      # 개발 서버 (localhost:3000)
bun build    # 프로덕션 빌드
bun lint     # ESLint 실행
```

## NOTES

- **Agentation**: 개발 환경에서만 활성화 (`providers.tsx`)
- **React Query**: 전역 QueryClient (`providers.tsx`)
- **event/page.tsx**: 인라인 JSX (265줄) - 컴포넌트 분리 권장
- **ClientsSection**: 클라이언트 로고 이미지 미완성 (placeholder)
- **Slack 알림 실패**: 조용히 로깅만 (의도적 설계)
