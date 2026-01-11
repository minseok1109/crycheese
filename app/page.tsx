import CaseStudySection from "./components/CaseStudySection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InquiryForm from "./components/InquiryForm";
import MenuPreview from "./components/MenuPreview";

export default function Home() {
	return (
		<div className="bg-white dark:bg-black min-h-screen">
			<Header />
			<main>
				<Hero />
				<FeatureSection />
				<MenuPreview />
				<CaseStudySection />
				<InquiryForm />
			</main>
			<Footer />
		</div>
	);
}
