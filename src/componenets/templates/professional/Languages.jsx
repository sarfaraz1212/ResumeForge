import useLanguagesStore from "../../../stores/languages";
import SectionHeading from "./SectionHeading";

const Languages = () => {
  const { languages } = useLanguagesStore();

  if (!languages || languages.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Languages" />
      <ul className="list-disc space-y-1 pl-6">
        {languages.map((language, i) => (
          <li key={i}>
            {language.name}
            {language.level && (
              <span className="text-gray-600"> — {language.level}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;