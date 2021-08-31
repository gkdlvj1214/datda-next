import { Box } from "@material-ui/core";
import FifthSection from "./components/fifth-section/FifthSection";
import FirstSection from "./components/first-section/FirstSection";
import FourthSection from "./components/fourth-section/FourthSection";
import IntroductionSection from "./components/introduction-section/IntroductionSection";
import SecondSection from "./components/second-section/SecondSection";
import SixthSection from "./components/sixth-section/SixthSection";
import ThirdSection from "./components/third-section/ThirdSection";

export default function Intro() {
  return (
    <Box>
      <IntroductionSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </Box>
  );
}
