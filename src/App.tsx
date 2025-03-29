import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage/LandingPage";
import Careers from "./components/Career/Careers";
import Contactus from "./components/Contact/Contactus";
import Thankyou from "./components/Contact/Thankyou";
import Aboutus from "./components/Aboutus/Aboutus";
import Form from "./components/Career/Form";
import CaseStudy from "./components/Works/Casestudy";
import Services from "./components/Services/Services";
import PackageForm from "./components/Services/packageform";
import Blogpage from "./components/Blog/blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/form" element={<Form />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/services" element={<Services/>} /> 
        <Route path="/packageform" element={<PackageForm />} />
        <Route path="/blog" element={<Blogpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
