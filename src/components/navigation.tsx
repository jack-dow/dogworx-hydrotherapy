import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const navigation = [
	{ name: "FAQ", href: "#faq" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

function Navigation() {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Dogworx Hydrotherapy</span>
						<img className="h-14 w-auto" src="/dogworx-logo-gradient.svg" alt="" />
					</a>
				</div>

				<div className="flex lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Open main menu</span>
								<MenuIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Navigation</SheetTitle>
								<SheetDescription>Press the link to navigate</SheetDescription>
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end" />
			</nav>
		</header>
	);
}

export { Navigation };
