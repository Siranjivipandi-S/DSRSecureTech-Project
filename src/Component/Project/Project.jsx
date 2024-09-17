import { Fade, Slide } from "react-awesome-reveal";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import opm from '../../assets/opm.png';
const Project = () => {
  return (
    <div className="container1 ">
      <section className="frontpage p-4">
        <Fade>
          <div className="container2 p-4 flex flex-col-reverse md:flex-row items-center gap-8 w-[90%] h-auto m-auto">
            <Slide direction="up" triggerOnce distance="40px" duration={800}>
              <div className="sub2 text-left w-full p-4 md:p-12">
                <h1 className="text-6xl mb-4">
                  <strong>Project Marketplace</strong>
                </h1>
                <div className="sub3 text-2xl">
                  <p className="mb-4">
                    Platform for browsing and purchasing projects developed by
                    our company.
                  </p>
                  <p className="mb-4">
                    Detailed descriptions, features, and pricing for each
                    project.
                  </p>
                </div>
                <button className="btn mt-4 p-4 bg-[#034E94] rounded-md text-white font-semibold text-1xl">
                  Get Started Now
                </button>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce distance="40px" duration={800}>
              <img
                src={opm}
                className="w-full md:w-[80%] h-auto md:ml-12"
                alt="loading..."
              />
            </Slide>
          </div>
        </Fade>
      </section>
      <Fade>
        <Slide direction="up" triggerOnce>
          <section className="w-full section3 p-20 bg-black">
            <div className="w-full md:w-[50%] mb-8 text-white">
              <span className="text-3xl font-bold text-left my-4 block">
                Empowering Developers: Submit Your Projects and Explore
                Freelancing Opportunities
              </span>
              <p className="text-2xl text-left">
                Discover Freelance Projects: Showcase your work and find
                opportunities tailored to your skills. Connect with clients and
                talented professionals on our platform.
              </p>
            </div>

            <Fade>
              <Slide triggerOnce>
                <div className="flex flex-col md:flex-row gap-6 ">
                  <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img
                      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={c1}
                      alt="Card Image 1"
                    />
                    <div className="flex flex-col justify-start p-6">
                      <p className="text-1xl text-left text-neutral-500 dark:text-neutral-300">
                        March 30 , 2023
                      </p>
                      <h5 className="mb-2 text-xl text-left font-medium text-neutral-800 dark:text-neutral-50">
                        Submit Your Projects
                      </h5>
                      <p className="mb-4 text-base text-left text-neutral-600 dark:text-neutral-200">
                        Submit Your Projects: Showcase Your Work and Unlock
                        Freelancing Opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img
                      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={c2}
                      alt="Card Image 2"
                    />
                    <div className="flex flex-col justify-start p-6">
                      <p className="text-1xl text-left text-neutral-500 dark:text-neutral-300">
                        March 30 , 2023
                      </p>
                      <h5 className="mb-2 text-left text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        Discover Freelance Projects
                      </h5>
                      <p className="mb-4 text-left text-base text-neutral-600 dark:text-neutral-200">
                        Discover Freelance Projects: Showcase Your Work, Connect
                        with Clients, and Find Opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </Fade>
          </section>
        </Slide>
      </Fade>

      <section className="container mx-auto p-10 md:py-12 lg:px-8">
        <Fade>
          <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-4 items-stretch">
            <Slide direction="up" triggerOnce distance="10px" duration={800}>
              <section className="p-5 py-10 bg-[#034E94] rounded-md text-center text-white transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-between min-h-[400px]">
                <img
                  src={car1}
                  alt="Marketplace"
                  className="w-[60%] mx-auto h-auto object-cover"
                />
                <h1 className="text-3xl my-5">Marketplace</h1>
                <p className="mb-5">
                  Platform for browsing and purchasing projects developed by our
                  company.
                </p>
              </section>
            </Slide>

            <Slide direction="up" triggerOnce distance="10px" duration={800}>
              <section className="p-5 py-10 bg-[#8BC6FD] rounded-md text-[#034E94] text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-between min-h-[400px]">
                <img
                  src={car2}
                  alt="Book a Project"
                  className="w-[60%] mx-auto h-auto object-cover"
                />
                <h1 className="text-3xl my-5">Book a Project</h1>
                <p className="mb-5">
                  Detailed descriptions, features, and pricing for each project.
                </p>
              </section>
            </Slide>

            <Slide direction="up" triggerOnce distance="10px" duration={800}>
              <section className="p-5 py-10 bg-[#034E94] rounded-md text-white text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-between min-h-[400px]">
                <img
                  src={car3}
                  alt="Upload"
                  className="w-[60%] mx-auto h-auto object-cover"
                />
                <h1 className="text-3xl my-5">Upload</h1>
                <p className="mb-5">
                  Submission pathway for project evaluation and certification.
                </p>
              </section>
            </Slide>

            <Slide direction="up" triggerOnce distance="10px" duration={800}>
              <section className="p-5 py-10 bg-[#8BC6FD] rounded-md text-[#034E94] text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-between min-h-[400px]">
                <img
                  src={car4}
                  alt="Download"
                  className="w-[60%] mx-auto h-auto object-cover"
                />
                <h1 className="text-3xl my-5">Download</h1>
                <p className="mb-5">
                  Ability to download project materials upon purchase.
                </p>
              </section>
            </Slide>

            <Slide direction="up" triggerOnce distance="10px" duration={800}>
              <section className="p-5 py-10 bg-[#034E94] rounded-md text-white text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-between min-h-[400px]">
                <img
                  src={car5}
                  alt="Certificate"
                  className="w-[60%] mx-auto h-auto object-cover"
                />
                <h1 className="text-3xl my-5">CERTIFICATE</h1>
                <p className="mb-5">
                  Submission pathway for project evaluation and certification.
                </p>
              </section>
            </Slide>
          </div>
        </Fade>
        <div className="flex justify-center gap-16 py-16 items-center w-[100%]">
          <button className="p-4 rounded-full bg-[#034E94] text-white font-bold">
            EMAIL US NOW
          </button>
          <button className="p-4 rounded-full bg-white  outline outline-2 outline-[#034E94] font-bold">
            CALL US NOW
          </button>
        </div>
      </section>

      <section className="section4 my-4 lg:p-8">
        <Fade>
          <Slide triggerOnce direction="up">
            <div className='mx-auto w-[100%] text-center'>
            <p className="text-5xl font-bold mx-auto py-20">Happiness & Mindfulness</p>
            </div>
            <div className="flex justify-center flex-wrap gap-6">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center p-10">
                  <span className="w-20 h-20 bg-[#f5a623ff] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#ffff"
                    >
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                  </span>
                  <h5 className="mb-2 mt-2 text-6xl font-bold text-gray-900 dark:text-white">
                    1.2K+
                  </h5>
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    PROJECT FINISHED
                  </span>
                  <div className="flex mt-4 md:mt-6"></div>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center p-10">
                  <span className="w-20 h-20 bg-[#2c4d06ff] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#ffff"
                    >
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                  </span>
                  <h5 className="mb-2 mt-2 text-6xl font-bold text-gray-900 dark:text-white">
                    1023
                  </h5>
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    HAPPY CLIENTS
                  </span>
                  <div className="flex mt-4 md:mt-6"></div>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center p-10">
                  <span className="w-20 h-20 bg-[#f5a623ff] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#fff"
                    >
                      <path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" />
                    </svg>
                  </span>
                  <h5 className="mb-2 mt-2 text-6xl font-bold text-gray-900 dark:text-white">
                    729
                  </h5>
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    COFFEE CUPS
                  </span>
                  <div className="flex mt-4 md:mt-6"></div>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center p-10">
                  <span className="w-20 h-20 bg-[#2c4d06ff] rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#fff"
                    >
                      <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                    </svg>
                  </span>
                  <h5 className="mb-2 mt-2 text-6xl font-bold text-gray-900 dark:text-white">
                    925
                  </h5>
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    WORKING HOURS
                  </span>
                  <div className="flex mt-4 md:mt-6"></div>
                </div>
              </div>
            </div>
          </Slide>
        </Fade>
      </section>
    </div>
  );
};
export default Project;
