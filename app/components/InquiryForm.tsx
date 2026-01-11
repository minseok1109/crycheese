"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const INPUT_STYLES =
	"block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-zinc-700 dark:text-zinc-50";

const LABEL_STYLES =
	"block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50";

interface FormField {
	id: string;
	name: string;
	label: string;
	type: "text" | "email" | "tel" | "textarea";
	fullWidth?: boolean;
}

const formFields: FormField[] = [
	{ id: "company-name", name: "company-name", label: "회사명", type: "text" },
	{
		id: "contact-person",
		name: "contact-person",
		label: "담당자 성함",
		type: "text",
	},
	{
		id: "email",
		name: "email",
		label: "이메일",
		type: "email",
		fullWidth: true,
	},
	{
		id: "phone-number",
		name: "phone-number",
		label: "연락처",
		type: "tel",
		fullWidth: true,
	},
];

export default function InquiryForm(): React.ReactElement {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(".inquiry-header", {
			scrollTrigger: {
				trigger: "#inquiry",
				start: "top 80%",
			},
			y: 50,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});

		gsap.from(".inquiry-form", {
			scrollTrigger: {
				trigger: "#inquiry",
				start: "top 70%",
			},
			y: 50,
			opacity: 0,
			duration: 1,
			delay: 0.2,
			ease: "power3.out",
		});
	}, []);

	return (
		<section
			id="inquiry"
			className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-zinc-900"
		>
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F8B81C] to-[#ff80b5] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl text-center inquiry-header">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
					단체 주문 문의하기
				</h2>
				<p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
					메시지를 남겨주시면 24시간 이내에 담당자가 연락드리겠습니다.
				</p>
			</div>
			<form
				action="#"
				method="POST"
				className="mx-auto mt-16 max-w-xl sm:mt-20 inquiry-form"
			>
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					{formFields.map((field) => (
						<div
							key={field.id}
							className={field.fullWidth ? "sm:col-span-2" : ""}
						>
							<label htmlFor={field.id} className={LABEL_STYLES}>
								{field.label}
							</label>
							<div className="mt-2.5">
								<input
									type={field.type}
									name={field.name}
									id={field.id}
									className={INPUT_STYLES}
								/>
							</div>
						</div>
					))}
					<div className="sm:col-span-2">
						<label htmlFor="message" className={LABEL_STYLES}>
							문의 내용 (날짜, 수량, 요청사항)
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className={INPUT_STYLES}
								defaultValue=""
							/>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<button
						type="submit"
						className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-zinc-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
					>
						문의하기
					</button>
				</div>
			</form>
		</section>
	);
}
