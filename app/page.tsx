import EventGallery from "./components/EventGallery";
import EventSupportSection from "./components/EventSupportSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InquiryForm from "./components/InquiryForm";
import LogoMarquee from "./components/LogoMarquee";
import OrderProcessSection from "./components/OrderProcessSection";
import WhyCrySection from "./components/WhyCrySection";

export default function Home(): React.ReactElement {
	return (
		<div className="bg-white min-h-screen">
			<Header />
			<main>
				<Hero />
				<LogoMarquee />
				<WhyCrySection />
				{/* <FeatureSection /> */}
				<EventSupportSection />
				{/* <MenuPreview /> */}
				{/* <CaseStudySection /> */}
				<EventGallery />
				<OrderProcessSection />
				<InquiryForm />
				<FAQSection />
			</main>
			<Footer />
		</div>
	);
}
