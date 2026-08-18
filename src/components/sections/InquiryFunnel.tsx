"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Field, inputClass } from "@/components/ui/Field";
import { FormFeedback } from "@/components/ui/FormFeedback";
import { intendedUses, unitSpecs } from "@/data/leasingData";
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
          title="Start a conversation with the leasing desk."
          description="Tell us how you intend to occupy space. We’ll match suites, TI assumptions, and send the leasing package if you join the priority list."
        />
        <ContactInquiryForm onFeedback={setFeedback} />
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
    const form = event.currentTarget;
    const data = new FormData(form);
    const joinPriority = data.get("priorityList") === "yes";
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
    form.reset();
    onFeedback({
      tone: "success",
      title: joinPriority ? "Inquiry received — you’re on the list" : "Inquiry received",
      message: joinPriority
        ? "A PLG leasing advisor will follow up within one business day, and the leasing package is queued for your inbox as a priority-list member."
        : "A PLG leasing advisor will follow up within one business day with suite availability and a walkthrough of next steps.",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto mt-12 max-w-3xl border border-navy/10 bg-white p-7 md:p-8"
      id="contact"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-gold-dark">
        Contact form
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
        <div className="sm:col-span-2" id="priority">
          <label className="flex cursor-pointer items-start gap-3 border border-navy/10 bg-cream px-4 py-4 text-sm leading-6 text-navy transition-colors hover:border-gold/50">
            <input
              type="checkbox"
              name="priorityList"
              value="yes"
              className="mt-1 h-4 w-4 shrink-0 accent-emerald"
            />
            <span>
              <span className="block font-medium">
                Join the priority leasing list
              </span>
              <span className="mt-1 block text-muted">
                Send me the leasing package and notify me first when suites are
                released for tour and reservation.
              </span>
            </span>
          </label>
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full" disabled={pending} size="lg">
        {pending ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}
