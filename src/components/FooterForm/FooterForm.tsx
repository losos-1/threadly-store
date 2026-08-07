import type { FormEvent } from "react";

import "./FooterForm.scss";

export default function FooterForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <div className="footer-form">
      <h2 className="footer-form__title">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <form className="footer-form__fields" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="newsletter-email">
          Email address
        </label>

        <input
          id="newsletter-email"
          className="footer-form__control footer-form__input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="✉ Enter your email address"
          required
        />

        <button
          className="footer-form__control footer-form__button"
          type="submit"
        >
          Subscribe to Newsletter
        </button>
      </form>
    </div>
  );
}
