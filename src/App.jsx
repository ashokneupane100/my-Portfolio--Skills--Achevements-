import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CssMain from './pages/css/CssMain';
import CssOne from './pages/css/CssOne';
import HtmlMain from "./pages/baseHtml/HtmlMain"
import CssGrid from './pages/css/CssGrid';
import CssThree from './pages/css/CssThree';
import CssFour from './pages/css/CssFour';
import CssFive from './pages/css/CssFive';
import HeartAnimation from './pages/javascript/HeartAnimation';
import JavaScriptMain from './pages/javascript/JavaScriptMain';
import DistrictHeadquarters from './pages/javascript/DistrictHeadquarters';
import CalenderClock from './pages/javascript/CalenderClock';
import RandomImage4 from './pages/javascript/RandomImage4';
import RippleButton5 from './pages/javascript/RippleButton5';
import DarkMode6 from './pages/javascript/DarkMode6';
import Temperature7 from './pages/javascript/Temperature7';

// Extracted Routes Component
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/css" element={<CssMain />} />
    <Route path="/cssone" element={<CssOne />} />
    <Route path="/html" element={<HtmlMain />} />
    <Route path="/csstwo" element={<CssGrid />} />
    <Route path="/cssthree" element={<CssThree />} />
    <Route path="/cssfour" element={<CssFour />} />
    <Route path="/cssfive" element={<CssFive />} />
    <Route path="/jstwo" element={<HeartAnimation />} />
    <Route path="/javascript" element={<JavaScriptMain />} />
    <Route path="/jsone" element={<DistrictHeadquarters />} />
    <Route path="/jsthree" element={<CalenderClock />} />
    <Route path="/jsfour" element={<RandomImage4 />} />
    <Route path="/jsfive" element={<RippleButton5 />} />
    <Route path="/jssix" element={<DarkMode6 />} />
    <Route path="/jsseven" element={<Temperature7 />} />
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Added padding-top to avoid overlap */}
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;