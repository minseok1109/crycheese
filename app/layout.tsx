import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "크라이치즈버거 Catering",
	description: "크라이치즈버거 기업 케이터링 서비스 - 성공적인 행사를 위한 완벽한 선택",
	openGraph: {
		title: "크라이치즈버거 Catering",
		description:
			"크라이치즈버거 기업 케이터링 서비스 - 성공적인 행사를 위한 완벽한 선택",
		images: [
			{
				url: "/logo_character_with_text.png",
				width: 1000,
				height: 1000,
			},
		],
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="antialiased font-sans">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
