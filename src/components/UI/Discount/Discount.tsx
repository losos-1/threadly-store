import classNames from "classnames";

import "./Discount.scss";

type DiscountProps = {
  className?: string;
  title: number;
};

export default function Discount({
  className,
  title,
}: DiscountProps) {
  return (
    <span className={classNames("discount", className)}>
      -{title}%
    </span>
  );
}
