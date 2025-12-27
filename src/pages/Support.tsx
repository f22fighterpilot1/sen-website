import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  comments: string;
};

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "Other",
];

export default function Support() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // TODO: wire to real backend/email provider
    console.log("Support form submit:", form);
  };

  return (
    <section className="page support-page">
      <header className="support-header">
        <h1>Contact support</h1>
        <p className="support-sub">
          Tell us what you’re trying to do. We’ll respond with a deterministic next step.
        </p>
      </header>

      <form className="support-form" onSubmit={onSubmit} noValidate>
        {/* Row: First / Last */}
        <div className="support-row">
          <div className="support-field">
            <div className="support-label-row">
              <label className="support-label" htmlFor="firstName">
                First Name
              </label>
              <span className="support-required">Required</span>
            </div>
            <input
              id="firstName"
              className="support-input"
              value={form.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              required
              autoComplete="given-name"
            />
          </div>

          <div className="support-field">
            <div className="support-label-row">
              <label className="support-label" htmlFor="lastName">
                Last Name
              </label>
              <span className="support-required">Required</span>
            </div>
            <input
              id="lastName"
              className="support-input"
              value={form.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              required
              autoComplete="family-name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="support-field">
          <div className="support-label-row">
            <label className="support-label" htmlFor="email">
              Business Email
            </label>
            <span className="support-required">Required</span>
          </div>
          <input
            id="email"
            type="email"
            className="support-input"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            required
            autoComplete="email"
            inputMode="email"
          />
        </div>

        {/* Company */}
        <div className="support-field">
          <div className="support-label-row">
            <label className="support-label" htmlFor="company">
              Company
            </label>
            <span className="support-required">Required</span>
          </div>
          <input
            id="company"
            className="support-input"
            value={form.company}
            onChange={(e) => setField("company", e.target.value)}
            required
            autoComplete="organization"
          />
        </div>

        {/* Phone */}
        <div className="support-field">
          <div className="support-label-row">
            <label className="support-label" htmlFor="phone">
              Phone
            </label>
            <span className="support-required">Required</span>
          </div>
          <input
            id="phone"
            className="support-input"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            required
            autoComplete="tel"
            inputMode="tel"
          />
        </div>

        {/* Country */}
        <div className="support-field">
          <div className="support-label-row">
            <label className="support-label" htmlFor="country">
              Country
            </label>
            <span className="support-required">Required</span>
          </div>
          <select
            id="country"
            className="support-select"
            value={form.country}
            onChange={(e) => setField("country", e.target.value)}
            required
          >
            <option value="" disabled>
              Select...
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {submitted && !form.country && (
            <div className="support-error">This field is required.</div>
          )}
        </div>

        {/* Comments */}
        <div className="support-field">
          <label className="support-label" htmlFor="comments">
            Comments
          </label>
          <textarea
            id="comments"
            className="support-textarea"
            placeholder="I'd like to learn more about..."
            value={form.comments}
            onChange={(e) => setField("comments", e.target.value)}
            rows={5}
          />
        </div>

        <p className="support-legal">
          By submitting this form, you acknowledge and agree that SymbolicEngine will process your
          information for support and product communications.
        </p>

        <button className="btn btn-primary support-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

Email: <strong>contact@symbolicengine.ai</strong>