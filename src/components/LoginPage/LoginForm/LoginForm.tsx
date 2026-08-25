import { Link } from 'react-router-dom'
import './LoginForm.scss'

export default function LoginForm(){
    return(
    <form className="registration-form">
        <div className="registration-form__description">
            <h3>Sign in</h3>
            <p>Enter your email and password to sign in!</p>
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

        <button
            className="registration-form__submit"
            type="submit"
        >
            Sign in
        </button>

        <div className="registration-form__link-to-sign-in">
            <span>Not registered yet? </span>

            <Link to="/register">
                Create an Account
            </Link>
        </div>
    </form>
    )
}