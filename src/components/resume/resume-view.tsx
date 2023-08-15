import { Resume, Location } from "../../interfaces/resume";
import { Avatar } from "./avatar";
import { Card } from "./card";
import background from '../../assets/cover.jpg';
import { gravatar } from "../../utils/gravatar";
import { AtSymbolIcon, BriefcaseIcon, MapPinIcon, CalendarIcon, AcademicCapIcon, LinkIcon, PhoneIcon } from '@heroicons/react/24/solid';
import classNames from "classnames";
import { ReactNode } from "react";
import moment from "moment";


function IconText(props: { icon?: ReactNode, text: string | ReactNode, className?: string }) {
  return (
    <div className={classNames("flex text-gray-400 items-center justify-items-center text-sm", props.className)}>
      {props.icon}
      <span className="ml-1">{props.text}</span>
    </div>
  );
}

function workDate(date?: string) {
  return date ? moment(date).format('MMM YYYY') : 'Current';
}

function address(loc: Location) {
  return `${loc.address ? loc.address + ", " : ""}${loc.city ? loc.city + ", " : ""}${loc.countryCode ?? ""
    }${loc.postalCode ?? `-${loc.postalCode}`}`;
}

const buttonClasses = classNames(
  'text-white',
  'bg-blue-700',
  'hover:bg-blue-800',
  'focus:ring-4',
  'focus:ring-blue-300',
  'font-medium',
  'rounded-lg',
  'text-sm',
  'px-5',
  'py-2.5',
  'mr-2',
  'mb-2',
  'dark:bg-blue-600',
  'dark:hover:bg-blue-700',
  'focus:outline-none',
  'dark:focus:ring-blue-800',
  'pointer'
);

const iconSize = '.8rem';

