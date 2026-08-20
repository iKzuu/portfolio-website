import CvSectionTitle from "../CvSectionTitle";

const CvExperience = ({ experiences }) => {
  return (
    <section>
      <CvSectionTitle>
        Experience
      </CvSectionTitle>

      {experiences.map((experience) => (
        <div
          key={`${experience.company}-${experience.period}`}
          className="mt-2"
        >
          <div className="flex flex-col justify-between gap-1 sm:flex-row">
            <div>
              <p className="font-bold">
                {experience.company},{" "}
                {experience.location}
              </p>

              <p className="italic">
                {experience.position}
              </p>
            </div>

            <p className="shrink-0">
              {experience.period}
            </p>
          </div>

          <ul className="mt-1 list-disc pl-5">
            {experience.responsibilities.map(
              (responsibility) => (
                <li key={responsibility}>
                  {responsibility}
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CvExperience;