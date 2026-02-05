"use client";

import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { gsap } from "@/lib/gsap/register";
import { type InquiryFormData, inquirySchema } from "@/lib/schemas/inquiry";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const INPUT_STYLES =
  "block w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 h-12 text-[#0D0D0D] placeholder:text-[#AAAAAA] text-[15px] focus:ring-2 focus:ring-primary focus:border-primary transition-all";

const LABEL_STYLES =
  "block text-sm font-semibold text-[#333333] mb-2";

const ERROR_STYLES =
  "mt-2 text-sm text-red-500 font-medium";

async function submitInquiry(data: InquiryFormData): Promise<unknown> {
  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("문의 접수 실패");
  return res.json();
}

interface SectionHeaderProps {
  number: string;
  title: string;
}

function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span className="text-base font-bold text-white">{number}</span>
      </div>
      <h3 className="text-[22px] font-bold text-[#0D0D0D]">{title}</h3>
    </div>
  );
}

export default function InquiryForm(): React.ReactElement {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: submitInquiry,
    onSuccess: () => router.push("/inquiry/complete"),
    onError: () =>
      alert("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    mode: "onChange",
    defaultValues: {
      paymentMethod: "계좌이체",
    },
  });

  const referralSource = watch("referralSource");
  const paymentMethod = watch("paymentMethod");

  useGSAP(() => {
    gsap.from(".inquiry-header", {
      scrollTrigger: {
        trigger: "#inquiry",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".inquiry-form", {
      scrollTrigger: {
        trigger: "#inquiry",
        start: "top 70%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="inquiry"
      className="bg-white py-[100px] px-6 lg:px-[120px]"
    >
      <div className="flex flex-col items-center gap-[60px]">
        {/* Header */}
        <div className="inquiry-header flex flex-col items-center gap-4 text-center">
          <h2 className="text-[42px] font-bold text-[#0D0D0D]">
            주문서 양식
          </h2>
          <p className="text-lg font-normal text-[#666666]">
            아래 양식을 작성해 주시면 담당자가 빠르게 연락드립니다
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
          className="inquiry-form w-full max-w-[800px] bg-[#FAFAFA] rounded-3xl p-8 lg:p-12 lg:px-14 flex flex-col gap-12"
        >
          {/* Section 1: 주문자 정보 */}
          <div className="flex flex-col gap-6">
            <SectionHeader number="1" title="주문자 정보" />
            <div className="flex flex-col gap-4">
              {/* Row 1: 이름 & 연락처 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={LABEL_STYLES}>
                    이름 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={INPUT_STYLES}
                    placeholder="홍길동"
                  />
                  {errors.name && (
                    <p className={ERROR_STYLES}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact" className={LABEL_STYLES}>
                    연락처 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    {...register("contact")}
                    className={INPUT_STYLES}
                    placeholder="010-0000-0000"
                  />
                  {errors.contact && (
                    <p className={ERROR_STYLES}>{errors.contact.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: 이메일 */}
              <div>
                <label htmlFor="email" className={LABEL_STYLES}>
                  이메일 <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={INPUT_STYLES}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className={ERROR_STYLES}>{errors.email.message}</p>
                )}
              </div>

              {/* Row 3: 유입 경로 */}
              <div>
                <label className={LABEL_STYLES}>
                  유입 경로 <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "포털검색",
                    "재주문",
                    "지인추천",
                    "블로그/카페",
                    "매장방문",
                  ].map((source) => (
                    <label
                      key={source}
                      className={`flex items-center gap-2 rounded-lg px-3.5 py-2 border cursor-pointer transition-all ${referralSource === source
                        ? "bg-[#FFF8E6] border-primary border-2"
                        : "bg-white border-[#E0E0E0]"
                        }`}
                    >
                      <input
                        type="radio"
                        value={source}
                        {...register("referralSource")}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium text-[#333333]">
                        {source}
                      </span>
                    </label>
                  ))}
                </div>
                {referralSource === "지인추천" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="추천인 성함"
                      {...register("referrerName")}
                      className={INPUT_STYLES}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: 조직 정보 */}
          <div className="flex flex-col gap-6">
            <SectionHeader number="2" title="조직 정보" />
            <div className="flex flex-col gap-4">
              {/* Row 1: 단체 정보 & 단체명 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className={LABEL_STYLES}>
                    단체 정보 <span className="text-primary">*</span>
                  </label>
                  <select
                    id="eventType"
                    {...register("eventType")}
                    className={INPUT_STYLES}
                  >
                    <option value="">선택해주세요</option>
                    <option value="기업">기업</option>
                    <option value="학교">학교</option>
                    <option value="단체">단체/기관</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="companyName" className={LABEL_STYLES}>
                    단체명 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    {...register("companyName")}
                    className={INPUT_STYLES}
                    placeholder="(주)크라이치즈버거"
                  />
                  {errors.companyName && (
                    <p className={ERROR_STYLES}>{errors.companyName.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: 행사 유형 */}
              <div>
                <label htmlFor="eventTypeDetail" className={LABEL_STYLES}>
                  행사 유형 <span className="text-primary">*</span>
                </label>
                <select
                  id="eventTypeDetail"
                  {...register("eventTypeDetail")}
                  className={INPUT_STYLES}
                >
                  <option value="">워크샵/세미나/행사/기타</option>
                  <option value="워크샵">워크샵</option>
                  <option value="세미나">세미나</option>
                  <option value="행사">행사</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              {/* Row 3: 문의글 */}
              <div>
                <label htmlFor="message" className={LABEL_STYLES}>
                  문의글
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={`${INPUT_STYLES} h-auto min-h-[120px] resize-none`}
                  placeholder="추가 문의사항이나 요청사항을 자유롭게 작성해주세요"
                />
                {errors.message && (
                  <p className={ERROR_STYLES}>{errors.message.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 3: 주문 정보 */}
          <div className="flex flex-col gap-6">
            <SectionHeader number="3" title="주문 정보" />
            <div className="flex flex-col gap-4">
              {/* Row 1: 배송 날짜 & 시간 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="deliveryDate" className={LABEL_STYLES}>
                    배송 희망 날짜 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    {...register("deliveryDate")}
                    className={INPUT_STYLES}
                  />
                  {errors.deliveryDate && (
                    <p className={ERROR_STYLES}>{errors.deliveryDate.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="deliveryTime" className={LABEL_STYLES}>
                    배송 희망 시간 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="time"
                    id="deliveryTime"
                    {...register("deliveryTime")}
                    className={INPUT_STYLES}
                  />
                  {errors.deliveryTime && (
                    <p className={ERROR_STYLES}>{errors.deliveryTime.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: 인원 수 & 1인당 예산 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="headcount" className={LABEL_STYLES}>
                    인원 수 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    id="headcount"
                    {...register("headcount", { valueAsNumber: true })}
                    className={INPUT_STYLES}
                    placeholder="50"
                    min="1"
                  />
                  {errors.headcount && (
                    <p className={ERROR_STYLES}>{errors.headcount.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="budgetPerPerson" className={LABEL_STYLES}>
                    1인당 예산 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    id="budgetPerPerson"
                    {...register("budgetPerPerson", { valueAsNumber: true })}
                    className={INPUT_STYLES}
                    placeholder="15000"
                    min="1"
                  />
                  {errors.budgetPerPerson && (
                    <p className={ERROR_STYLES}>{errors.budgetPerPerson.message}</p>
                  )}
                </div>
              </div>

              {/* Row 3: 배송 주소 */}
              <div>
                <label htmlFor="deliveryAddress" className={LABEL_STYLES}>
                  배송 상세 주소 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  {...register("deliveryAddress")}
                  className={INPUT_STYLES}
                  placeholder="상세 주소를 입력해주세요"
                />
                {errors.deliveryAddress && (
                  <p className={ERROR_STYLES}>{errors.deliveryAddress.message}</p>
                )}
              </div>

              {/* Row 3: 결제 방법 */}
              <div>
                <label className={LABEL_STYLES}>
                  결제 희망 방법 <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {["계좌이체", "카드결제"].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center justify-center gap-3 rounded-lg px-6 py-3.5 border cursor-pointer transition-all ${paymentMethod === method
                        ? "bg-[#FFF8E6] border-primary border-2"
                        : "bg-white border-[#E0E0E0]"
                        }`}
                    >
                      <input
                        type="radio"
                        value={method}
                        {...register("paymentMethod")}
                        className="sr-only"
                      />
                      <span className={`text-sm font-semibold ${paymentMethod === method
                        ? "text-primary"
                        : "text-[#333333]"
                        }`}>
                        {method}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.paymentMethod && (
                  <p className={ERROR_STYLES}>{errors.paymentMethod.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Privacy Consent */}
          <div className="flex flex-col gap-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("privacyConsent")}
                className="mt-0.5 w-5 h-5 rounded border-[#E0E0E0] text-primary focus:ring-primary cursor-pointer"
              />
              <span className="text-sm text-[#333333]">
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-[#D99F17] transition-colors"
                >
                  개인정보 처리방침
                </a>
                에 동의합니다.{" "}
                <span className="text-primary">(필수)</span>{" "}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-[#666666] underline hover:text-[#333333] transition-colors"
                    >
                      [내용보기]
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>개인정보 수집 및 이용 동의</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm text-[#333333]">
                      <div>
                        <h4 className="font-semibold text-[#0D0D0D] mb-2">
                          1. 수집 항목
                        </h4>
                        <p className="text-[#666666]">
                          이름, 연락처, 이메일, 유입경로, 단체명, 행사유형,
                          배송일, 배송시간, 인원수, 예산, 배송주소, 결제방법
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0D0D0D] mb-2">
                          2. 수집 및 이용 목적
                        </h4>
                        <p className="text-[#666666]">
                          단체 주문 상담, 배송, 결제 안내
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0D0D0D] mb-2">
                          3. 보유 및 이용 기간
                        </h4>
                        <p className="text-[#666666]">
                          주문 완료 후 3년 (관계 법령에 따른 보존 기간)
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[#EEEEEE]">
                        <p className="text-[#999999] text-xs">
                          귀하는 위 개인정보 수집·이용에 대한 동의를 거부할
                          권리가 있습니다. 다만, 동의를 거부할 경우 주문 상담
                          서비스 이용이 제한됩니다.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </span>
            </label>
            {errors.privacyConsent && (
              <p className={ERROR_STYLES}>{errors.privacyConsent.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={mutation.isPending || !isValid}
            className="w-full h-14 cursor-auto rounded-xl bg-primary-gradient text-lg font-bold text-white shadow-[0_4px_16px_0_rgba(248,184,28,0.25)] hover:shadow-[0_6px_20px_0_rgba(248,184,28,0.35)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
          >
            <span>{mutation.isPending ? "처리 중..." : "문의하기"}</span>
          </button>
        </form>

        {/* Note */}
        <p className="text-sm font-normal text-[#999999]">
          * 필수 입력 항목입니다. 제출 후 담당자가 확인 후 연락드립니다.
        </p>
      </div>
    </section>
  );
}
