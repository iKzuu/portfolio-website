import { ExternalLink } from "lucide-react";

import CvSectionTitle from "../CvSectionTitle";

const CvCertifications = ({
  certificates,
}) => {
  return (
    <section>
      <CvSectionTitle>
        Certifications
      </CvSectionTitle>

      <div className="mt-2 space-y-2">
        {certificates.map((certificate) => (
          <div key={certificate.title}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <a
                href={certificate.issuerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1 font-bold hover:text-blue-700 hover:underline"
              >
                {certificate.issuer}

                <ExternalLink size={10} />
              </a>

              <p className="shrink-0">
                {certificate.date}
              </p>
            </div>

            <p className="italic">
              {certificate.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvCertifications;