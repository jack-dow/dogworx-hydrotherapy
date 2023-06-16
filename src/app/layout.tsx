import { cx } from "~/lib/utils";

import "../styles/globals.css";

import { Inter } from "next/font/google";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
	title: "Dogworx Hydrotherapy | The care your dog would choose",
	description:
		"Dogworx Hydrotherapy provides hydrotherapy services to dogs in need of physical rehabilitation, fitness, and overall wellness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cx("min-h-screen font-sans antialiased bg-gray-50", fontSans.variable)}>
				<div className="relative flex min-h-screen flex-col">
					<div className="flex-1">{children}</div>
				</div>
			</body>
		</html>
	);
}
