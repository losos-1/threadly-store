import classNames from "classnames";
import "./DressStyleCard.scss";

type DressStyleCardProps = {
  title: string;
  imgSrc: string;
  className?: string;
};

export default function DressStyleCard({
  title,
  imgSrc,
  className,
}: DressStyleCardProps) {
  return (
    <article
      className={classNames(
        "dress-style-card",
        className
      )}
    >
      <img
        src={imgSrc}
        alt={`${title} style`}
        className="dress-style-card__img"
      />

      <h3 className="dress-style-card__title">
        {title}
      </h3>
    </article>
  );
}