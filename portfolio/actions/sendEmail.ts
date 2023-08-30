"use server"

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * The function `sendEmail` sends an email using the `resend.emails.send` method, with the sender's
 * email, message, and other details.
 * @param {FormData} formData - The `formData` parameter is an object that contains the data submitted
 * through a form. It is typically an instance of the `FormData` class, which is used to capture form
 * data and send it to the server.
 * @returns The function `sendEmail` returns an object with either an `error` property or a `data`
 * property. If there is an error during the email sending process, the function will return an object
 * with an `error` property containing the error message. If the email is sent successfully, the
 * function will return an object with a `data` property containing the response data from the email
 * sending service.
 */
export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;

    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "wilmerlopezcespedes@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };

}