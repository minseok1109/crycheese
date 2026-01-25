import CaseStudySection from "./components/CaseStudySection";
import EventSupportSection from "./components/EventSupportSection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InquiryForm from "./components/InquiryForm";
import MenuPreview from "./components/MenuPreview";
import OrderProcessSection from "./components/OrderProcessSection";

export default function Home(): React.ReactElement {
	return (
		<div className="bg-white min-h-screen">
			<Header />
			<main>
				<Hero />
				<FeatureSection />
				<EventSupportSection />
				<MenuPreview />
				<CaseStudySection />
				<OrderProcessSection />
				<InquiryForm />
				<FAQSection />
			</main>
			<Footer />
		</div>
	);
}
