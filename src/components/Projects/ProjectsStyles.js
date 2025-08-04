import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(44, 83, 100, 0.25);
  text-align: center;
  width: 360px;
  max-width: 100%;
  background: linear-gradient(135deg, #232526 0%, #20243a 60%, #2c5364 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s;
  font-size: 2rem;
  color: #e4e6e7;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(44, 83, 100, 0.35);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;   /* Full width on mobile */
    min-width: 0;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2.2rem' : '1.6rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2rem;
  color: #e4e6e7;
  font-size: 1.5rem; /* Larger text */
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0 1.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.5rem;
  padding: 0.7rem 1.5rem;
  background: rgba(125, 60, 152, 0.85); /* Deep purple with lower opacity */
  border-radius: 12px;
  transition: background 0.3s, color 0.3s, transform 0.2s;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(108, 52, 131, 0.18);
  border: none;
  display: inline-block;
  &:hover {
    background: rgba(84, 153, 199, 0.85); /* Muted blue with lower opacity */
    color: #fff;
    transform: translateY(-3px) scale(1.04);
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  padding: 1rem 0 0.5rem 0;
  margin: 0;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1rem;
  background: #222;
  border-radius: 8px;
  padding: 0.3rem 0.8rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;