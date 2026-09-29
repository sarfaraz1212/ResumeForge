import useReferencesStore from "../../../stores/references";
import SectionHeading from "./SectionHeading";

const References = () => {
  const { references } = useReferencesStore();

  if (!references || references.length === 0) return null;

  return (
    <section>
      <SectionHeading title="References" />
      <ul className="list-disc space-y-1 pl-6">
        {references.map((reference, i) => (
          <li key={i}>
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
  );
};

export default References;