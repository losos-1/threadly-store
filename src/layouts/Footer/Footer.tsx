import { Link } from "react-router-dom";

import FooterForm from "@/components/FooterForm";
import FooterColumn from "@/components/FooterColumn";

import bank1 from "@/assets/images/footer/bank1.svg";
import bank2 from "@/assets/images/footer/bank2.svg";
import bank3 from "@/assets/images/footer/bank3.svg";
import bank4 from "@/assets/images/footer/bank4.svg";
import bank5 from "@/assets/images/footer/bank5.svg";

import twitter from "@/assets/icons/social/Twetr.svg";
import facebook from "@/assets/icons/social/FaceBook.svg";
import instagram from "@/assets/icons/social/Instagram.svg";
import github from "@/assets/icons/social/github.svg";

import "./Footer.scss";

type FooterColumnData = {
  title: string;
  links: string[];
};

const bankImages = [bank1, bank2, bank3, bank4, bank5];

const socialLinks = [
  { name: "Twitter", icon: twitter },
  { name: "Facebook", icon: facebook },
  { name: "Instagram", icon: instagram },
  { name: "GitHub", icon: github },
];

const footerColumns: FooterColumnData[] = [
  {
    title: "COMPANY",
    links: ["About", "Works", "Features", "Career"],
  },
  {
    title: "HELP",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "RESOURCES",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "YouTube Playlist",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__form wrapper">
        <FooterForm />
      </div>

      <div className="footer__inner wrapper">
        <div className="footer__top">
          <div className="footer__description">
            <Link to="/" className="footer__logo">
              SHOP.CO
            </Link>

            <p className="footer__description-text">
              We have clothes that suit your style and that you are proud
              to wear. From women to men.
            </p>

            <div className="footer__social">
              {socialLinks.map(({ name, icon }) => (
                <a
                  href="#"
                  className="footer__application"
                  aria-label={name}
                  key={name}
                >
                  <img src={icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__grid">
            {footerColumns.map((column) => (
              <FooterColumn
                title={column.title}
                links={column.links}
                key={column.title}
              />
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <strong>Shop.co © 2000-2023, All Rights Reserved</strong>

          <div className="footer__bank" aria-label="Payment methods">
            {bankImages.map((image) => (
              <img src={image} alt="Payment method" key={image} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
