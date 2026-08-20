import CvSectionTitle from "../CvSectionTitle";

const CvSkills = ({
  technicalSkills,
  nonTechnicalSkills,
}) => {
  return (
    <>
      <section>
        <CvSectionTitle>
          Technical Skills
        </CvSectionTitle>

        <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
          {technicalSkills.map((skill) => (
            <div
              key={skill.label}
              className="flex gap-1"
            >
              <span>•</span>

              <p>
                <strong>
                  {skill.label}:
                </strong>{" "}
                {skill.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <CvSectionTitle>
          Non-Technical Skills
        </CvSectionTitle>

        <ul className="mt-2 grid list-disc grid-cols-1 gap-x-8 pl-5 sm:grid-cols-2">
          {nonTechnicalSkills.map(
            (skill) => (
              <li key={skill}>
                {skill}
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default CvSkills;