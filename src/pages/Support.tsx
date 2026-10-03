import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  comments: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Republic of the)",
  "Costa Rica",
  "Côte d’Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See (Vatican City)",
  "Honduras",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Türkiye",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function Support() {
  const navigate = useNavigate();

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [errors, setErrors] = useState<ErrorState>({});

  const setField = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    if (submitted) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const validate = (): ErrorState => {
    const next: ErrorState = {};

    const req: Array<keyof FormState> = [
      "firstName",
      "lastName",
      "email",
      "company",
      "phone",
      "country",
      "comments",
    ];

    for (const k of req) {
      if (!String(form[k]).trim()) {
        next[k] = "This field is required.";
      }
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = "Please enter a valid email address.";
    }

    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
    setSubmitError("");

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "We couldn't submit your request."
        );
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Support form submission failed:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page support-page">
      <header className="support-header">
        <h1>Contact support</h1>
        <p className="support-sub">
          Tell us what you’re trying to do. We’ll respond with a deterministic
          next step.
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

            {submitted && errors.firstName && (
              <div className="support-error">{errors.firstName}</div>
            )}
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

            {submitted && errors.lastName && (
              <div className="support-error">{errors.lastName}</div>
            )}
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

          {submitted && errors.email && (
            <div className="support-error">{errors.email}</div>
          )}
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

          {submitted && errors.company && (
            <div className="support-error">{errors.company}</div>
          )}
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

          {submitted && errors.phone && (
            <div className="support-error">{errors.phone}</div>
          )}
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

          {submitted && errors.country && (
            <div className="support-error">{errors.country}</div>
          )}
        </div>

        {/* Comments */}
        <div className="support-field">
          <div className="support-label-row">
            <label className="support-label" htmlFor="comments">
              Comments
            </label>
            <span className="support-required">Required</span>
          </div>

          <textarea
            id="comments"
            className="support-textarea"
            placeholder="I'd like to learn more about..."
            value={form.comments}
            onChange={(e) => setField("comments", e.target.value)}
            rows={5}
            required
          />

          {submitted && errors.comments && (
            <div className="support-error">{errors.comments}</div>
          )}
        </div>

        <p className="support-legal">
          By submitting this form, you acknowledge and agree that
          SymbolicEngine will process your information for support and product
          communications.
        </p>

        {submitError && (
          <div className="support-error" role="alert">
            {submitError}
          </div>
        )}

        <button
          className="btn btn-primary support-submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

