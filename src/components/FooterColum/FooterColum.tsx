import "./FooterColum.scss";
type FooterColumProps = {
  title:string,
  links:string[],
}
export default function FooterColumn({
  title,links
}:FooterColumProps) {

  return (
    <article className="footer-column">
      <h5>{title}</h5>
      <nav className="footer-column__list">
        {links.map((item,index) =>(
          <li className="footer-column__link" key={index}><a href="#">{item}</a></li>
        ))}
      </nav>
 
    </article>
  );
}