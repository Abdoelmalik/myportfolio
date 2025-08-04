import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, BulletedList } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
       I've worked with a range of technologies in the web development world. From Front-End to Back-End, Cloud/DevOps, and UI/UX.
     </SectionText>
     <List>
       <ListItem>
         <DiReact size="3rem"/>
         <ListContainer>
           <ListTitle>Front-end</ListTitle>
           <BulletedList>
             <li>TypeScript, JavaScript</li>
             <li>HTML, CSS</li>
             <li>React.js, Next.js</li>
           </BulletedList>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiFirebase size="3rem"/>
         <ListContainer>
           <ListTitle>Back-end</ListTitle>
           <BulletedList>
             <li>Node.js</li>
             <li>MongoDB, PostgreSQL</li>
             <li>Python</li>
           </BulletedList>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiFirebase size="3rem"/>
         <ListContainer>
           <ListTitle>Cloud/DevOps</ListTitle>
           <BulletedList>
             <li>AWS</li>
             <li>Terraform</li>
             <li>Bash</li>
           </BulletedList>
         </ListContainer>
       </ListItem>
       <ListItem>
         <DiZend size="3rem"/>
         <ListContainer>
           <ListTitle>UI/UX</ListTitle>
           <BulletedList>
             <li>Figma</li>
             <li>Adobe XD</li>
           </BulletedList>
         </ListContainer>
       </ListItem>
     </List>
 </Section>
);

export default Technologies;
