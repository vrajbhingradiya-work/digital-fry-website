import About from "@/components/About";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LatestWorks from "@/components/LatestWorks";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="px-8 py-0 flex flex-col gap-4">
      <Navbar />
      <Profile />
      <Clients />
      <About />
      <Services />
      <LatestWorks />
      <ContactUs />
      <Footer />
    </div>
  );
}
