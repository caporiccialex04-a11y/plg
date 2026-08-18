"use client";

import { useState, type FormEvent } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Field, inputClass } from "@/components/ui/Field";
import { FormFeedback } from "@/components/ui/FormFeedback";
import { intendedUses, unitOptions, unitSpecs } from "@/data/leasingData";
import {
  compactErrors,
  email,
  hasErrors,
  phone,
  required,
  type FieldErrors,
} from "@/lib/validation";

type Feedback = {
  tone: "success" | "error";
  title: string;
  message: string;
};

function simulateSubmit() {
  return new Promise((resolve) => setTimeout(resolve, 650));
}

export function InquiryFunnel() {
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  return (
    <section id="inquire" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Leasing inquiry"
          title="Three ways to start. One leasing team."
          description="Request a conversation, join the priority list for the package, or hold a suite with a deposit that credits to first month’s rent."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ContactInquiryForm onFeedback={setFeedback} />
          <div className="grid gap-6">
            <PriorityListForm onFeedback={setFeedback} />
            <ReserveUnit onFeedback={setFeedback} />
          </div>
        </div>
      </Container>
      <FormFeedback
        open={Boolean(feedback)}
        tone={feedback?.tone ?? "success"}
        title={feedback?.title ?? ""}
        message={feedback?.message ?? ""}
        onClose={() => setFeedback(null)}
      />
    </section>
  );
}

