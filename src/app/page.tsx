import Image from "next/image";

import { ContactForm } from "~/components/contact-form";
import { Navigation } from "~/components/navigation";

const faqs = [
	{
		id: 1,
		question: "What is hydrotherapy?",
		answer:
			"Hydrotherapy is a form of rehabilitation and exercise that involves your dog walking on the treadmill while submerged in water. The water provides resistance, which helps to build strength and endurance while the buoyancy of the water reduces the impact on the dog's joints.",
	},
	{
		id: 2,
		question: "What can hydrotherapy do for my dog?",
		answer:
			"Hydrotherapy can help in a variety of circumstances, including recovery from injury or surgery, 'pre-hab' to prepare for surgery, relief from pain caused by arthritis, maintaining muscle mass and mobility, weight loss, fitness and conditioning, as well as providing enrichment and mental stimulation.",
	},
	{
		id: 3,
		question: "How are the sessions structured?",
		answer:
			"Our initial session takes approximately an hour and provides an opportunity for us to get to know each other, so your dog feels relaxed in our clinic and enjoys visiting for their sessions. We introduce them to the underwater treadmill at a pace they're comfortable with. We'll also discuss your dog's history and what you hope they'll achieve from hydrotherapy.",
	},
	{
		id: 4,
		question: "Follow-up sessions",
		answer:
			"Following your dog's initial session, follow-up sessions usually take approximately half an hour, during which we'll discuss how your dog's progressed since their previous session and what our goals are for this session.",
	},
	{
		id: 5,
		question: "How much does it cost?",
		answer:
			"We're currently offering an introductory special rate of $99 for your dog's initial session, then $55 per session for follow ups; or $290 for our five-session package, which includes the initial session, plus four follow ups.",
	},
	{
		id: 6,
		question: "Do I need a referral from my vet?",
		answer:
			"We operate on a vet-referral basis to ensure we're providing treatment that's in alignment with your dog's overall health management plan. However, it's a very simple process whereby we contact your vet to obtain their confirmation that your dog doesn't have any issues that would preclude them from having hydrotherapy in our underwater treadmill.",
	},
	{
		id: 7,
		question: "How do I know if my dog would benefit from hydrotherapy?",
		answer: `There are many subtle signs that your dog may have an issue that hydrotherapy could be beneficial for. These signs don't necessarily mean there's something "wrong" with your dog, but are worth keeping an eye out for and discussing with us or your vet if you've got any concerns.`,
	},
] as const;

export default function Home() {
	return (
		<div className="bg-white">
			<Navigation />
			<main>
				<div className="relative isolate">
					<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 sm:z-20 lg:-z-10">
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF80B5] to-[#9089fc] opacity-30 sm:left-[calc(30%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						></div>
					</div>
					<svg
						className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
								width="200"
								height="200"
								x="50%"
								y="-1"
								patternUnits="userSpaceOnUse"
							>
								<path d="M.5 200V.5H200" fill="none"></path>
							</pattern>
						</defs>
						<svg x="50%" y="-1" className="overflow-visible fill-gray-50">
							<path
								d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
								strokeWidth="0"
							></path>
						</svg>
						<rect width="100%" height="100%" strokeWidth="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"></rect>
					</svg>
					<div
						className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
						aria-hidden="true"
					>
						<div
							className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
							style={{
								clipPath:
									"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
							}}
						></div>
					</div>

					<div className="overflow-hidden">
						<div className="mx-auto max-w-7xl space-y-16 px-6 pb-8 pt-36 sm:space-y-20 sm:px-8 md:px-12 lg:px-8 lg:pt-32 ">
							{/* <!-- Header --> */}
							<div className="max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="w-full max-w-xl sm:pt-10 lg:shrink-0 xl:max-w-2xl">
									<h1 className="text-4xl font-bold capitalize tracking-tight text-gray-900 sm:text-6xl">
										The care your dog would choose
									</h1>
									<p className="relative mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
										Whether your dog is recovering from an injury, managing a chronic condition, or simply staying fit,
										hydrotherapy can help. Our state-of-the-art underwater treadmill provides the optimal environment
										for us to help you achieve your dog&apos;s health &amp; fitness goals.
									</p>
									<div className="mt-10 flex items-center gap-x-6">
										<a
											href="#contact"
											className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Contact Us
										</a>
										<a
											href="#faq"
											className="text-sm font-semibold leading-6 text-gray-900 hover:underline focus-visible:underline"
										>
											Learn More <span aria-hidden="true">→</span>
										</a>
									</div>
								</div>

								{/* <!-- Header Images --> */}
								<div className="mt-14 flex justify-end sm:-mt-44 sm:justify-start sm:gap-8 sm:pl-20 lg:mt-0 lg:pl-0">
									<div className="ml-auto hidden w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:block sm:pt-80 lg:order-last lg:hidden  lg:pt-36 xl:order-none xl:block xl:pt-80">
										<div className="relative">
											<Image
												src="/imgs/header/01-front-of-shop-night-min.png"
												alt="The Dogworx Hydrotherapy shop front at night"
												width={352}
												height={528}
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<Image
												src="/imgs/header/02-poops-close-min.png"
												alt="Calla (Great Dane cross Wolfhound) in the underwater treadmill"
												width={352}
												height={528}
												className="hidden aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg sm:block lg:hidden xl:block"
											/>
											<Image
												src="/imgs/header/01-front-of-shop-night-min.png"
												alt="The Dogworx Hydrotherapy shop front at night"
												width={352}
												height={528}
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg sm:hidden lg:block xl:hidden"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<Image
												src="/imgs/header/03-sadie-close-min.png"
												alt="Sadie (Golden Labrador) in the underwater treadmill"
												width={352}
												height={528}
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
										<div className="relative">
											<Image
												src="/imgs/header/04-inside-shop-right-night-min.png"
												alt="Inside the Dogworx Hydrotherapy shop taken at night"
												width={352}
												height={528}
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<Image
												src="/imgs/header/05-mayzie-close-min.png"
												alt="Mayzie (Chocolate Labrador) in the underwater treadmill"
												width={352}
												height={528}
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
								</div>
							</div>

							{/* <!-- FAQS --> */}
							<section id="faq">
								<div className="max-w-7xl ">
									<div className="mx-auto max-w-2xl text-center">
										<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
											Frequently asked questions
										</h2>
										<p className="mt-6 text-base leading-7 text-gray-600">
											Have a different question and can’t find the answer you’re looking for? Reach out to us by{" "}
											<a
												href="mailto:sandy@dogworx.com.au"
												className="font-semibold text-indigo-600 hover:text-indigo-500"
											>
												sending us an email
											</a>{" "}
											and we’ll get back to you as soon as we can.
										</p>
									</div>
									<div className="mt-14">
										<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-16 md:space-y-0 lg:grid-cols-2 lg:gap-x-10">
											{faqs.map((faq) => (
												<div key={faq.id}>
													<dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
													<dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
												</div>
											))}
											<div>
												<dt className="text-base font-semibold leading-7 text-gray-900">Some common signs are:</dt>
												<dd className="mt-2 text-base leading-7 text-gray-600">
													<ul className="list-disc pl-4">
														<li>
															Doesn&apos;t sit straight - rolls onto one hip, or has leg/s sticking out to the side.
														</li>
														<li>&apos;Bunny hops&apos; back legs when running.</li>
														<li>Butt wiggles when walking.</li>
														<li>&apos;Too lazy&apos; or hesitant to jump into the car or onto furniture.</li>
														<li>
															Doesn&apos;t enjoy being petted in certain areas or positions, eg. doesn&apos;t like being
															laid on their back, or their back twitches when you pat down their spine.
														</li>
														<li>Gets &apos;grumpy&apos; after a lot of activity.</li>
														<li>Reluctant to run around &amp; play with other dogs, or is lame afterwards.</li>
													</ul>
												</dd>
											</div>
										</dl>
									</div>
								</div>
							</section>

							{/* <!-- About --> */}
							<section className="mt-32" id="about">
								<div className="max-w-7xl lg:flex">
									<div className="grid max-w-2xl grid-cols-1 gap-12 sm:gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-8 xl:gap-12 ">
										<div className="w-full max-w-xl lg:max-w-lg lg:shrink-0 xl:max-w-2xl">
											<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Sandy</h2>
											<p className="mt-6 text-xl leading-8 text-gray-600">
												Sandy started Dogworx in 2011 to provide behaviour coaching for pet dogs and their owners. Since
												then, she&apos;s consistently seen dogs showing, often subtle, signs of pain &amp; discomfort
												which can contribute to their behavioural issues.
											</p>
											<p className="mt-6 text-base leading-7 text-gray-600">
												Dogs are very adept at hiding pain, so many loving owners are unaware that their dogs are
												experiencing discomfort on a daily basis. Seeing so much of this and knowing it&apos;s not just
												old dogs that can be living in pain, she finally decided to take the plunge and invest in an
												underwater treadmill!
											</p>

											<p className="mt-6 text-base leading-7 text-gray-600">
												Thankfully it&apos;s not all aches &amp; pains though - hydrotherapy&apos;s fantastic for
												fitness &amp; conditioning, as well as enrichment &amp; mental stimulation for all dogs, so
												it&apos;s a fun way to keep your dog fit, healthy &amp; happy for as long as possible.
											</p>
										</div>
										<div className="w-full flex-auto lg:hidden">
											<Image
												src="/imgs/about/01-sandy-sadie-min.png"
												alt="Sandy (left) conducting a hydrotherapy session with Sadie (right) in the underwater treadmill"
												width={1152}
												height={768}
												className="aspect-[7/5] w-full max-w-none rounded-2xl bg-gray-50 object-cover"
											/>
										</div>
										<div className="hidden flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents ">
											<div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
												<Image
													src="/imgs/about/01-sandy-sadie-min.png"
													alt="Sandy (left) conducting a hydrotherapy session with Sadie (right) in the underwater treadmill"
													width={1152}
													height={768}
													className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
												/>
											</div>
											<div className="contents lg:col-span-2 lg:col-end-2 lg:flex lg:items-start lg:gap-x-8 xl:ml-auto xl:w-[37rem] xl:justify-end">
												<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
													<Image
														src="/imgs/about/02-gus-min.png"
														alt="Gus (boxer) sitting in-front of the underwater treadmill wearing a Dogworx Hydrotherapy towel after his session"
														width={768}
														height={604}
														className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-fill"
													/>
												</div>
												<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
													<Image
														src="/imgs/about/03-inside-shop-right-min.png"
														alt="Inside of the Dogworx Hydrotherapy shop taken at night"
														width={1152}
														height={842}
														className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
													/>
												</div>
												<div className="hidden sm:w-0 sm:flex-auto xl:block xl:w-auto xl:flex-none">
													<Image
														src="/imgs/about/04-sign-at-night-min.png"
														alt="The sign outside of the Dogworx Hydrotherapy shop taken at night"
														width={768}
														height={604}
														className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>

							<section id="contact">
								<ContactForm />
							</section>
						</div>
					</div>
				</div>
			</main>

			{/* <!-- Footer --> */}
			<footer className="bg-white">
				<div className="mx-auto max-w-7xl py-12 lg:flex  lg:items-center lg:justify-between lg:px-8">
					<div className="flex items-center justify-center space-x-6 lg:order-2">
						<a
							href="https://goo.gl/maps/sCuVg83WzBpaBXux6"
							target="_blank"
							className="text-sm text-sky-700 hover:underline"
						>
							T6, 659 Reserve Road, Upper Coomera
						</a>
						<a href="https://facebook.com/dogworx" target="_blank" className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">Facebook</span>
							<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
						<a
							href="https://instagram.com/dogworx.hydrotherapy"
							target="_blank"
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">Instagram</span>
							<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div className="mt-8 lg:order-1 lg:mt-0">
						<p className="text-center text-xs leading-5 text-gray-500">
							&copy; {new Date().getFullYear()} Dogworx Hydrotherapy. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
