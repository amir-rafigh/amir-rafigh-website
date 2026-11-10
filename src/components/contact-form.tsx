"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!String(data.get("name")).trim() || !String(data.get("message")).trim()) {
      setFeedback("Enter your name and a message.");
      return;
    }

    form.reset();
    setFeedback("Demo submitted. This form is for preview only.");
  }

  return (
    <form className="contact-form" method="post" onSubmit={handleSubmit}>
      <div className="contact-pitch">
        <p className="line-label">Contacts</p>
        <h2 id="contact-title">
          Have a project?
          <br />
          Let’s talk!
        </h2>
      </div>

      <div className="contact-fields">
        <label className="contact-field">
          <span>Name</span>
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
        <label className="contact-field">
          <span>Message</span>
          <textarea name="message" rows={2} maxLength={2000} required />
        </label>
      </div>

      <div className="contact-action">
        <button type="submit" className="button button-primary">Submit</button>
        <p className="form-status" role="status">{feedback}</p>
      </div>
    </form>
  );
}
