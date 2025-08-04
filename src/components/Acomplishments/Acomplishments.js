import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, ListTitle, ListItem, ListContainer, BulletedList } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Projects'},
  { number: 2500, text: 'Hours of coding', },
  { number: 3, text: 'Years frontend experience', },
  { number: 3, text: 'Years working experience', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

    <ListItem>
      <ListContainer>
      <ListTitle>Certifications</ListTitle>
        <BulletedList>
          <li>AWS Cloud Practitioner</li>
          <li>PSM I</li>
          <li>PSM II</li>
        </BulletedList>
      </ListContainer>
    </ListItem>
  </Section>
);

export default Acomplishments;