export function ResumeView(props: Resume) {
  return (
    <section className="grid gap-5 lg:grid-col-3 font-sans antialiased text-gray-900 leading-normal tracking-wider">
      <div className="space-y-5">
        <Card classNames="print-no-show">
          <div className="h-32 bg-cover print-no-show" style={{ backgroundImage: `url(${background})` }} />
          <div className="pt-24 p-8 relative">
            {<Avatar image={props.basics.image ?? gravatar(props.basics.email, 120)} size={120} style={{ top: -60 }} className="absolute rounded-xl" />}
            <div className="text-3xl font-semibold mb-1 dark:text-white">{props.basics.name}</div>
            {props.basics.label && <div className="text-sm text-gray-400 mb-5">{props.basics.label}</div>}
            <a type="button" href={`mailto:${props.basics.email}`} className={classNames(buttonClasses, 'print-no-show')}>Get in touch</a>
          </div>
        </Card>
        <div className="screen-no-show ml-4">
          <div className="text-5xl font-semibold mb-1 dark:text-white">{props.basics.name}</div>
          {props.basics.label && <div className="text-xl text-gray-400 mt-2 ml-2">{props.basics.label}</div>}
        </div>

        <Card title="About me">
          <p className="text-base mb-2">{props.basics.summary}</p>
          <div className="flex flex-row mt-4">
            <IconText icon={<AtSymbolIcon width={iconSize} />} text={<a href={`mailto:${props.basics.email}`} className="text-blue-500">{props.basics.email}</a>} />
            <IconText className="ml-3" icon={<PhoneIcon width={iconSize} />} text={<a href={`tel:${props.basics.phone.replace(' ', '')}`} className="text-blue-500">{props.basics.phone}</a>} />
            {props.basics.location && <IconText className="ml-3" icon={<MapPinIcon width={iconSize} />} text={address(props.basics.location)} />}
          </div>
        </Card>

        {props.skills && <Card title="Skills">
          {props.skills?.map((skill, index) => <section className="m-3" key={index}>
            <h2 className="text-lg font-semibold mb-1 dark:text-white">{skill.name} <span className="text-gray-500 leading-6 text-sm dark:text-gray-100">({skill.level})</span></h2>
            <section>
              {skill.keywords?.map((keyword) => <span className="mr-2 mb-2 center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-400 py-2 px-3.5 align-baseline text-xs leading-none text-white dark:bg-slate-700">{keyword}</span>)}
            </section>
          </section>)}
        </Card>}

        <Card title="Work Experience">
          {props.work
            .map(
              (work, index) => (<div className={classNames({ 'mb-4': index === props.work.length - 1 }, 'flex flex-row align-start mt-5')}>
                {work.logo && <Avatar size={64} image={work.logo} className="mr-4 p-3 border-solid border border-slate-100 rounded" />}
                <div className="w-full">
                  <header className="flex flex-row justify-between w-full">
                    <div className="w-full mb-1">
                      <div className="flex flex-row justify-between">
                        <h3 className="text-medium">{work.position}</h3>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full text-sm">
                        <div className="flex flex-row items-center">
                          <IconText text={work.name} icon={<BriefcaseIcon width={iconSize} />} />
                          {work.location && <IconText text={work.location!} icon={<MapPinIcon width={iconSize} />} className="ml-3" />}
                        </div>
                        <div className="flex flex-row items-center">
                          <IconText text={workDate(work.startDate)} icon={<CalendarIcon width={iconSize} />} /> - <IconText text={workDate(work.endDate)} />
                        </div>
                      </div>
                    </div>
                  </header>
                  <ul className="text-sm text-gray-800 list-style-disc ml-4 mt-1 leading-6 dark:text-gray-100">
                    {work.highlights?.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              </div>)
            )}
        </Card>

        <Card title="Education">
          {props.education.map((edu, i) => (
            <div className={classNames({ 'mb-4': i === props.education.length - 1 }, 'flex flex-row align-start mt-5')}>
              {edu.logo && <Avatar size={64} image={edu.logo} className="mr-4 p-3 border-solid border border-slate-100 rounded" />}
              <header key={i} className="flex flex-row justify-between w-full">
                <div className="w-full mb-1">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-medium">{edu.studyType} - {edu.area}</h3>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full text-sm">
                    <div className="flex flex-row items-center">
                      <IconText text={<a href={edu.url}>{edu.institution}</a>} icon={<AcademicCapIcon width={iconSize} />} />
                    </div>
                    {
                      edu.startDate && <div className="flex flex-row items-center">
                        <IconText text={workDate(edu.startDate)} icon={<CalendarIcon width={iconSize} />} /> - <IconText text={workDate(edu.endDate)} />
                      </div>
                    }
                  </div>
                  {edu.courses && <div className="text-gray-800 leading-6 text-sm dark:text-gray-100">
                    <span className="font-bold">Courses: </span>
                    {edu.courses?.join(', ')}
                  </div>}

                </div>
              </header>
            </div>))}
        </Card>

        {props.certificates && <Card title="Certifications">
          {props.certificates?.map((cert, i) => (
            <div className={classNames({ 'mb-4': i === props.education.length - 1 }, 'flex flex-row align-start mt-5')}>
              {cert.logo && <Avatar size={64} image={cert.logo} className="mr-4 p-3 border-solid border border-slate-100 rounded" />}
              <header key={i} className="flex flex-row justify-between w-full">
                <div className="w-full mb-1">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-medium">{cert.name}</h3>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full text-sm">
                    <div className="flex flex-row items-center">
                      <IconText text={<a href={cert.url}>{cert.issuer}</a>} icon={<AcademicCapIcon width={iconSize} />} />
                    </div>
                    {
                      cert.date && <div className="flex flex-row items-center">
                        <IconText text={workDate(cert.date)} icon={<CalendarIcon width={iconSize} />} />
                      </div>
                    }
                  </div>
                  {cert.url && <IconText icon={<LinkIcon width={iconSize} />} text={<a href={cert.url}>{cert.url}</a>} />}
                </div>
              </header>
            </div>))}
        </Card>}

        {props.projects && <Card title="Projects">
          {props.projects.map((project, i) => <header key={i} className="flex flex-row justify-between w-full">
            <div className="w-full mb-3 mt-1">
              <div className="flex flex-row justify-between">
                <h3 className="text-medium">{project.name}</h3>
                <IconText text={workDate(project.startDate)} icon={<CalendarIcon width={iconSize} />} />
              </div>
              <p className="text-sm text-gray-400">{project.summary}</p>
              <ul className="text-sm text-gray-800 list-style-disc ml-4 mt-1 leading-6 dark:text-gray-100">
                {project.highlights?.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </header>)}
        </Card>}

        {props.languages && <Card title="Languages">
          {props.languages.map((lang) => <section className="w-full mt-4">
            <h3 className="text-medium">{lang.language}</h3>
            <p className="text-sm text-gray-400">{lang.fluency}</p>
          </section>)}
        </Card>}
      </div>
      <div className="m-5"></div>
    </section>
  );
}
