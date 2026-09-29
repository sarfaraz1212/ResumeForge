import Header from "./Header";
import Summary from "./Summary";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Languages from "./Languages";
import References from "./References";
import Volunteer from "./Volunteer";

const Professional = () => {
  return (
    <div className="professional-resume mx-auto w-full max-w-[800px] bg-white px-12 py-10 text-[13px] leading-relaxed text-gray-800 shadow-md">
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Languages />
      <References />
      <Volunteer />
    </div>
  );
};

export default Professional;
