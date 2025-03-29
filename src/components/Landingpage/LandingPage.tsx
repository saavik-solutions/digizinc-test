import HeroSection from "../HeroSection/HeroSection";
import Empower from "../HeroSection/Empower";
import StateSection from "../HeroSection/StateSection";
import ServicesSection from "../ServiceSection/ServicesSection";
import ContactSection from "../ContactSection/ContactSection";
import LogoSection from "../ServiceSection/LogoSection";
import ContactGrid from "../ContactSection/Contactgrid";
import FooterSection from "../FooterSection/FooterSection";
import MessageButton from "../Message/MessageButton";
const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <Empower/>
      <StateSection />
      <ServicesSection />
      <LogoSection/>
      <ContactSection />
      <ContactGrid/>
      <MessageButton/>
      <FooterSection/>
    </div>
  );
};
export default LandingPage;

