import data from "./content.json";
const Course = () => {
  return (
    <section className="course p-32 px-4 md:px-8 bg-[#E9F3FF] mt-10">
      <div className="course_content max-w-7xl mx-auto">
        <div className="inner_container">
          <div className="header gap-2 text-black text-center mb-8">
            <p className="head text-lg text-[#385173] font-semibold">
              <u>Course Content</u>
            </p>
            <p className="title text-3xl md:text-4xl font-bold">
              Certified Penetration Testing Expert (CPTE)
            </p>
          </div>
          <div className="card_section grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="init_card flex items-center justify-between gap-8 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="rounded_section lg:h-20 lg:w-20 md:h-16 md:w-16 shadow-md rounded-full bg-white flex justify-center items-center">
                  <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                </div>
                <div className="side_section w-[80%]">
                  <p className="headline mb-2 text-xl text-[#182433] font-semibold">
                    {item.headline}
                  </p>
                  <p className="padding1 mb-2 text-gray-600">{item.padding1}</p>
                  <p className="padding2 text-gray-500">{item.padding2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="butn flex justify-center item-center mt-8">
          <button className="course px-12 py-4 rounded-full  bg-[#182433]">
            <p className="font-semibold text-white">Join Course</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course;
