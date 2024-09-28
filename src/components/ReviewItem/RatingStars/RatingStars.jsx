import { useMemo } from "react";
import css from "./RatingStars.module.css";
import clsx from "clsx";

const RatingStars = ({ rating }) => {
  const parsedRating = useMemo(() => Number.parseInt(rating), [rating]);

  const OrangeStars = useMemo(
    () => new Array(parsedRating).fill("orange"),
    [parsedRating]
  );

  const GrayStars = useMemo(
    () => new Array(5 - parsedRating).fill("gray"),
    [parsedRating]
  );

  const StarsArray = useMemo(
    () => [...OrangeStars, ...GrayStars],
    [OrangeStars, GrayStars]
  );

  return (
    <ul className={css.flex}>
      {StarsArray.map((star, index) => {
        return (
          <svg
            key={index}
            className={clsx(css.icon, star === "gray" && css.gray)}
          >
            <use
              href={`/sprite.svg#${
                star === "orange" ? "icon-star" : "icon-star-gray"
              }`}
            />
          </svg>
        );
      })}
    </ul>
  );
};

export default RatingStars;
