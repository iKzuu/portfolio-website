import CvSectionTitle from "../CvSectionTitle";

const CvEducation = ({ education }) => {
  return (
    <section>
      <CvSectionTitle>
        Education
      </CvSectionTitle>

      <div className="mt-2 space-y-2">
        {education.map((item) => (
          <div key={item.institution}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <p className="font-bold">
                {item.institution}
              </p>

              <p className="shrink-0">
                {item.period}
              </p>
            </div>

            <p className="italic">
              {item.major}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvEducation;