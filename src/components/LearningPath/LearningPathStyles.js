import styled from "styled-components"

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensures it takes up full width */

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`

export const ListItem = styled.li`
  width: 100%; /* Make sure the item takes full width */
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    width: 100%;
    flex-direction: row;
  }
`

export const BulletedList = styled.ul`
  list-style-type: disc !important;
  list-style-position: inside !important;
  margin: 0 0 0 1.5em;
  padding: 0;
  color: rgba(255,255,255,0.75);
  font-size: 18px;
  line-height: 30px;
  display: block !important;

  & > li {
    display: list-item !important;
    list-style-type: disc !important;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const LeetCodeLink = styled.a`
  color: #13ADC7;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover {
    color: #945DD6;
    text-decoration: underline;
  }
`;