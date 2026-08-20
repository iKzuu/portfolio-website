import { cvData } from "@/data/cv";

import CvSectionTitle from "./CvSectionTitle";

import CvExperience from "./sections/CvExperience";
import CvEducation from "./sections/CvEducation";
import CvAchievements from "./sections/CvAchievements";
import CvCertifications from "./sections/CvCertifications";
import CvSkills from "./sections/CvSkills";
import CvLanguages from "./sections/CvLanguages";

const CvDocument = () => {
  return (
    <article
      className="
        mx-auto
        w-full
        max-w-198.5
        bg-white
        px-6
        py-8
        font-sans
        text-[11px]
        leading-[1.35]
        text-black
        shadow-xl
        sm:px-10
        sm:py-10
      "
    >
      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold">
          {cvData.name}
        </h1>

        <div className="mt-1 flex flex-wrap gap-x-1">
          <span>
            {cvData.contact.phone}
          </span>

          <span>|</span>

          <a
            href={`mailto:${cvData.contact.email}`}
            className="hover:underline"
          >
            {cvData.contact.email}
          </a>

          <span>|</span>

          <a
            href={`https://${cvData.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {cvData.contact.website}
          </a>
        </div>

        <p>
          {cvData.contact.location}
        </p>
      </header>

      {/* Profile */}
      <section>
        <CvSectionTitle>
          Profile
        </CvSectionTitle>

        <p className="mt-2 text-justify">
          {cvData.profile}
        </p>
      </section>

      <CvExperience
        experiences={cvData.experience}
      />

      <CvEducation
        education={cvData.education}
      />

      <CvAchievements
        achievements={cvData.achievements}
      />

      <CvCertifications
        certificates={cvData.certificates}
      />

      <CvSkills
        technicalSkills={
          cvData.technicalSkills
        }
        nonTechnicalSkills={
          cvData.nonTechnicalSkills
        }
      />

      <CvLanguages
        languages={cvData.languages}
      />
    </article>
  );
};

export default CvDocument;