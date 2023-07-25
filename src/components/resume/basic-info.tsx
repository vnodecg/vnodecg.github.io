import { BasicInfo } from "../../interfaces/resume";
import { isEmpty } from "lodash";

export function IconLink(text: string, icon: string, href = "") {
  return <div></div>;
}

export function Header(props: BasicInfo) {
  return (
    <header className="header">
      <article className="header_container">
        <section className="basic_summary_container">
          <h2 className="">{props.name}</h2>
          {props.label && <h3 className="">{props.label}</h3>}
          {props.summary && <p>{props.summary}</p>}
        </section>
        {!isEmpty(props.image) && (
          <img src={props.image} className="" alt={props.name} />
        )}
      </article>
      <div className="contact_information"></div>
    </header>
  );
}
