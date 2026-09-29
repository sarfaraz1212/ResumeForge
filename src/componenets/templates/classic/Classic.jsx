import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import useAboutStore from "../../../stores/about"
import useSkillsStore from "../../../stores/skills"
import useExperienceStore from "../../../stores/experience"
import useEducationStore from "../../../stores/education"
import useLanguagesStore from "../../../stores/languages"
import useReferencesStore from "../../../stores/references"
import useVolunteerStore from "../../../stores/volunteer"
import useAwardsStore from "../../../stores/awards"

const ACCENT = "#1a1a1a"

/* ----------------------------- atoms ----------------------------- */

const SectionHeading = ({ title }) => (
  <h2
    className="mb-2 mt-5 border-b-2 pb-1 text-xs font-bold uppercase tracking-[0.12em]"
    style={{ color: ACCENT, borderColor: ACCENT }}
  >
    {title}
  </h2>
)

const ContactItem = ({ icon, text }) => (
  <span className="flex items-center gap-1">
    {icon}
    {text}
  </span>
)

/* ---------------------------- sections ---------------------------- */

const Header = () => {
  const { name, title, email, phone, location, url } = useAboutStore()

  return (
    <header
      className="border-b-2 pb-3 text-center"
      style={{ borderColor: ACCENT }}
    >
      <h1 className="text-3xl font-bold tracking-wide" style={{ color: ACCENT }}>
        {name}
      </h1>
      <p className="mt-1 text-xs uppercase tracking-[0.08em] text-gray-500">
        {title}
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-gray-600">
        {phone && <ContactItem icon={<PhoneIcon sx={{ fontSize: 13 }} />} text={phone} />}
        {email && <ContactItem icon={<EmailIcon sx={{ fontSize: 13 }} />} text={email} />}
        {location && <ContactItem icon={<PlaceIcon sx={{ fontSize: 13 }} />} text={location} />}
        {url && <ContactItem icon={<LanguageIcon sx={{ fontSize: 13 }} />} text={url} />}
      </div>
    </header>
  )
}

const Summary = () => {
  const { description } = useAboutStore()
  if (!description) return null
  return (
    <section>
      <SectionHeading title="Profile" />
      <p className="text-gray-700">{description}</p>
    </section>
  )
}

const Skills = () => {
  const store = useSkillsStore()
  const keys = ["languages", "frameworks", "libraries", "apis", "databases", "realtime", "versionControl"]
  const skills = keys.flatMap((key) => store[key] ?? [])

  if (skills.length === 0) return null

  return (
    <section>
      <SectionHeading title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full border px-2.5 py-0.5 text-xs text-gray-700"
            style={{ borderColor: "#d1d5db" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

const Experience = () => {
  const { experiences } = useExperienceStore()
  if (!experiences || experiences.length === 0) return null

  return (
    <section>
      <SectionHeading title="Experience" />
      {experiences.map((job, index) => (
        <div key={index} className="mb-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold text-gray-900">
              {job.title}
              {job.company ? `, ${job.company}` : ""}
            </h3>
            <span className="text-[11px] text-gray-500">
              {job.startedAt} – {job.endedAt}
            </span>
          </div>
          <div
            className="mt-1 text-gray-700 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: job.description || "" }}
          />
        </div>
      ))}
    </section>
  )
}

const Education = () => {
  const { educations } = useEducationStore()
  if (!educations || educations.length === 0) return null

  return (
    <section>
      <SectionHeading title="Education" />
      {educations.map((edu, index) => (
        <div key={index} className="mb-2">
          <div className="font-semibold text-gray-900">{edu.degree}</div>
          <div className="text-[11px] text-gray-500">
            {edu.school}
            {edu.school && (edu.startedAt || edu.endedAt) ? " · " : ""}
            {edu.startedAt} – {edu.endedAt}
          </div>
        </div>
      ))}
    </section>
  )
}

const Languages = () => {
  const { languages } = useLanguagesStore()
  if (!languages || languages.length === 0) return null
  return (
    <section>
      <SectionHeading title="Languages" />
      <ul className="list-disc space-y-1 pl-6">
        {languages.map((language, index) => (
          <li key={index}>
            {language.name}
            {language.level && (
              <span className="text-gray-600"> — {language.level}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

const References = () => {
  const { references } = useReferencesStore()
  if (!references || references.length === 0) return null
  return (
    <section>
      <SectionHeading title="References" />
      <ul className="list-disc space-y-1 pl-6">
        {references.map((reference, index) => (
          <li key={index}>
            {reference.name}
            {reference.role && (
              <span className="text-gray-600"> — {reference.role}</span>
            )}
            {reference.phone && (
              <span className="text-gray-600"> · {reference.phone}</span>
            )}
            {reference.email && (
              <span className="text-gray-600"> · {reference.email}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

const Volunteer = () => {
  const { volunteers } = useVolunteerStore()
  if (!volunteers || volunteers.length === 0) return null
  return (
    <section>
      <SectionHeading title="Volunteer" />
      {volunteers.map((volunteer, index) => (
        <div key={index} className="mb-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold text-gray-900">
              {volunteer.role}
              {volunteer.organization ? `, ${volunteer.organization}` : ""}
            </h3>
            <span className="text-[11px] text-gray-500">
              {volunteer.startedAt} – {volunteer.endedAt}
            </span>
          </div>
          <div
            className="mt-1 text-gray-700 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: volunteer.description || "" }}
          />
        </div>
      ))}
    </section>
  )
}

const Awards = () => {
  const { awards } = useAwardsStore()
  if (!awards || awards.length === 0) return null
  return (
    <section>
      <SectionHeading title="Awards" />
      <ul className="list-disc space-y-1 pl-6">
        {awards.map((award, index) => (
          <li key={index}>
            {award.title}
            {award.awarder && (
              <span className="text-gray-600"> — {award.awarder}</span>
            )}
            {award.date && (
              <span className="text-gray-600"> · {award.date}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ---------------------------- template ---------------------------- */

const Classic = () => {
  return (
    <div className="mx-auto w-full max-w-[800px] bg-white px-12 py-10 text-[13px] leading-relaxed text-gray-800 shadow-md">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <References />
      <Volunteer />
      <Awards />
    </div>
  )
}

export default Classic