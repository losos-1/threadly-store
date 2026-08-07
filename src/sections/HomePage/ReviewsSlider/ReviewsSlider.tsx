import { useState } from "react";

import arrow from "@/assets/icons/arrow-long.svg";
import FeedbackCard from "@/components/FeedbackCard";

import { reviews } from "./db";
import "./ReviewsSlider.scss";

const VISIBLE_REVIEWS_COUNT = 5;

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextReview = () => {
    if (reviews.length === 0) {
      return;
    }

    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % reviews.length;
    });
  };

  const showPreviousReview = () => {
    if (reviews.length === 0) {
      return;
    }

    setCurrentIndex((previousIndex) => {
      return (
        (previousIndex - 1 + reviews.length) %
        reviews.length
      );
    });
  };

  const visibleReviews =
    reviews.length === 0
      ? []
      : Array.from(
          { length: VISIBLE_REVIEWS_COUNT },
          (_, index) => {
            const reviewIndex =
              (currentIndex + index) % reviews.length;

            return reviews[reviewIndex];
          },
        );

  return (
    <section className="reviews">
      <div className="reviews__header wrapper">
        <h2 className="reviews__title">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="reviews__switch-buttons">
          <button
            className="reviews__switch reviews__switch--previous"
            type="button"
            aria-label="Show previous review"
            onClick={showPreviousReview}
            disabled={reviews.length <= 1}
          >
            <img src={arrow} alt="" />
          </button>

          <button
            className="reviews__switch reviews__switch--next"
            type="button"
            aria-label="Show next review"
            onClick={showNextReview}
            disabled={reviews.length <= 1}
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <div className="reviews__viewport wrapper">
        <div className="reviews__content">
          {visibleReviews.map((review, index) => {
            const isEdgeCard =
              index === 0 ||
              index === VISIBLE_REVIEWS_COUNT - 1;

            const itemClassName = isEdgeCard
              ? "reviews__item reviews__item--edge"
              : "reviews__item";

            return (
              <div
                className={itemClassName}
                key={`${review.id}-${index}`}
              >
                <FeedbackCard
                  name={review.name}
                  text={review.text}
                  rating={review.rating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}