import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        Welcome to my Portfolio.
      </SectionTitle>
      <SectionText>
        “Trying to impress trillion-dollar companies with my projects”
      </SectionText>
      <Button onClick={()=> window.location = '#about' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;