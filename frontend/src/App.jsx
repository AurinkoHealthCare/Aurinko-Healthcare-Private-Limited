import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/contact/contact";
import About from "./Pages/About us/about";
import VisionMission from "./Pages/About us/vision&mission";
import Healthsupplements from "./Pages/Human/Health-supplements";
import Nanophosphosome from './Pages/Human/Nano-biotechnology Compounds/H-Nanophosphosomes';
import Neunamin from './Pages/Human/Nano-biotechnology Compounds/H-Neunamin';
import Neunaparticles from './Pages/Human/Nano-biotechnology Compounds/H-Neunaparticles';
import Persnolcare from "./Pages/Human/Persnol care";
import Livestock from "./Pages/Veterinary/Livestock";
import Poultry from "./Pages/Veterinary/Poultry";
import Aqua from "./Pages/Veterinary/Aqua";
import Swine from "./Pages/Veterinary/Swine";
import FeedGrain from "./Pages/Veterinary/Feed & Grain";
import VNanophosphosome from './Pages/Veterinary/Nano-biotechnology Compounds/V-Nanophosphosomes';
import VNeunamin from './Pages/Veterinary/Nano-biotechnology Compounds/V-Neunamin';
import VNeunaparticles from './Pages/Veterinary/Nano-biotechnology Compounds/V-Neunaparticles';
import Ingredients from "./Pages/Media/Ingredients";
import Reports from "./Pages/Media/Report";
import Articles from "./Pages/Media/Articles";
import ManufacturingFacility from "./Pages/About us/manufacturing-facility";
import ResearchDevelopment from "./Pages/About us/ResearchDevelopment";
import Export from "./Pages/About us/Export";
import Certificates from "./Pages/About us/Certificates";
import Yeppuen from "./Pages/Human/Yeppuen";
import Pet from "./Pages/Veterinary/Pet";
import Rating from "./Pages/Media/Review & Feedback";
import ProductBrochures from "./Pages/Media/ProductBrochures";
import Blog from "./Pages/Media/Blog";
import Equines from "./Pages/Veterinary/Equines";
import Blog1 from "./Components/Blog/blog1";
import Blog2 from "./Components/Blog/blog2";
import Navbar from "../src/Layout/Navbar/Navbar";
import Gallery from './Pages/Media/Gallery';
import PhotoGallery from './Components/Gallery/PhotoGallery';
import VideoGallery from './Components/Gallery/VideoGallery';
import Footer from "./Layout/Footer/footer";
import LastLine from './Layout/Footer/lastline';
import NanoFertilizers from './Pages/Agriculture/NanoFertilizers';
import SoilMinerals from './Pages/Agriculture/SoilMinerals';

const App = () => {
  return (
    <div className="mt-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/manufacturing-facility" element={<ManufacturingFacility />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route path="/export" element={<Export />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/health-supplements" element={<Healthsupplements />} />
        <Route path="/h-nanophosphosome" element={<Nanophosphosome />} />
        <Route path="/h-neunamin" element={<Neunamin />} />
        <Route path="/h-neuna-particles" element={<Neunaparticles />} />
        <Route path="/personal-care" element={<Persnolcare />} />
        <Route path="/yeppuen" element={<Yeppuen />} />
        <Route path="/livestock" element={<Livestock />} />
        <Route path="/poultry" element={<Poultry />} />
        <Route path="/aqua" element={<Aqua />} />
        <Route path="/swine" element={<Swine />} />
        <Route path="/equine" element={<Equines />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/feed-grain" element={<FeedGrain />} />
        <Route path="/v-nanophosphosome" element={<VNanophosphosome />} />
        <Route path="/v-neunamin" element={<VNeunamin />} />
        <Route path="/v-neuna-particles" element={<VNeunaparticles />} />
        <Route path="/NanoFertilizers" element={<NanoFertilizers />} />
        <Route path="/SoilMinerals" element={<SoilMinerals />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photos" element={<PhotoGallery />} />
        <Route path="/videos" element={<VideoGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/productbrochures" element={<ProductBrochures />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <LastLine />
    </div>
  );
};

export default App;
