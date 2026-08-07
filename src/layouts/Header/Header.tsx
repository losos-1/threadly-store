import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

import arrowIcon from "@/assets/icons/arrow.svg";
import searchIcon from "@/assets/icons/header/search.svg";
import profileIcon from "@/assets/icons/header/profile.svg";
import shopIcon from "@/assets/icons/header/shop.svg";

import "./Header.scss";

type NavigationLink = {
  title: string;
  to: string;
};

const headerLinks: NavigationLink[] = [
  { title: "On Sale", to: "/catalog" },
  { title: "New Arrivals", to: "/catalog" },
  { title: "Brands", to: "/catalog" },
];

const dropLinks: NavigationLink[] = [
  { title: "T-shirts", to: "/catalog?category=t-shirts" },
  { title: "Shorts", to: "/catalog?category=shorts" },
  { title: "Shirts", to: "/catalog?category=shirts" },
  { title: "Hoodie", to: "/catalog?category=hoodie" },
  { title: "Jeans", to: "/catalog?category=jeans" },
];

export default function Header() {
  const [isDropActive, setIsDropActive] = useState(false);
  const dropRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(event.target as Node)
      ) {
        setIsDropActive(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__inner wrapper">
        <Link to="/" className="header__logo">
          SHOP.CO
        </Link>

        <nav className="header__menu" aria-label="Main navigation">
          <ul className="header__list">
            <li className="header__item" ref={dropRef}>
              <button
                className={classNames("header__drop-button", {
                  "header__drop-button--active": isDropActive,
                })}
                type="button"
                aria-expanded={isDropActive}
                aria-controls="shop-dropdown"
                onClick={() => setIsDropActive((value) => !value)}
              >
                Shop
                <img
                  className={classNames("header__arrow", {
                    "header__arrow--active": isDropActive,
                  })}
                  src={arrowIcon}
                  alt=""
                  aria-hidden="true"
                />
              </button>

              {isDropActive && (
                <ul className="header__drop-menu" id="shop-dropdown">
                  {dropLinks.map(({ title, to }) => (
                    <li key={title}>
                      <NavLink
                        to={to}
                        className="header__drop-link"
                        onClick={() => setIsDropActive(false)}
                      >
                        {title}
                        <img src={arrowIcon} alt="" aria-hidden="true" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {headerLinks.map(({ title, to }) => (
              <li className="header__item" key={title}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    classNames("header__nav-link", {
                      "header__nav-link--active": isActive,
                    })
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <label className="header__search">
          <img src={searchIcon} alt="" aria-hidden="true" />
          <span className="visually-hidden">Search for products</span>
          <input
            type="search"
            name="search"
            placeholder="Search for products..."
          />
        </label>

        <div className="header__account">
          <NavLink
            className="header__account-link"
            to="/cart"
            aria-label="Go to cart"
          >
            <img src={shopIcon} alt="" aria-hidden="true" />
          </NavLink>

          <NavLink
            className="header__account-link"
            to="/profile"
            aria-label="Go to profile"
          >
            <img src={profileIcon} alt="" aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
