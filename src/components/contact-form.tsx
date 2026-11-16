"use client";

import { useState, type FormEvent } from "react";
import type { PortfolioCopy } from "@/data/portfolio-locales";

export function ContactForm({ copy }: { copy: PortfolioCopy }) {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!String(data.get("name")).trim() || !String(data.get("message")).trim()) {
      setFeedback(copy.requiredFeedback);
      return;
    }

    form.reset();
    setFeedback(copy.submittedFeedback);
  }

  return (
    <form className="contact-form" method="post" onSubmit={handleSubmit}>
      <div className="contact-pitch">
        <p className="line-label">{copy.contact}</p>
        <h2 id="contact-title">
          {copy.haveProject}
          <br />
          {copy.letsTalk}
        </h2>
      </div>

      <div className="contact-fields">
        <label className="contact-field">
          <span>{copy.name}</span>
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label className="contact-field">
          <span>{copy.email}</span>
          <input
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
        <label className="contact-field">
          <span>{copy.message}</span>
          <textarea name="message" rows={2} maxLength={2000} required />
        </label>
      </div>

      <div className="contact-action">
        <button type="submit" className="button button-primary">{copy.submit}</button>
        <p className="form-status" role="status">{feedback}</p>
      </div>
    </form>
  );
}
