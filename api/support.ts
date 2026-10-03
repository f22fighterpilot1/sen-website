
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

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
      error: "Method not allowed",
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
      error: "Invalid form submission.",
    });
  }

  const fields = [
    "firstName",
    "lastName",
    "email",
    "company",
    "phone",
    "country",
    "comments",
  ] as const;

  const values: Record<string, string> = {};

  for (const field of fields) {
    const value = body[field];

    if (typeof value !== "string") {
      return res.status(400).json({
        error: `Invalid ${field} field.`,
      });
    }

    values[field] = value.trim();
  }

  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    country,
    comments,
  } = values;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !comments ||
    firstName.length > 100 ||
    lastName.length > 100 ||
    email.length > 254 ||
    company.length > 200 ||
    phone.length > 50 ||
    country.length > 100 ||
    comments.length > 5000
  ) {
    return res.status(400).json({
      error: "Please check the required fields and character limits.",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      error: "Please provide a valid email address.",
    });
  }

  const safe = {
    firstName: escapeHtml(firstName),
    lastName: escapeHtml(lastName),
    email: escapeHtml(email),
    company: escapeHtml(company || "Not provided"),
    phone: escapeHtml(phone || "Not provided"),
    country: escapeHtml(country || "Not provided"),
    comments: escapeHtml(comments),
  };

  try {
    const { data, error } = await resend.emails.send({
      from: "SEN Website <onboarding@resend.dev>",
      to: [process.env.RESEND_TO_EMAIL],
      replyTo: email,
      subject: `SEN Website Support — ${firstName} ${lastName}`,
      html: `
        <h2>New SymbolicEngine Support Request</h2>
        <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Country:</strong> ${safe.country}</p>
        <hr />
        <h3>Message</h3>
        <p>${safe.comments.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend delivery request failed:", error.name);

      return res.status(502).json({
        error: "We couldn't send your request. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your support request has been submitted.",
    });
  } catch {
    console.error("Unexpected support email error.");

    return res.status(500).json({
      error: "An unexpected error occurred. Please try again later.",
    });
  }
}