function ContactInquiryForm({
  onFeedback,
}: {
  onFeedback: (feedback: Feedback) => void;
}) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = compactErrors({
      name: required(String(data.get("name") ?? ""), "Full name"),
      company: required(String(data.get("company") ?? ""), "Company"),
      email: email(String(data.get("email") ?? "")),
      phone: phone(String(data.get("phone") ?? "")),
      use: required(String(data.get("use") ?? ""), "Intended use"),
      unit: required(String(data.get("unit") ?? ""), "Unit interest"),
      message: required(String(data.get("message") ?? ""), "Message"),
    });
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      onFeedback({
        tone: "error",
        title: "Please review the form",
        message:
          "A few required fields need attention before we can send this inquiry to the leasing desk.",
      });
      return;
    }
    setPending(true);
    await simulateSubmit();
    setPending(false);
    event.currentTarget.reset();
    onFeedback({
      tone: "success",
      title: "Inquiry received",
      message:
        "A PLG leasing advisor will follow up within one business day with suite availability and a walkthrough of next steps.",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-navy/10 bg-white p-7 md:p-8"
      id="contact"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-gold-dark">
        Form A
      </p>
      <h3 className="mt-2 font-display text-3xl text-navy">
        Contact & leasing inquiry
      </h3>
      <p className="mt-2 text-sm text-muted">
        Tell us how you intend to occupy space. We’ll match suites and TI
        assumptions.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Company" name="company" error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass(errors.company)}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass(errors.email)}
          />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass(errors.phone)}
          />
        </Field>
        <Field label="Intended use" name="use" error={errors.use}>
          <select id="use" name="use" defaultValue="" className={inputClass(errors.use)}>
            <option value="" disabled>
              Select a use
            </option>
            {intendedUses.map((use) => (
              <option key={use} value={use}>
                {use}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Unit interest" name="unit" error={errors.unit}>
          <select id="unit" name="unit" defaultValue="" className={inputClass(errors.unit)}>
            <option value="" disabled>
              Select a category
            </option>
            {unitSpecs.map((unit) => (
              <option key={unit.id} value={unit.use}>
                {unit.use} · {unit.sizeRange}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Requirements" name="message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputClass(errors.message)}
              placeholder="Headcount, timing, parking, and any TI needs."
            />
          </Field>
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full" disabled={pending} size="lg">
        {pending ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}

function PriorityListForm({
  onFeedback,
}: {
  onFeedback: (feedback: Feedback) => void;
}) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = compactErrors({
      priorityName: required(String(data.get("priorityName") ?? ""), "Name"),
      priorityEmail: email(String(data.get("priorityEmail") ?? "")),
      priorityPhone: phone(String(data.get("priorityPhone") ?? ""), "Phone", true),
    });
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      onFeedback({
        tone: "error",
        title: "We need a valid name and email",
        message:
          "Join the priority list with a name and email so we can send the leasing package.",
      });
      return;
    }
    setPending(true);
    await simulateSubmit();
    setPending(false);
    event.currentTarget.reset();
    onFeedback({
      tone: "success",
      title: "You’re on the priority list",
      message:
        "The leasing package — floor plans, site plan, and current renderings — is queued. Watch your inbox for a confirmation from leasing@plg.com.",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-navy/10 bg-navy p-7 text-cream md:p-8"
      id="priority"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-gold-light">
        Form B
      </p>
      <h3 className="mt-2 font-display text-3xl">
        Join the priority leasing list
      </h3>
      <p className="mt-2 text-sm text-cream/70">
        Request the package in under a minute. Priority members tour first and
        reserve suites before general release.
      </p>
      <div className="mt-6 grid gap-4">
        <Field
          label="Name"
          name="priorityName"
          error={errors.priorityName}
          tone="light"
        >
          <input
            id="priorityName"
            name="priorityName"
            className={inputClass(errors.priorityName)}
          />
        </Field>
        <Field
          label="Email"
          name="priorityEmail"
          error={errors.priorityEmail}
          tone="light"
        >
          <input
            id="priorityEmail"
            name="priorityEmail"
            type="email"
            className={inputClass(errors.priorityEmail)}
          />
        </Field>
        <Field
          label="Phone (optional)"
          name="priorityPhone"
          error={errors.priorityPhone}
          tone="light"
        >
          <input
            id="priorityPhone"
            name="priorityPhone"
            type="tel"
            className={inputClass(errors.priorityPhone)}
          />
        </Field>
      </div>
      <Button type="submit" className="mt-6 w-full" disabled={pending} size="lg">
        {pending ? "Adding you…" : "Request package & join list"}
      </Button>
    </form>
  );
}

function ReserveUnit({
  onFeedback,
}: {
  onFeedback: (feedback: Feedback) => void;
}) {
  const [unitId, setUnitId] = useState(unitOptions[0]?.id ?? "");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const selected = unitOptions.find((unit) => unit.id === unitId) ?? unitOptions[0];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = compactErrors({
      tenant: required(String(data.get("tenant") ?? ""), "Tenant name"),
      reserveEmail: email(String(data.get("reserveEmail") ?? "")),
      terms: String(data.get("terms") ?? "") ? "" : "Please acknowledge the deposit terms.",
    });
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      onFeedback({
        tone: "error",
        title: "Reservation is not complete",
        message:
          "Add tenant details and acknowledge that the deposit is credited toward first month’s rent.",
      });
      return;
    }
    setPending(true);
    await simulateSubmit();
    setPending(false);
    event.currentTarget.reset();
    onFeedback({
      tone: "success",
      title: "Demo reservation recorded",
      message: `This is a secure-payment placeholder. ${selected?.name} would be held and ${selected?.deposit} credited to first month’s rent after a live processor is connected.`,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-gold/40 bg-white p-7 md:p-8"
      id="reserve"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.24em] text-gold-dark">
          Secure reservation portal
        </p>
        <Lock className="h-4 w-4 text-emerald" />
      </div>
      <h3 className="mt-2 font-display text-3xl text-navy">Reserve a unit</h3>
      <p className="mt-2 text-sm leading-6 text-muted">
        A reservation deposit holds your suite through lease negotiation. The
        full amount is credited toward first month’s rent at occupancy.
      </p>
      <div className="mt-6 grid gap-4">
        <Field label="Suite" name="suite">
          <select
            id="suite"
            name="suite"
            value={unitId}
            onChange={(event) => setUnitId(event.target.value)}
            className={inputClass()}
          >
            {unitOptions.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} · {unit.use} · {unit.size}
              </option>
            ))}
          </select>
        </Field>
        <div className="grid grid-cols-3 gap-3 border border-navy/10 bg-cream px-4 py-4 text-center">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.16em] text-muted">
              Deposit
            </p>
            <p className="mt-1 font-display text-xl text-navy">
              {selected?.deposit}
            </p>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.16em] text-muted">
              Occupancy
            </p>
            <p className="mt-1 font-display text-xl text-navy">
              {selected?.occupancy}
            </p>
          </div>
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.16em] text-muted">
              Size
            </p>
            <p className="mt-1 font-display text-xl text-navy">
              {selected?.size}
            </p>
          </div>
        </div>
        <Field label="Tenant / entity name" name="tenant" error={errors.tenant}>
          <input id="tenant" name="tenant" className={inputClass(errors.tenant)} />
        </Field>
        <Field label="Email" name="reserveEmail" error={errors.reserveEmail}>
          <input
            id="reserveEmail"
            name="reserveEmail"
            type="email"
            className={inputClass(errors.reserveEmail)}
          />
        </Field>
        <label className="flex items-start gap-3 text-sm leading-6 text-muted">
          <input
            type="checkbox"
            name="terms"
            value="acknowledged"
            className="mt-1 h-4 w-4 accent-emerald"
          />
          I understand the deposit is fully credited toward first month’s rent
          upon lease execution, and this button is a mock secure payment control.
        </label>
        {errors.terms ? (
          <p className="text-xs text-red-700">{errors.terms}</p>
        ) : null}
      </div>
      <Button type="submit" variant="dark" className="mt-6 w-full" disabled={pending} size="lg">
        <ShieldCheck className="h-4 w-4" />
        {pending ? "Processing…" : "Pay deposit securely"}
      </Button>
    </form>
  );
}
