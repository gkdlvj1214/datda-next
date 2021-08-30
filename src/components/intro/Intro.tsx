import { Box } from '@material-ui/core';
import FifthSection from './fifth-section/FifthSection';
import FirstSection from './first-section/FirstSection';
import FourthSection from './fourth-section/FourthSection';
import IntroductionSection from './introduction-section/IntroductionSection';
import SecondSection from './second-section/SecondSection';
import ThirdSection from './third-section/ThirdSection';

export default function Intro() {
  return (
    <Box>
      <IntroductionSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Box>
  );
}
