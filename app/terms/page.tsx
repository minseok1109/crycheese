import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 크라이치즈버거",
  description: "크라이치즈버거 케이터링 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 lg:px-[120px]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-3xl font-bold text-[#0D0D0D] mb-8">이용약관</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-[#333333]">
          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제1조 (목적)
            </h2>
            <p className="text-[15px] leading-relaxed">
              이 약관은 크라이치즈버거(이하 &quot;회사&quot;)가 제공하는 케이터링
              서비스의 이용조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항,
              기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제2조 (정의)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                &quot;서비스&quot;란 회사가 제공하는 케이터링 서비스 일체를
                말합니다.
              </li>
              <li>
                &quot;이용자&quot;란 이 약관에 따라 회사가 제공하는 서비스를
                이용하는 고객을 말합니다.
              </li>
              <li>
                &quot;주문&quot;이란 이용자가 서비스 이용을 위해 회사에 케이터링
                서비스를 신청하는 행위를 말합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제3조 (약관의 효력 및 변경)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력이
                발생합니다.
              </li>
              <li>
                회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을
                변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력이
                발생합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제4조 (서비스의 제공)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>회사는 다음과 같은 서비스를 제공합니다.</li>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>기업 케이터링 서비스</li>
                <li>단체 주문 서비스</li>
                <li>행사 음식 배달 서비스</li>
              </ul>
              <li>
                서비스의 내용, 가격 등은 회사의 정책에 따라 변경될 수 있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제5조 (주문 및 결제)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                이용자는 웹사이트 또는 유선 상담을 통해 서비스를 주문할 수
                있습니다.
              </li>
              <li>주문 확정 후 결제는 계좌이체 또는 카드결제로 가능합니다.</li>
              <li>
                주문 취소 및 변경은 배송 예정일 3일 전까지 가능하며, 이후에는
                취소 수수료가 발생할 수 있습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제6조 (배송)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                배송은 이용자가 지정한 일시와 장소에 이루어지며, 배송 가능
                지역은 회사 정책에 따릅니다.
              </li>
              <li>
                배송 지연이 예상되는 경우 회사는 이용자에게 사전에 안내합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제7조 (회사의 의무)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를
                하지 않습니다.
              </li>
              <li>
                회사는 이용자의 개인정보를 보호하기 위해 노력하며,
                개인정보처리방침에 따라 이용자의 정보를 관리합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제8조 (이용자의 의무)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                이용자는 주문 시 정확한 정보를 제공해야 하며, 허위 정보 제공으로
                인한 불이익은 이용자가 부담합니다.
              </li>
              <li>
                이용자는 서비스 이용 시 관련 법령 및 이 약관의 규정을 준수해야
                합니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제9조 (면책조항)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등
                불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이
                면제됩니다.
              </li>
              <li>
                회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임지지
                않습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제10조 (서비스 이용 제한)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              회사는 다음 각 호에 해당하는 경우 서비스 이용을 제한할 수 있습니다.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>허위 정보를 제공하여 주문한 경우</li>
              <li>타인의 명의를 도용하여 주문한 경우</li>
              <li>서비스 운영을 방해하는 행위를 한 경우</li>
              <li>기타 관련 법령 또는 약관을 위반한 경우</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제11조 (환불 및 취소 정책)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              주문 취소 및 환불은 다음 기준에 따라 처리됩니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
              <li>배송 예정일 7일 전 취소: 전액 환불</li>
              <li>배송 예정일 3~6일 전 취소: 결제금액의 50% 환불</li>
              <li>배송 예정일 2일 전~당일 취소: 환불 불가</li>
              <li>
                회사 귀책 사유로 인한 취소: 전액 환불 및 손해배상 (입증된 손해에
                한함)
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed mt-3">
              환불은 취소 요청일로부터 영업일 기준 7일 이내에 처리됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제12조 (손해배상)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                회사는 회사의 고의 또는 중대한 과실로 인하여 이용자에게 손해를
                끼친 경우 그 손해를 배상할 책임이 있습니다.
              </li>
              <li>
                이용자가 이 약관을 위반하여 회사에 손해를 끼친 경우, 이용자는
                그 손해를 배상할 책임이 있습니다.
              </li>
              <li>
                손해배상의 범위는 통상적으로 예견 가능한 직접 손해에 한정됩니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제13조 (지적재산권)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
              <li>
                서비스에 포함된 모든 콘텐츠(텍스트, 이미지, 로고, 디자인 등)에
                대한 저작권 및 지적재산권은 회사에 귀속됩니다.
              </li>
              <li>
                이용자는 회사의 사전 서면 동의 없이 서비스 내 콘텐츠를 복제,
                배포, 전송, 수정, 대여, 2차적 저작물 작성 등의 방법으로 이용할
                수 없습니다.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제14조 (분쟁해결)
            </h2>
            <p className="text-[15px] leading-relaxed">
              이 약관에서 정하지 않은 사항 및 약관의 해석에 관하여는 관련 법령
              또는 상관례에 따릅니다. 서비스 이용으로 발생한 분쟁에 대해 소송이
              제기될 경우, 회사의 본사 소재지를 관할하는 법원을 전속
              관할법원으로 합니다.
            </p>
          </section>

          <section className="pt-8 border-t border-[#EEEEEE]">
            <p className="text-sm text-[#999999]">
              본 약관은 2026년 2월 6일부터 시행됩니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
