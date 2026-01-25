"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Agentation } from "agentation";
import { useState } from "react";

// GSAP 플러그인 전역 등록 (한 번만 실행)
import "@/lib/gsap/register";

interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps): React.ReactElement {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{process.env.NODE_ENV === "development" && <Agentation />}
		</QueryClientProvider>
	);
}
