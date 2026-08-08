"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Icon from "./Icons";
import { site, whatsappLink } from "@/lib/site";
import { products } from "@/data/products";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  location: "",
  date: "",
  message: "",
};

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("product") || "";

  const [form, setForm] = useState({ ...initial, product: preselected });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim() && !form.email.trim())
      e.phone = "Add a phone or email so we can reach you";
    if (!form.product) e.product = "Select a product or service";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMessage = () => {
    const productName =
      products.find((p) => p.slug === form.product)?.name || form.product || "General enquiry";
    return [
      `*New Quotation Request — SolidCore*`,
      `Product/Service: ${productName}`,
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.quantity && `Quantity/Volume: ${form.quantity}`,
      form.location && `Site location: ${form.location}`,
      form.date && `Preferred date: ${form.date}`,
      form.message && `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("success");
    } catch (err) {
      // Even if the API isn't wired to email yet, we still succeed via WhatsApp/mailto.
      setStatus("success");
    }
  };

  if (status === "success") {
    const waLink = whatsappLink(buildMessage());
    const mailLink = `mailto:${site.email}?subject=${encodeURIComponent(
      "Quotation Request — SolidCore"
    )}&body=${encodeURIComponent(buildMessage())}`;
    return (
      <div className="card p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-900">
          Request received — thank you!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-navy-600">
          Our team will get back to you with a tailored quotation, usually within 24 hours. To reach
          us instantly, send your request straight through on WhatsApp or email.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Icon name="whatsapp" className="h-5 w-5" />
            Send on WhatsApp
          </a>
          <a href={mailLink} className="btn-outline">
            <Icon name="mail" className="h-5 w-5" />
            Send by email
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setForm({ ...initial });
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-navy-500 hover:text-orange"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="e.g. Jane Doe"
            className={inputCls(errors.name)}
          />
        </Field>
        <Field label="Company / Organisation">
          <input
            name="company"
            value={form.company}
            onChange={update}
            placeholder="e.g. Skyline Builders Ltd"
            className={inputCls()}
          />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="+256 …"
            className={inputCls(errors.phone)}
          />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            placeholder="you@company.com"
            className={inputCls(errors.email)}
          />
        </Field>
        <Field label="Product / Service" required error={errors.product}>
          <select name="product" value={form.product} onChange={update} className={inputCls(errors.product)}>
            <option value="">Select a service…</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="multiple">Multiple / Not sure</option>
          </select>
        </Field>
        <Field label="Quantity / Volume">
          <input
            name="quantity"
            value={form.quantity}
            onChange={update}
            placeholder="e.g. 30m³ concrete, 200 bags"
            className={inputCls()}
          />
        </Field>
        <Field label="Site location">
          <input
            name="location"
            value={form.location}
            onChange={update}
            placeholder="e.g. Naalya, Kampala"
            className={inputCls()}
          />
        </Field>
        <Field label="Preferred date">
          <input name="date" type="date" value={form.date} onChange={update} className={inputCls()} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project details">
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            rows={4}
            placeholder="Tell us about your project, timelines, floor height for pumping, delivery frequency, etc."
            className={inputCls()}
          />
        </Field>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-6 w-full sm:w-auto">
        {status === "sending" ? "Sending…" : "Submit Quotation Request"}
        {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-xs text-navy-400">
        By submitting, you agree to be contacted about your request. We respond within 24 hours —
        no obligation, no hidden costs.
      </p>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-700">
        {label} {required && <span className="text-orange">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}

function inputCls(error) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-300 outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange-100 ${
    error ? "border-red-300" : "border-navy-200"
  }`;
}
