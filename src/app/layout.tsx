import { cx } from "~/lib/utils";

import "../styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "~/components/ui/toaster";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Dogworx Hydrotherapy | The care your dog would choose",
	description:
		"Dogworx Hydrotherapy offers state-of-the-art hydrotherapy services on the Gold Coast. Our underwater treadmill can help dogs in a variety of circumstances from arthritis to post-surgery recovery to fitness and conditioning. Contact us today to learn more!",
	keywords: [
		"hydrotherapy",
		"underwater treadmill",
		"Gold Coast",
		"Upper Coomera",
		"arthritis",
		"post-surgery recovery",
		"recovery",
		"fitness",
		"conditioning",
		"dog",
		"dogs",
		"pet",
		"canine",
		"dogworx",
		"dogworx hydrotherapy",
		"rehabilitation",
		"hip dysplasia",
		"cruciate ligament",
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cx("min-h-screen font-sans antialiased bg-gray-50", fontSans.variable)}>
				<div className="relative flex min-h-screen flex-col">
					<div className="flex-1">{children}</div>
				</div>
				<Toaster />
			</body>
		</html>
	);
}
