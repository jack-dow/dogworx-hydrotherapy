"use server";

import nodemailer from "nodemailer";

import { type ContactFormSchema } from "~/components/contact-form";
import { env } from "./env.mjs";

async function sendContactEmail(data: ContactFormSchema) {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: env.GOOGLE_EMAIL_ADDRESS,
				pass: env.GOOGLE_APP_PASSWORD,
			},
		});

		const result = await transporter.sendMail({
			subject: `Website Contact Form Submission from email: "${data.email}" - Phone: "${data.phone}" `,
			text: `Name:\n${data.firstName}${data.lastName ? ` ${data.lastName}` : ""}\n\nEmail:\n${data.email}\n\nPhone:\n${
				data.phone
			}\n\nMessage:\n${data.message}`,
			to: env.GOOGLE_EMAIL_ADDRESS,
			from: env.GOOGLE_EMAIL_ADDRESS,
		});

		return result;
	} catch (error) {
		console.log(error);
		throw new Error("Failed sending email.");
	}
}

export { sendContactEmail };
