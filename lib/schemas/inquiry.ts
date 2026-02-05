import { z } from "zod";

export const inquirySchema = z.object({
  // 주문자 정보
  name: z.string().min(1, "이름을 입력해주세요"),
  contact: z
    .string()
    .min(1, "연락처를 입력해주세요")
    .regex(/^[\d-]+$/, "올바른 연락처 형식이 아닙니다"),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다"),
  referralSource: z.enum(["포털검색", "재주문", "지인추천", "블로그/카페", "매장방문"]).optional(),
  referrerName: z.string().optional(), // 지인추천 선택 시 입력

  // 조직 정보
  companyName: z.string().min(1, "단체명을 입력해주세요"),
  eventType: z.string().optional(),
  eventTypeDetail: z.string().optional(),

  // 주문 정보
  deliveryDate: z.string().min(1, "배송 희망 날짜를 선택해주세요"),
  deliveryTime: z.string().min(1, "배송 희망 시간을 선택해주세요"),
  headcount: z
    .number({ error: "인원 수를 입력해주세요" })
    .min(1, "인원 수를 입력해주세요"),
  budgetPerPerson: z
    .number({ error: "1인당 예산을 입력해주세요" })
    .min(1, "1인당 예산을 입력해주세요"),
  deliveryAddress: z.string().min(1, "배송 상세 주소를 입력해주세요"),
  paymentMethod: z.enum(["계좌이체", "카드결제"]),

  // 문의 내용
  message: z.string().optional(),

  // 개인정보 수집 동의
  privacyConsent: z.literal(true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
