"use client";

// import {  EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendContactEmail } from "~/actions";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(ContactFormSchema),
	});

	// 2. Define a submit handler.
	function onSubmit(values: ContactFormSchema) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		sendContactEmail(values)
			.then(() => {
				console.log("Email sent");
			})
			.catch((err) => {
				console.error(err);
			});
	}
	return (
		<div className="relative isolate bg-white">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 ">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
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
						<dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
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
						</dl>
					</div>
				</div>
				<Form {...form}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							void form.handleSubmit(onSubmit)(e);
						}}
						className="px-6 "
					>
						<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
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
									className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Send message
								</button>
							</div>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}

export { ContactForm };
