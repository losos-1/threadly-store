import type { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import "./Button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant?: "primary" | "outline";
  size?: "default" | "average" | "wide";
};

export default function Button({
  className,
  title,
  variant = "primary",
  size = "default",
  type = "button",
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
      {title}
    </button>
  );
}
