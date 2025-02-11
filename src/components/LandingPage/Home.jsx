import CrimeReport from "./CrimeReport/CrimeReport";
import AskShare from "./HeroSection/AskShare";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <AskShare />
      <HeroSection />
      <CrimeReport />
      {/* <Footer /> */}
    </>
  );
}
