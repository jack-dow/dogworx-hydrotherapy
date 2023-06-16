"use server";

import { type ContactFormSchema } from "~/components/contact-form";

async function sendContactEmail(data: ContactFormSchema) {
	console.log(data);
}

export { sendContactEmail };
