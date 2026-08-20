import CvSectionTitle from "../CvSectionTitle";

const CvLanguages = ({ languages }) => {
  return (
    <section>
      <CvSectionTitle>
        Languages
      </CvSectionTitle>

      <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
        {languages.map((item) => (
          <div
            key={item.language}
            className="flex gap-1"
          >
            <span>•</span>

            <p>
              <strong>
                {item.language}:
              </strong>{" "}
              {item.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvLanguages;