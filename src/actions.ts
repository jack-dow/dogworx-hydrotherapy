"use server";

import nodemailer from "nodemailer";

import { type ContactFormSchema } from "~/components/contact-form";
import { env } from "./env.mjs";

async function sendContactEmail(data: ContactFormSchema) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: env.GOOGLE_EMAIL_ADDRESS,
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			refreshToken: env.GOOGLE_REFRESH_TOKEN,
			accessToken: env.GOOGLE_ACCESS_TOKEN,
			expires: parseInt(env.GOOGLE_EXPIRES_IN),
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
}

export { sendContactEmail };
