import CvSectionTitle from "../CvSectionTitle";

const CvAchievements = ({ achievements }) => {
  return (
    <section>
      <CvSectionTitle>
        Achievements
      </CvSectionTitle>

      <div className="mt-2 space-y-2">
        {achievements.map((achievement) => (
          <div key={achievement.title}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <p className="font-bold">
                {achievement.title}
              </p>

              <p className="shrink-0">
                {achievement.date}
              </p>
            </div>

            <p className="italic">
              {achievement.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvAchievements;