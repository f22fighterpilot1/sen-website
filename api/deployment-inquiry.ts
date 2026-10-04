import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[character];
    });
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");

        return res.status(405).json({
            error: "Method not allowed.",
        });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_TO_EMAIL) {
        return res.status(500).json({
            error: "Email service is not configured.",
        });
    }

    const body = req.body;

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(400).json({
            error: "Invalid deployment inquiry.",
        });
    }

    const stringFields = [
        "deployment",
        "firstName",
        "lastName",
        "email",
        "jobTitle",
        "company",
        "country",
        "postalCode",
        "phone",
        "question",
        "timeline",
    ] as const;

    const values: Record<string, string> = {};

    for (const field of stringFields) {
        const value = body[field];

        if (typeof value !== "string") {
            return res.status(400).json({
                error: `Invalid ${field} field.`,
            });
        }

        values[field] = value.trim();
    }

    const {
        deployment,
        firstName,
        lastName,
        email,
        jobTitle,
        company,
        country,
        postalCode,
        phone,
        question,
        timeline,
    } = values;

    const contactOk = body.contactOk === true;
    const updates = body.updates === true;

    if (
        !deployment ||
        !firstName ||
        !lastName ||
        !email ||
        !jobTitle ||
        !company ||
        !country ||
        !phone ||
        !timeline ||
        !contactOk
    ) {
        return res.status(400).json({
            error: "Please complete all required fields.",
        });
    }

    if (
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        return res.status(400).json({
            error: "Please provide a valid email address.",
        });
    }

    const safe = {
        deployment: escapeHtml(deployment),
        firstName: escapeHtml(firstName),
        lastName: escapeHtml(lastName),
        email: escapeHtml(email),
        jobTitle: escapeHtml(jobTitle),
        company: escapeHtml(company),
        country: escapeHtml(country),
        postalCode: escapeHtml(postalCode || "Not provided"),
        phone: escapeHtml(phone),
        question: escapeHtml(question || "Not provided"),
        timeline: escapeHtml(timeline),
    };

    try {
        const { error } = await resend.emails.send({
            from: "SEN Website <onboarding@resend.dev>",
            to: [process.env.RESEND_TO_EMAIL],
            replyTo: email,
            subject: `SEN ${deployment} Inquiry — ${company}`,
            html: `
                <h2>New SymbolicEngine Deployment Inquiry</h2>

                <p><strong>Deployment:</strong> ${safe.deployment}</p>
                <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
                <p><strong>Email:</strong> ${safe.email}</p>
                <p><strong>Job Title:</strong> ${safe.jobTitle}</p>
                <p><strong>Company:</strong> ${safe.company}</p>
                <p><strong>Country:</strong> ${safe.country}</p>
                <p><strong>Postal Code:</strong> ${safe.postalCode}</p>
                <p><strong>Phone:</strong> ${safe.phone}</p>
                <p><strong>Timeline:</strong> ${safe.timeline}</p>
                <p><strong>May contact:</strong> Yes</p>
                <p><strong>News/updates opt-in:</strong> ${
                updates ? "Yes" : "No"
            }</p>

                <hr />

                <h3>Question</h3>
                <p>${safe.question.replace(/\n/g, "<br />")}</p>
            `,
        });

        if (error) {
            console.error("Resend deployment inquiry failed:", error);

            return res.status(502).json({
                error: error.message || "We couldn't submit your deployment request.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Your deployment request has been submitted.",
        });
    } catch (error) {
        console.error("Unexpected deployment inquiry error:", error);

        return res.status(500).json({
            error: "An unexpected error occurred. Please try again later.",
        });
    }
}