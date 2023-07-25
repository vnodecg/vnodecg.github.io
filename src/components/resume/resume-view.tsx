import { Resume } from "../../interfaces/resume";
import { Header } from "./basic-info";

export function ResumeView(props: Resume) {
  return (
    <section className="flex flex-column">
      <Header {...props.basics} />
    </section>
  );
}
