import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BulletedList, LeetCodeLink, List, ListContainer, ListItem, ListTitle } from './LearningPathStyles';

const LearningPath = () =>  (
      <Section>
        <SectionDivider />
        <SectionTitle>What I'm Reading & Practicing</SectionTitle>
        <SectionText>
        I regularly read articles and books about software architecture, design patterns, and best practices. Some of my interested topics include:
        </SectionText>
        <List>
            <ListItem>
                <ListContainer>
                <ListTitle>Reading</ListTitle>
                <BulletedList>
                    <li>Design Patterns</li>
                    <li>System Design & Scalability</li>
                    <li>Datastructures and Algorithms</li>
                </BulletedList>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Practicing</ListTitle>
                    <SectionText>
                    I also enjoy solving coding challenges on{' '}
                    <LeetCodeLink
                        href="https://leetcode.com/u/Abdoelmalik/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LeetCode
                    </LeetCodeLink>
                    {' '}to improve my problem-solving skills. I've solved over <b>16</b> problems and continue to learn new algorithms and data structures every week/month.
                    </SectionText>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default LearningPath;
