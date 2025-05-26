
const Block1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center py-6 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="w-full md:w-1/2 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center md:text-left mb-4 md:mb-6 text-gray-800 relative">
          Welcome to Aurinko Healthcare
          <span className="absolute top-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 mt-2 w-20 sm:w-24 h-1 bg-orange-600"></span>
        </h1>
        <p className="text-gray-700 text-justify mb-3 md:mb-4 leading-relaxed text-sm sm:text-base">
          Aurinko Healthcare is an innovation-driven pharmaceutical company incorporated on 21st November 2014, 
          received WHO-GMP, FSSAI, HACCP, ISO 9001-2015, and ISO 22000-2018 certifications for quality and robust 
          management systems.
        </p>
        <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
          Aurinko Healthcare is a member of elite business regulatory bodies of India such as the Federation of 
          Indian Chamber of Commerce and Industry, Federation of Indian Export Organizations, Pharmaceutical 
          Export Promotion Council, PHD Chamber of Commerce, and Spice Board of India.
        </p>
      </div>

      <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[35rem] shadow-lg rounded-xl overflow-hidden">
        <img
          src="/Assets/Aurinko Home.jpeg"
          alt="Aurinko Healthcare"
          className="w-full h-full object-cover rounded-xl shadow-md"
           />
      </div>
    </div>
  );
};

export default Block1;
