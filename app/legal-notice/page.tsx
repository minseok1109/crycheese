import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "법적고지 | 크라이치즈버거",
  description: "크라이치즈버거 법적고지",
};

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 lg:px-[120px]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-3xl font-bold text-[#0D0D0D] mb-8">법적고지</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-[#333333]">
          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              저작권 안내
            </h2>
            <p className="text-[15px] leading-relaxed">
              이 웹사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 그래픽, 로고,
              아이콘 등)는 크라이치즈버거의 자산이며, 저작권법에 의해
              보호됩니다. 회사의 사전 서면 동의 없이 이 웹사이트의 콘텐츠를
              복제, 수정, 배포, 전시, 전송하거나 상업적 목적으로 사용하는 것은
              금지됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              면책 조항
            </h2>
            <p className="text-[15px] leading-relaxed">
              회사는 이 웹사이트에 게시된 정보의 정확성과 완전성을 위해
              노력하지만, 그 정확성이나 완전성을 보장하지 않습니다. 웹사이트의
              정보는 예고 없이 변경될 수 있으며, 회사는 이로 인해 발생하는 어떠한
              손해에 대해서도 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              외부 링크
            </h2>
            <p className="text-[15px] leading-relaxed">
              이 웹사이트에는 외부 웹사이트로의 링크가 포함될 수 있습니다. 이러한
              링크는 이용자의 편의를 위해 제공되며, 회사는 해당 외부
              웹사이트의 콘텐츠, 개인정보 보호 정책 또는 관행에 대해 책임을 지지
              않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              준거법 및 관할
            </h2>
            <p className="text-[15px] leading-relaxed">
              이 웹사이트의 이용 및 본 법적고지의 해석에 관하여는 대한민국 법률이
              적용됩니다. 웹사이트 이용과 관련하여 발생하는 모든 분쟁에 대해서는
              회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              상표권
            </h2>
            <p className="text-[15px] leading-relaxed">
              &quot;크라이치즈버거&quot; 및 관련 로고는 회사의 등록 상표입니다.
              회사의 사전 서면 동의 없이 이러한 상표를 사용하는 것은 금지됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              서비스 중단
            </h2>
            <p className="text-[15px] leading-relaxed">
              회사는 시스템 점검, 업데이트, 또는 기타 사유로 인해 사전 통지 없이
              웹사이트 서비스를 일시적으로 중단할 수 있습니다. 회사는 이러한
              서비스 중단으로 인해 발생하는 손해에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              문의처
            </h2>
            <p className="text-[15px] leading-relaxed">
              본 법적고지에 관한 문의사항이 있으시면 아래 연락처로 문의해
              주시기 바랍니다.
            </p>
            <div className="mt-3 p-4 bg-[#F5F5F5] rounded-lg text-[15px]">
              <p>
                <strong>크라이치즈버거</strong>
              </p>
              <p>이메일: hmjin@crycheeseburger.com</p>
              <p>전화: 010-5643-1700</p>
            </div>
          </section>

          <section className="pt-8 border-t border-[#EEEEEE]">
            <p className="text-sm text-[#999999]">
              본 법적고지는 2026년 2월 6일부터 시행됩니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
