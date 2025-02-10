import CrimeReport from "./CrimeReport/CrimeReport";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CrimeReport />
      {/* <Footer /> */}
    </>
  );
}
