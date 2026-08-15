import type { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import "./Button.scss";
import { Link } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant?: "primary" | "outline";
  size?: "small" | "default" | "average" | "wide";
  toCatalogy?:boolean
};

export default function Button({
  className,
  title,
  variant = "primary",
  size = "default",
  type = "button",
  toCatalogy = false,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "button",
        `button--${variant}`,
        `button--${size}`,
        className,
      )}
      type={type}
      {...buttonProps}
    >
      {toCatalogy &&(
        <Link
          to={'/catalog?category=t-shirts'}
        >
          {title}
        </Link>
      )}
      {!toCatalogy &&(
        title
      )}
    </button>
  );
}
