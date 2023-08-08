import classNames from "classnames";
import { BasicInfo, Location } from "../../interfaces/resume";
import { isEmpty } from "lodash";
import { Avatar } from "./avatar";

export function IconLink(props: { text: string; icon: string; href?: string }) {
  return (
    <a href={props.href}>
      <span className={classNames({ icon: true, [props.icon]: true })}></span>
      {props.text}
    </a>
  );
}

function address(loc: Location) {
  return `${loc.address + ", " ?? ""}${loc.city + ", " ?? ""}${
    loc.countryCode ?? ""
  }${loc.postalCode ?? `-${loc.postalCode}`}`;
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
        <section className="contact_information">
          <IconLink href={`tel:${props.phone}`} icon="" text={props.phone} />
          <IconLink href={`tel:${props.email}`} icon="" text={props.email} />
          {props.url && <IconLink href={props.url} text={props.url} icon="" />}
          {props.location && (
            <IconLink href="#" text={address(props.location)} icon="" />
          )}
        </section>
        <section className="contact_profiles">
          {props.profiles.map((p) => (
            <IconLink href={p.url} icon={p.network} text={p.username} />
          ))}
        </section>
      </article>

      {props.image ?? <Avatar image={props.image} size={160} />}
    </header>
  );
}
