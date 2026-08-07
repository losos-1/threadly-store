import { Link } from "react-router-dom";

import DressStyleCard from "@/components/DressStyleCard";
import bg1 from "@/assets/images/DressStyle/bg1.png";
import bg2 from "@/assets/images/DressStyle/bg2.png";
import bg3 from "@/assets/images/DressStyle/bg3.png";
import bg4 from "@/assets/images/DressStyle/bg4.png";

import "./DressStyle.scss";

type DressStyleItem = {
  title: string;
  value: string;
  imgSrc: string;
};

const dressStyles: DressStyleItem[] = [
  { title: "Casual", value: "casual", imgSrc: bg1 },
  { title: "Formal", value: "formal", imgSrc: bg2 },
  { title: "Party", value: "party", imgSrc: bg3 },
  { title: "Gym", value: "gym", imgSrc: bg4 },
];

export default function DressStyle() {
  return (
    <section className="dress-style wrapper">
      <h2 className="dress-style__title">BROWSE BY DRESS STYLE</h2>

      <div className="dress-style__content">
        {dressStyles.map(({ title, value, imgSrc }) => (
          <Link
            key={value}
            to={`/catalog?style=${value}`}
            className="dress-style__item"
          >
            <DressStyleCard title={title} imgSrc={imgSrc} />
          </Link>
        ))}
      </div>
    </section>
  );
}
