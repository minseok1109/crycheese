import CaseStudySection from "./components/CaseStudySection";
import EventGallery from "./components/EventGallery";
import EventSupportSection from "./components/EventSupportSection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InquiryForm from "./components/InquiryForm";
import LogoMarquee from "./components/LogoMarquee";
import MenuPreview from "./components/MenuPreview";
import OrderProcessSection from "./components/OrderProcessSection";

export default function Home(): React.ReactElement {
	return (
		<div className="bg-white min-h-screen">
			<Header />
			<main>
				<Hero />
				<LogoMarquee />
				<FeatureSection />
				<EventSupportSection />
				<MenuPreview />
				<CaseStudySection />
				<EventGallery />
				<OrderProcessSection />
				<InquiryForm />
				<FAQSection />
			</main>
			<Footer />
		</div>
	);
}
