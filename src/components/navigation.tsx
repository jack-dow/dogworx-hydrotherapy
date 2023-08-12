"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
	{ name: "FAQ", href: "#faq" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

function Navigation() {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-8 md:px-12 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className=" py-1.5">
						<span className="sr-only">Dogworx Hydrotherapy Logo</span>
						<Image className="h-14 w-auto" src="/dogworx-logo-gradient.svg" alt="" height={56} width={66} />
					</Link>
				</div>

				<div className="flex gap-x-12">
					{navigation.map((item) => (
						<Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
							{item.name}
						</Link>
					))}
				</div>
				<div className="flex lg:flex-1 lg:justify-end" />
			</nav>
		</header>
	);
}

export { Navigation };
