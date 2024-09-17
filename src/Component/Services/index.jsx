import React from "react";

function ServiceGrid() {
  const content = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714047961/static/designer-1jpeg_1714047959_29571.jpg",
      title: "Cyber Security Audit Services",
      description:
        "Thorough assessment of digital systems to identify vulnerabilities and strengthen defenses against cyber threats. Includes comprehensive analysis and recommendations for improvement.",
      greet: "Get In Touch",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048103/static/tatiana-byzova-nbe4qiyfwx8-unsplashdpnv_1714048103_15140.jpg",
      title: "Data Protection Network Security Services (VAPT)",
      description:
        "Vulnerability Assessment and Penetration Testing (VAPT) services to proactively identify weaknesses in networks and applications, followed by penetration testing to simulate cyberattacks and fortify security measures.",
      greet: "Get In Touch",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048134/static/tatiana-byzova-nbe4qiyfwx8-unsplashjspt_1714048135_74576.jpg",
      title: "Cloud Security Services",
      description:
        "Implementation of robust security measures to safeguard cloud-based infrastructure and data. Includes risk assessment, configuration management, and ongoing monitoring to ensure compliance and protection.",
      greet: "Get In Touch",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048321/static/tatiana-byzova-nbe4qiyfwx8-unsplash29ea_1714048321_58421.jpg",
      title: "Blockchain Security Solutions",
      description:
        "Tailored blockchain security solutions to ensure the integrity, confidentiality, and availability of distributed ledger systems. Focuses on securing transactions, smart contracts, and consensus mechanisms.",
      greet: "Get In Touch",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048424/static/tatiana-byzova-nbe4qiyfwx8-unsplash9saa_1714048424_42891.jpg",
      title: "Cyber Forensic",
      description:
        "Forensic investigation services to collect, analyze, and preserve digital evidence for legal proceedings or internal investigations. Utilizes advanced techniques and tools to uncover digital traces and support case resolution.",
      greet: "Get In Touch",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048704/static/tatiana-byzova-nbe4qiyfwx8-unsplash4xpa_1714048705_56032.jpg",
      title: "Cyber Investigation",
      description:
        "Thorough assessment of digital systems to identify vulnerabilities and strengthen defenses against cyber threats. Includes comprehensive analysis and recommendations for improvement.",
      greet: "Get In Touch",
    },
    {
      id: 7,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048651/static/tatiana-byzova-nbe4qiyfwx8-unsplashkjlf_1714048651_85797.jpg",
      title: "Smart Contract Development",
      description:
        "Design and implementation of smart contracts on blockchain platforms to automate and secure digital agreements. Includes coding, testing, and deployment of self-executing contracts.",
      greet: "Get In Touch",
    },
    {
      id: 8,
      img: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1714048564/static/tatiana-byzova-nbe4qiyfwx8-unsplashja4g_1714048564_40333.jpg",
      title: "Cyber Security E-Learning's",
      description:
        "Comprehensive e-learning courses on cybersecurity best practices, covering topics like data protection, network security, and incident response. Expert-led instruction and flexible modules help individuals and organizations stay ahead of evolving threats.",
      greet: "Get In Touch",
    },
  ];

  return (
    <div className="bg-[#fff8f8ff] h-[5050px] lg:h-[1500px] md:h-[2700px] sm:h-auto w-full flex items-center flex-col relative ">
      <div className="flex flex-col gap-44 relative -top-[400px]">
        <div className="flex flex-col lg:flex-row md:flex-row p-20 gap-10 relative lg:right-[65px] top-48 mt-52">
          <h1 className="text-[30px] font-jans font-bold text-start mt-0 lg:mt-12">
            "Core Service"
          </h1>
          <p className="font-jans w-52">
            Highlight core services, including Information Security, IT
            outsourcing, <br />
            and Blockchain solutions.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full px-5 mx-auto ">
          {content.map((item) => (
            <div
              className="rounded-xl max-w-[250px] h-full flex flex-col bg-white shadow-lg mx-auto relative"
              key={item.id}
            >
              <div className="img">
                <img
                  className="rounded-t-xl w-full h-[260px]"
                  src={item.img}
                  alt="Service"
                />
              </div>
              <div className="content flex flex-col gap-5 mt-3 p-3">
                <h1 className="font-jans text-xl font-bold">{item.title}</h1>
                <p className="font-jans text-[14px] md:mb-8">{item.description}</p>
                <h1 className="font-jans text-1xl font-bold md:mb-2 md:ml-4 md:absolute md:left-1 md:bottom-1">
                  {item.greet}
                </h1> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceGrid;
