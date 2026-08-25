import './RegistrationForm.scss'
import arrow from '@/assets/icons/arrow.svg'
import { Link } from 'react-router-dom'

export default function RegistrationForm() {
  return (
    <form className="registration-form">
        <div className="registration-form__description">
            <h3>Registration</h3>
            <p>Enter your information to register!</p>
        </div>
        

        <label htmlFor="name">
            Name

            <input
            id="name"
            name="name"
            type="text"
            className="registration-form__input"
            minLength={4}
            maxLength={15}
            required
            placeholder="Enter your name"
            />
        </label>

        <label htmlFor="phone">
            Phone

            <input
            id="phone"
            name="phone"
            type="tel"
            className="registration-form__input"
            required
            placeholder="Enter your phone number"
            />
        </label>

        <label htmlFor="password">
            Create password

            <input
            id="password"
            name="password"
            type="password"
            className="registration-form__input"
            minLength={6}
            maxLength={15}
            required
            placeholder="Create password"
            />
        </label>

        <label htmlFor="confirmPassword">
            Confirm password

            <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="registration-form__input"
            minLength={6}
            maxLength={15}
            required
            placeholder="Enter password again"
            />
        </label>

        <button
            className="registration-form__submit"
            type="submit"
        >
            Registration
        </button>

        <div className="registration-form__link-to-sign-in">
            <span>Already have an account? </span>

            <Link to="/login">
            Sign in
            </Link>
        </div>
    </form>
  )
}