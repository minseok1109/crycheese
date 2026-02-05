import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 크라이치즈버거",
  description: "크라이치즈버거 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 lg:px-[120px]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-3xl font-bold text-[#0D0D0D] mb-8">
          개인정보처리방침
        </h1>

        <div className="prose prose-gray max-w-none space-y-8 text-[#333333]">
          <p className="text-[15px] leading-relaxed">
            크라이치즈버거(이하 &quot;회사&quot;)는 개인정보보호법 등 관련 법령에
            따라 이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고
            원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을
            수립·공개합니다.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제1조 (개인정보의 수집 항목 및 수집 방법)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
              <li>
                필수항목: 이름, 연락처, 이메일, 단체명, 배송 희망 날짜 및 시간,
                인원 수, 1인당 예산, 배송 주소, 결제 방법, 유입 경로
              </li>
              <li>
                선택항목: 단체 정보(유형), 행사 유형, 추천인 성함, 문의 내용
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제2조 (개인정보의 수집 및 이용 목적)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
              <li>케이터링 서비스 상담 및 주문 처리</li>
              <li>배송 서비스 제공</li>
              <li>결제 및 정산</li>
              <li>고객 문의 응대</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제3조 (개인정보의 보유 및 이용 기간)
            </h2>
            <p className="text-[15px] leading-relaxed">
              회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체
              없이 파기합니다. 단, 관련 법령에 따라 보존할 필요가 있는 경우 해당
              기간 동안 보관합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed mt-3">
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <p className="text-[15px] leading-relaxed">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 이용자의 동의가 있거나 법령의 규정에 의한 경우는 예외로
              합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제5조 (개인정보의 파기 절차 및 방법)
            </h2>
            <p className="text-[15px] leading-relaxed">
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
              불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용하여 삭제하고, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나
              소각하여 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제6조 (이용자 및 법정대리인의 권리와 행사 방법)
            </h2>
            <p className="text-[15px] leading-relaxed">
              이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리정지 요구
              등의 권리를 행사할 수 있습니다. 권리 행사는 회사에 대해 서면,
              전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이
              조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제7조 (개인정보 보호책임자)
            </h2>
            <p className="text-[15px] leading-relaxed">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
              처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이
              개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="mt-3 p-4 bg-[#F5F5F5] rounded-lg text-[15px]">
              <p>
                <strong>개인정보 보호책임자</strong>
              </p>
              <p>이메일: hmjin@crycheeseburger.com</p>
              <p>전화: 010-5643-1700</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제8조 (개인정보의 안전성 확보 조치)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
              있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
              <li>개인정보 취급 직원의 최소화 및 교육</li>
              <li>내부관리계획의 수립 및 시행</li>
              <li>개인정보에 대한 접근 제한</li>
              <li>개인정보의 암호화</li>
              <li>보안프로그램 설치 및 갱신</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제9조 (쿠키의 운영 및 거부)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를
              저장하고 수시로 불러오는 &apos;쿠키(cookie)&apos;를 사용합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
              <li>
                쿠키의 사용 목적: 이용자의 방문 및 이용 형태 파악을 통한 최적화된
                서비스 제공
              </li>
              <li>
                쿠키의 설치·운영 및 거부: 웹브라우저 상단의 도구 &gt; 인터넷 옵션
                &gt; 개인정보 메뉴에서 쿠키 저장을 거부할 수 있습니다.
              </li>
              <li>
                쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
                있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제10조 (개인정보 자동 수집 장치)
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              회사는 이용자의 서비스 이용 기록을 자동으로 수집하는 장치를 운영할
              수 있으며, 수집되는 정보는 다음과 같습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
              <li>접속 IP 주소, 접속 시간, 서비스 이용 기록</li>
              <li>기기 정보 (OS, 브라우저 유형)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
              제11조 (개인정보처리방침 변경)
            </h2>
            <p className="text-[15px] leading-relaxed">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <section className="pt-8 border-t border-[#EEEEEE]">
            <p className="text-sm text-[#999999]">
              본 방침은 2026년 2월 6일부터 시행됩니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
