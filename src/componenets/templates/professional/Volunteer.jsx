import useVolunteerStore from "../../../stores/volunteer";
import SectionHeading from "./SectionHeading";

const Volunteer = () => {
  const { volunteers } = useVolunteerStore();

  if (!volunteers || volunteers.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Volunteer" />
      {volunteers.map((volunteer, i) => (
        <div key={i} className="mb-3">
          <div className="flex items-baseline justify-between">
            <h3 className="font-bold text-gray-900">
              {volunteer.role}
              {volunteer.organization ? `, ${volunteer.organization}` : ""}
            </h3>
            <span className="text-sm text-gray-600">
              {volunteer.startedAt} – {volunteer.endedAt}
            </span>
          </div>
          <div
            className="prose prose-sm mt-1 max-w-none pl-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{ __html: volunteer.description || "" }}
          />
        </div>
      ))}
    </section>
  );
};

export default Volunteer;