import "./FooterColumn.scss";

type FooterColumnProps = {
  title: string;
  links: string[];
};

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <section className="footer-column">
      <h5 className="footer-column__title">{title}</h5>

      <nav aria-label={`${title} links`}>
        <ul className="footer-column__list">
          {links.map((link) => (
            <li className="footer-column__item" key={link}>
              <a className="footer-column__link" href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
