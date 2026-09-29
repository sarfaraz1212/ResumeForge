import TEMPLATES from "../../assets/templates/templates";
import useTemplateStore from "../../stores/template";
import Accordion from "../form/Accordion";
import AboutForm from "../builderOptions/AboutForm";
import SkillsForm from "../builderOptions/SkillsForm";
import ExperienceForm from "../builderOptions/ExperienceForm";
import ProjectsForm from "../builderOptions/ProjectsForm";
import EducationForm from "../builderOptions/EducationForm";
import CertificationsForm from "../builderOptions/CertificationsForm";
import LanguagesForm from "../builderOptions/LanguagesForm";
import ReferencesForm from "../builderOptions/ReferencesForm";
import VolunteerForm from "../builderOptions/VolunteerForm";
import AwardsForm from "../builderOptions/AwardsForm";

const BuilderOptions = () => {

  const { selectedTemplate } = useTemplateStore();
  const templateBlueprint    = TEMPLATES.find( (template) => template.id === selectedTemplate );

  if (!templateBlueprint) {
    return <p className="text-sm text-gray-500">Select a template to start building.</p>;
  }

  const sections = templateBlueprint.sections ?? {};

  if (Object.keys(sections).length === 0) {
    return <p className="text-sm text-gray-500">This template has no editable sections yet.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {
        "about" in sections &&
        <Accordion title="About">
          <AboutForm allowedFields={sections.about.allowedFields}/>
        </Accordion>
      }

      {
        "skills" in sections &&
        <Accordion title="Skills">
          <SkillsForm allowedSkills={sections.skills.allowedSkills}/>
        </Accordion>
      }

      {
        "experience" in sections &&
        <Accordion title="Experience">
          <ExperienceForm allowedFields={sections.experience.allowedFields}/>
        </Accordion>
      }

      {
        "projects" in sections &&
        <Accordion title="Projects">
          <ProjectsForm allowedFields={sections.projects.allowedFields}/>
        </Accordion>
      }

      {
        "education" in sections &&
        <Accordion title="Education">
          <EducationForm allowedFields={sections.education.allowedFields}/>
        </Accordion>
      }

      {
        "certifications" in sections &&
        <Accordion title="Certifications">
          <CertificationsForm allowedFields={sections.certifications.allowedFields}/>
        </Accordion>
      }

      {
        "languages" in sections &&
        <Accordion title="Languages">
          <LanguagesForm allowedFields={sections.languages.allowedFields}/>
        </Accordion>
      }

      {
        "references" in sections &&
        <Accordion title="References">
          <ReferencesForm allowedFields={sections.references.allowedFields}/>
        </Accordion>
      }

      {
        "volunteer" in sections &&
        <Accordion title="Volunteer">
          <VolunteerForm allowedFields={sections.volunteer.allowedFields}/>
        </Accordion>
      }

      {
        "awards" in sections &&
        <Accordion title="Awards">
          <AwardsForm allowedFields={sections.awards.allowedFields}/>
        </Accordion>
      }
    </div>
  )
}

export default BuilderOptions