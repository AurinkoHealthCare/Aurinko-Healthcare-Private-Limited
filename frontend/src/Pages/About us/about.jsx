
const Paragraph = ({ children }) => (
  <p className="text-sm md:text-base lg:text-lg p-3 md:p-4 text-zinc-800">{children}</p>
);

const About = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <img
          src="/Assets/banner/About us.webp"
          alt="About Us"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl relative text-center mb-6">
            About Us
          </h1>
        </div>
      </div>
      <div className="px-10 py-8 md:px-14 lg:px-20">
        <section className="mt-6">
          <Paragraph> 
            Aurinko Healthcare is an innovation-driven pharmaceutical company incorporated on 21st November 2014,
            received Startup recognition and certification from the Department of Industrial Policy and Promotion, Govt. of India.
            Aurinko Healthcare is a WHO-GMP, FSSAI, APEDA, and HACCP-certified company with ISO 9001-2015 and ISO 22000-2018 certifications
            received for robust management systems.
          </Paragraph>
          <Paragraph>
            Promoters of this organization are well-qualified pharmaceutical and financial business professionals having
            illustrious recognition in the areas of strategic marketing, branding, innovation, formulation development,
            and business finance with over 28 years of rich domain experience.
          </Paragraph>
          <Paragraph>
            Aurinko Healthcare is a member of elite business regulatory bodies of India, i.e., Federation of Indian Chamber
            of Commerce and Industry, Federation of Indian Export Organizations, Pharmaceutical Export Promotion Council,
            PHD Chamber of Commerce, Indian Drug Manufacturers’ Association, and Spice Board of India.
          </Paragraph>
          <Paragraph>
            The company specializes in the human healthcare segment and evolves the concept of “Organic Therapy” by using advanced
            research in nanotechnology, bioenhancers, and phytochemical molecules to develop path-breaking technology in osteoarthritis,
            cancer, dengue, and chikungunya supportive therapy, mosquito repellents and killers, etc. A major breakthrough has been achieved
            with Nanophosphosome, a novel technology to multiply the power of traditional herbal phytochemicals. Several innovative health
            supplements have been invented based on Nanophosphosome technology.
          </Paragraph>
          <Paragraph>
            The company aims towards total health solutions by delivering values with quality herbs, spices, essential oils, fresh and sun-dried
            fruits and vegetables as consumables to its elite customers.
          </Paragraph>
          <Paragraph>
            In line with global research, Aurinko Healthcare is developing new concepts and solutions in preventive nutrition and biotechnology
            segments to prevent and control economically important animal diseases and conditions, such as mastitis, metritis, anoestrus,
            and repeat breeding. They are working towards a “disease-free farming” concept. Essential oils, phytochemicals, probiotics, and
            high-value nutrition are the latest instruments in disease prevention for animals. This also helps develop technology for an
            “antibiotic-free farming” concept in dairy, poultry, and swine segments.
          </Paragraph>
          <Paragraph>
            Aurinko Healthcare is well-equipped with research, formulation development, quality control, and quality assurance systems to develop
            specialized and technologically advanced nutritional and organic concepts through in-house and contract research and partnerships with
            leading research institutes. These innovative concepts benefit human health and wellness along with the dairy, poultry, swine, pet, and
            aqua industries by improving health, performance, and cost concerns. The company has filed for trademarks and patents and has been
            awarded more than 30 trademarks and copyrights for its product portfolio.
          </Paragraph>
          <Paragraph>
            Aurinko Healthcare also delivers value to consumers, professionals, and farmers beyond India by exporting its quality products to South
            and Southeast Asia, SAARC, Gulf, Middle East, and African regions.
          </Paragraph>
        </section>
      </div>
    </div>
  );
};

export default About;
