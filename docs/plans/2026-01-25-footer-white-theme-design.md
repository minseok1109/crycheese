# Footer White Theme 디자인

## 개요

Footer 컴포넌트를 현재 다크 테마에서 화이트 테마로 변경하고, 다운로드 버튼 기능을 유지하는 디자인.

## 현재 상태

- **파일**: `app/components/Footer.tsx`
- **배경**: 다크 (`#1A1A1A`)
- **CTA 카드**: 진한 회색 (`#2D2D2D`)
- **다운로드 버튼**: 테두리 스타일 + 흰색 텍스트
- **텍스트**: 밝은 색상 계열

## 디자인 결정

### 1. 전체 구조 (변경 없음)

```
┌─────────────────────────────────────────────────┐
│  Footer                                         │
│  ┌───────────────────────────────────────────┐  │
│  │  CTA Card                                 │  │
│  │  "케이터링 서비스가 더 궁금하신가요?"       │  │
│  │                    [📄 소개서 다운로드]    │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ──────────────── 구분선 ────────────────       │
│                                                 │
│  크라이치즈버거                                  │
│  고객센터: 000-0000-0000                        │
│  이메일: contact@crycheese.com                  │
│  운영시간: 평일 09:00 - 18:00                   │
│                                                 │
│  ──────────────── 구분선 ────────────────       │
│                                                 │
│  © 2026 크라이치즈버거. All rights reserved.    │
└─────────────────────────────────────────────────┘
```

### 2. 색상 변경 매핑

| 요소 | 현재 (다크) | 변경 후 (화이트) |
|------|------------|-----------------|
| Footer 배경 | `#1A1A1A` | `#F5F5F5` |
| CTA 카드 배경 | `#2D2D2D` | `#FFFFFF` |
| CTA 카드 테두리 | 없음 | `border border-[#EEEEEE]` |
| CTA 제목 텍스트 | `text-white` | `text-[#0D0D0D]` |
| 다운로드 버튼 배경 | 투명 + 테두리 | `bg-primary` |
| 다운로드 버튼 텍스트 | `text-white` | `text-white` (유지) |
| 다운로드 버튼 테두리 | `border-[#666666]` | 없음 |
| 구분선 | `#2D2D2D` | `#EEEEEE` |
| 회사명 | `text-white` | `text-[#0D0D0D]` |
| 라벨 (고객센터 등) | `#999999` | `#999999` (유지) |
| 정보값 (번호 등) | `#E5E5E5` | `#333333` |
| Copyright | `#666666` | `#999999` |

### 3. 다운로드 버튼 스타일

**변경 전:**
```tsx
<a
  href="/crycheese-catering.pdf"
  download
  className="flex items-center gap-2 rounded-lg border border-[#666666] px-7 py-3.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
>
```

**변경 후:**
```tsx
<a
  href="/crycheese-catering.pdf"
  download
  className="flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
>
```

### 4. PDF 파일

- **경로**: `/crycheese-catering.pdf` (public 폴더 기준)
- **실제 위치**: `public/crycheese-catering.pdf`
- **상태**: 파일 추후 제공 예정

## 구현 체크리스트

- [ ] Footer 배경색 변경 (`#1A1A1A` → `#F5F5F5`)
- [ ] CTA 카드 배경 및 테두리 변경
- [ ] CTA 제목 텍스트 색상 변경
- [ ] 다운로드 버튼 Primary 스타일로 변경
- [ ] 구분선 색상 변경 (`#2D2D2D` → `#EEEEEE`)
- [ ] 회사 정보 텍스트 색상 변경
- [ ] Copyright 텍스트 색상 변경
- [ ] PDF 파일 추가 (추후)

## 참고

- 페이지 내 다른 white theme 섹션 참고: `FAQSection.tsx`, `InquiryForm.tsx`
- Primary 색상: `#F8B81C`
