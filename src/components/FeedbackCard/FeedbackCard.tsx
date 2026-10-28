import verified from "@/assets/icons/verified.svg";

import "./FeedbackCard.scss";

type FeedbackCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function FeedbackCard({
  name,
  text,
  rating,
}: FeedbackCardProps) {
  return (
    <article className="review-card">
      <div
        className="review-card__rating"
        aria-label={`Rating ${rating} out of 5`}
      >
        {Array.from({ length: 5 }, (_, index) => {
          const starNumber = index + 1;

          return (
            <span
              key={starNumber}
              className={
                starNumber <= rating
                  ? "review-card__star review-card__star--active"
                  : "review-card__star"
              }
              aria-hidden="true"
            >
              ★
            </span>
          );
        })}
      </div>

      <div className="review-card__username">
        <h4 className="review-card__name">{name}</h4>
        <img src={verified} alt="Verified customer" />
      </div>

      <p className="review-card__text">“{text}”</p>
    </article>
  );
}
