import { type FormEvent, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

type DeploymentKey = "api-access" | "lightweight-sdk" | "container-deployment" | "embedded-sdk";

type Props = {
    deployment: DeploymentKey;
};

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    company: string;
    country: string;
    postalCode: string;
    phone: string;
    question: string;
    timeline: string;
    updates: boolean;
    contactOk: boolean;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const DEPLOYMENTS = {
    "api-access": {
        name: "API Access",
        shortName: "API",
        pageTitle: "Find out about API Access pricing",
        headline: "Evaluate SEN API access for your recognition workflow",
        body: "Tell us where SEN would connect to your system. We will help map endpoints, data flow, and verification requirements.",
        focus: ["Direct service integration", "Fast pilot path", "Centralized recognition"],
    },
    "lightweight-sdk": {
        name: "Lightweight SDK",
        shortName: "SDK",
        pageTitle: "See about the Lightweight SDK pricing",
        headline: "Plan a faster SEN SDK integration",
        body: "Share your application environment and integration goals. We will help identify the cleanest SDK path for your team.",
        focus: ["Application-level helpers", "Shorter implementation cycle", "API-backed verification"],
    },
    "container-deployment": {
        name: "Container Deployment",
        shortName: "Container",
        pageTitle: "Find out about Container Deployment pricing",
        headline: "Run SEN inside your controlled environment",
        body: "Tell us about your infrastructure, security requirements, and deployment model. We will outline the container path.",
        focus: ["Private network deployment", "On-prem control", "Enterprise rollout support"],
    },
    "embedded-sdk": {
        name: "Embedded SDK",
        shortName: "Embedded",
        pageTitle: "Learn about Embedded SDK pricing",
        headline: "Embed SEN directly into your product stack",
        body: "Share your runtime constraints and integration depth. We will help scope the embedded path for high-control environments.",
        focus: ["Offline operation", "Deep product integration", "Maximum deployment control"],
    },
};

const COUNTRIES = ["United States", "Canada", "United Kingdom", "Germany", "France", "Australia", "Japan", "Other"];
const TIMELINES = ["Exploring options", "Planning a pilot", "Ready for enterprise evaluation", "Need deployment guidance"];

export default function DeploymentInquiry({ deployment }: Props) {
    const config = DEPLOYMENTS[deployment];
    const [step, setStep] = useState<1 | 2>(1);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<ErrorState>({});
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        company: "",
        country: "United States",
        postalCode: "",
        phone: "",
        question: "",
        timeline: "",
        updates: false,
        contactOk: false,
    });

    const pageTitle = useMemo(() => config.pageTitle, [config.pageTitle]);

    const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => {
            const next = { ...prev };
            delete next[key];
            return next;
        });
    };

    const validateStepOne = () => {
        const next: ErrorState = {};
        if (!form.firstName.trim()) next.firstName = "First name is required.";
        if (!form.lastName.trim()) next.lastName = "Last name is required.";
        if (!form.email.trim()) next.email = "Business email is required.";
        if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            next.email = "Enter a valid business email.";
        }
        return next;
    };

    const validateStepTwo = () => {
        const next: ErrorState = {};
        if (!form.jobTitle.trim()) next.jobTitle = "Job title is required.";
        if (!form.company.trim()) next.company = "Company is required.";
        if (!form.country.trim()) next.country = "Country is required.";
        if (!form.phone.trim()) next.phone = "Phone is required.";
        if (!form.timeline.trim()) next.timeline = "Select one option.";
        if (!form.contactOk) next.contactOk = "Please confirm we may contact you about this request.";
        return next;
    };

    const onContinue = (e: FormEvent) => {
        e.preventDefault();
        const next = validateStepOne();
        setSubmitted(true);
        setErrors(next);
        if (Object.keys(next).length) return;
        setSubmitted(false);
        setStep(2);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const next = validateStepTwo();
        setSubmitted(true);
        setErrors(next);
        if (Object.keys(next).length) return;

        const subject = `SEN ${config.name} Inquiry - ${form.company}`;
        const body = [
            `Deployment: ${config.name}`,
            `Name: ${form.firstName} ${form.lastName}`,
            `Email: ${form.email}`,
            `Job title: ${form.jobTitle}`,
            `Company: ${form.company}`,
            `Country: ${form.country}`,
            `Postal code: ${form.postalCode || "(none)"}`,
            `Phone: ${form.phone}`,
            `Timeline: ${form.timeline}`,
            `Contact permission: ${form.contactOk ? "Yes" : "No"}`,
            "",
            "Question:",
            form.question || "(none)",
        ].join("\n");

        window.location.href = `mailto:contact@symbolicengine.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <main className="deployment-page">
            <section className="deployment-shell">
                <div className="deployment-copy">
                    <p className="deployment-eyebrow">SymbolicEngine deployment</p>
                    <h1>{step === 1 ? pageTitle : config.headline}</h1>
                    <p>{config.body}</p>

                    <div className="deployment-focus">
                        {config.focus.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>

                <aside className="deployment-panel">
                    <div className="deployment-panel-rule" />
                    <h2>{step === 1 ? `Contact a SymbolicEngine pricing expert` : `${config.shortName} deployment details`}</h2>

                    {step === 1 ? (
                        <form className="deployment-form" onSubmit={onContinue} noValidate>
                            <label>
                                <span>First Name</span>
                                <input value={form.firstName} onChange={(e) => setField("firstName", e.target.value)} />
                                {submitted && errors.firstName && <em>{errors.firstName}</em>}
                            </label>

                            <label>
                                <span>Last Name</span>
                                <input value={form.lastName} onChange={(e) => setField("lastName", e.target.value)} />
                                {submitted && errors.lastName && <em>{errors.lastName}</em>}
                            </label>

                            <label>
                                <span>Business Email</span>
                                <input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} />
                                {submitted && errors.email && <em>{errors.email}</em>}
                            </label>

                            <button className="deployment-submit" type="submit">
                                Continue
                            </button>
                        </form>
                    ) : (
                        <form className="deployment-form deployment-form--long" onSubmit={onSubmit} noValidate>
                            <button className="deployment-back" type="button" onClick={() => setStep(1)}>
                                {"< Back"}
                            </button>

                            <label>
                                <span>Job Title</span>
                                <input value={form.jobTitle} onChange={(e) => setField("jobTitle", e.target.value)} />
                                {submitted && errors.jobTitle && <em>{errors.jobTitle}</em>}
                            </label>

                            <label>
                                <span>Company</span>
                                <input value={form.company} onChange={(e) => setField("company", e.target.value)} />
                                {submitted && errors.company && <em>{errors.company}</em>}
                            </label>

                            <label>
                                <span>Country</span>
                                <select value={form.country} onChange={(e) => setField("country", e.target.value)}>
                                    {COUNTRIES.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                            </label>

                            <label>
                                <span>Zip / Postal Code</span>
                                <input value={form.postalCode} onChange={(e) => setField("postalCode", e.target.value)} />
                            </label>

                            <label>
                                <span>Phone</span>
                                <input value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
                                {submitted && errors.phone && <em>{errors.phone}</em>}
                            </label>

                            <label>
                                <span>What is your question?</span>
                                <textarea value={form.question} onChange={(e) => setField("question", e.target.value)} rows={5} />
                            </label>

                            <label>
                                <span>Please select one of the following:</span>
                                <select value={form.timeline} onChange={(e) => setField("timeline", e.target.value)}>
                                    <option value="">Select...</option>
                                    {TIMELINES.map((timeline) => (
                                        <option key={timeline} value={timeline}>{timeline}</option>
                                    ))}
                                </select>
                                {submitted && errors.timeline && <em>{errors.timeline}</em>}
                            </label>
                            <label className="deployment-check">
                                <input type="checkbox" checked={form.contactOk} onChange={(e) => setField("contactOk", e.target.checked)} />
                                <span>SymbolicEngine may contact me about this deployment request.</span>
                                {submitted && errors.contactOk && <em>{errors.contactOk}</em>}
                            </label>

                            <button className="deployment-submit" type="submit">
                                Submit your request
                            </button>
                        </form>
                    )}

                    <NavLink className="deployment-secondary" to="/pricing">
                        View all deployment options
                    </NavLink>
                </aside>
            </section>
        </main>
    );
}