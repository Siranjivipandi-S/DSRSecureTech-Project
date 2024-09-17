import WhatWeDo from "./WhatWeDo";
import CertificateCard from "./CertificateCard";
import AdditionalInfo from "./AdditionalInfo";
import Course from "./CourseContent";

function ELearning() {
  return (
    <div className="flex flex-col items-center justify-center">
      <WhatWeDo />
      <CertificateCard />
      <Course />
      <AdditionalInfo />
    </div>
  );
}

export default ELearning;
