"use client";

// import {  EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendContactEmail } from "~/actions";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Loader } from "./ui/loader";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export const ContactFormSchema = z.object({
	firstName: z
		.string()
		.min(2, {
			message: "First name must be at least 2 characters long",
		})
		.max(50, {
			message: "First name must be less than 50 characters long",
		}),
	lastName: z
		.string()
		.min(2, {
			message: "Last name must be at least 2 characters long",
		})
		.max(50, {
			message: "Last name must be less than 50 characters long",
		})
		.optional(),
	email: z.string().email({
		message: "Please enter a valid email address",
	}),
	phone: z
		.string()
		.min(10, {
			message: "Please enter a valid phone number",
		})
		.max(20, {
			message: "Please enter a valid phone number",
		}),
	message: z
		.string()
		.min(10, {
			message: "Message must be at least 10 characters long",
		})
		.max(500, {
			message: "Message must be less than 500 characters long",
		}),
});
export type ContactFormSchema = z.infer<typeof ContactFormSchema>;

function ContactForm() {
	const { toast } = useToast();

	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(ContactFormSchema),
	});

	async function onSubmit(values: ContactFormSchema) {
		const result = await sendContactEmail(values);

		if (typeof result.accepted === "string" ? true : result.accepted.length > 0) {
			toast({
				title: `Message sent.`,
				description: `Successfully sent your message, we will get back to you as soon as possible.`,
			});
			form.reset();
		} else {
			toast({
				title: `Message failed to send`,
				description: `There was an error sending your message, please try again later.`,
			});
		}
	}
	return (
		<div className="relative isolate bg-white">
			<div className="grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative">
					<div className="max-w-xl lg:mx-0 lg:max-w-lg">
						<div
							className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-22.5rem]"
							aria-hidden="true"
						>
							<div
								className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
								style={{
									clipPath:
										"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
								}}
							/>
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We are always happy to answer any questions or concerns you may have. Please don&apos;t hesitate to
							contact us at any time.
						</p>
						<dl className="my-8 space-y-4 text-base leading-7 text-gray-600">
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Telephone</span>
									<PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
								</dt>
								<dd>
									<a className="hover:text-gray-900" href="tel:0405774901">
										0405774901
									</a>
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Email</span>
									<MailIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
								</dt>
								<dd>
									<a className="hover:text-gray-900" href="mailto:sandy@dogworx.com.au">
										sandy@dogworx.com.au
									</a>
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Facebook</span>
									<svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										></path>
									</svg>
								</dt>
								<dd>
									<a className="hover:text-gray-900" href="https://facebook.com/dogworx" target="_blank">
										Facebook
									</a>
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Instagram</span>
									<svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										></path>
									</svg>
								</dt>
								<dd>
									<a className="hover:text-gray-900" href="https://instagram.com/dogworx.hydrotherapy" target="_blank">
										Instagram
									</a>
								</dd>
							</div>
						</dl>
						<div className="mt-10 hidden overflow-hidden rounded-md xl:block">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.058840638382!2d153.28560130000002!3d-27.900167599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911714c0ef8875%3A0x5f7a19a79796d50d!2sDogworx%20Hydrotherapy!5e0!3m2!1sen!2sau!4v1687064203566!5m2!1sen!2sau"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen={false}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>
				<Form {...form}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							void form.handleSubmit(onSubmit)(e);
						}}
					>
						<div className="lg:mr-0 lg:max-w-lg">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input {...field} value={field.value ?? ""} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<div className="flex justify-between">
												<FormLabel>Last name</FormLabel>
												<span className="text-sm leading-6 text-gray-500" id="email-optional">
													Optional
												</span>
											</div>
											<FormControl>
												<Input {...field} value={field.value ?? ""} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="sm:col-span-2">
											<FormLabel>Email address</FormLabel>
											<FormControl>
												<Input {...field} value={field.value ?? ""} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem className="sm:col-span-2">
											<FormLabel>Phone number</FormLabel>

											<FormControl>
												<Input {...field} value={field.value ?? ""} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem className="sm:col-span-2">
											<FormLabel>Message</FormLabel>

											<FormControl>
												<Textarea rows={4} {...field} value={field.value ?? ""} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="mt-8 flex justify-end">
								<button
									type="submit"
									disabled={form.formState.isSubmitting || form.formState.submitCount > 2}
									className="flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
								>
									{form.formState.isSubmitting && <Loader className="mr-2" size="sm" />}
									<span>Send message</span>
								</button>
							</div>
						</div>
					</form>
				</Form>
				<div className="mt-10 flex items-center justify-center overflow-hidden rounded-md lg:col-span-2 xl:hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.058840638382!2d153.28560130000002!3d-27.900167599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911714c0ef8875%3A0x5f7a19a79796d50d!2sDogworx%20Hydrotherapy!5e0!3m2!1sen!2sau!4v1687064203566!5m2!1sen!2sau"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</div>
	);
}

export { ContactForm };
