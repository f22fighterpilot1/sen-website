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
            error: "Invalid subscription request.",
        });
    }

    const email =
        typeof body.email === "string"
            ? body.email.trim()
            : "";

    const optIn = body.optIn === true;

    if (
        !email ||
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        return res.status(400).json({
            error: "Please provide a valid email address.",
        });
    }

    if (!optIn) {
        return res.status(400).json({
            error: "Newsletter consent is required.",
        });
    }

    const safeEmail = escapeHtml(email);

    try {
        const { error } = await resend.emails.send({
            from: "SEN Website <onboarding@resend.dev>",
            to: [process.env.RESEND_TO_EMAIL],
            replyTo: email,
            subject: "SymbolicEngine News Subscription",
            html: `
        <h2>New SymbolicEngine News Subscription</h2>
        <p>
          I would like to subscribe to SymbolicEngine news, product updates,
          releases, and events.
        </p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Opt-in:</strong> Yes</p>
        <p><strong>Source:</strong> Website footer</p>
      `,
        });

        if (error) {
            console.error("Resend subscription request failed:", error.name);

            return res.status(502).json({
                error: "We couldn't submit your subscription request.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Your subscription request has been submitted.",
        });
    } catch {
        console.error("Unexpected subscription email error.");

        return res.status(500).json({
            error: "An unexpected error occurred. Please try again later.",
        });
    }
}