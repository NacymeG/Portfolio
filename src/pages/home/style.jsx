import styled from 'styled-components';
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline';
import { LinkedinOutline } from '@styled-icons/evaicons-outline/LinkedinOutline';
import { TwitterOutline } from '@styled-icons/evaicons-outline/TwitterOutline';
import { Instagram } from '@styled-icons/entypo-social/Instagram';
import { Gear } from '@styled-icons/octicons/Gear';
import { ArrowUpCircle } from '@styled-icons/bootstrap/ArrowUpCircle';

const Arrow = styled(ArrowUpCircle)`
  position: fixed;
  bottom: 20px;
  right: 5%;
  width: 42px;
  margin: 10px;
  :hover {
    color: var(--color--green);
  }
`;

const Github = styled(GithubOutline)`
  width: 26px;
  margin: 10px;
  :hover {
    color: var(--color--green);
  }
`;

const GearLogo = styled(Gear)`
  width: 26px;
  margin: 10px 10px 20px 10px;
  :hover {
    color: var(--color--green);
  }
`;

const InstagramLogo = styled(Instagram)`
  width: 26px;
  margin: 10px;
  :hover {
    color: var(--color--green);
  }
`;

const Twitter = styled(TwitterOutline)`
  width: 26px;
  margin: 10px;
  :hover {
    color: var(--color--green);
  }
`;

const Linkedin = styled(LinkedinOutline)`
  width: 26px;
  margin: 10px;
  :hover {
    color: var(--color--green);
  }
`;

const Container = styled.div`
  height: 100vh;
  padding: 100px 0;
`;

const Landing = styled.div`
  margin-bottom: 150px;
  padding: 100px 22% 0 15%;
  p {
    letter-spacing: 5px;
    margin: 0;
    color: var(--color--green);
  }
  h1 {
    font-size: 75px;
    line-height: 88px;
    letter-spacing: normal;
    color: var(--color--textWhite);
  }
  h2 {
    font-size: 50px;
    line-height: 80px;
    letter-spacing: normal;
    color: var(--color--textGrey);
  }
  h3 {
    padding: 0 50% 0 0;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: normal;
    color: var(--color--textGrey);
  }
`;

const About = styled.div`
  margin: 0 20% 200px 20%;
  padding: 200px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    font-size: 18px;
  }

  h1 {
    font-size: 24px;
    color: var(--color--textWhite);
    margin-bottom: 20px;
  }

  p {
    padding: 0 150px 0 0;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
  }

  img {
    width: 250px;
  }

  .imageContainer {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 8px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  .aboutContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  ul {
    li {
      font-family: 'Fira Mono', monospace;
      padding: 10px;
    }

    list-style-type: none;
    padding: 20px 250px 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Project = styled.div`
  padding: 25px 5% 0 14%;

  span {
    font-size: 18px;
  }
  h1 {
    font-size: 24px;
    color: var(--color--textWhite);
    margin-bottom: 50px;
  }
  .projectContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Other = styled.div`
  margin-top: 100px;
  h1 {
    text-align: center;
    font-size: 24px;
    color: var(--color--textWhite);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 15%;
`;

const Mail = styled.div`
  position: fixed;
  right: 20px;
  bottom: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
  span {
    font-family: 'Fira Mono', monospace;
    color: var(--color--textWhite);
    :hover {
      color: var(--color--green);
    }
  }
`;

const Contact = styled.div`
  padding: 300px;
  text-align: center;
  margin-top: 100px;
  span {
  }
  h1 {
    text-align: center;
    font-size: 60px;
    padding: 20px;
    color: var(--color--textWhite);
  }
  p {
    font-size: 20px;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
  span {
    color: var(--color--textWhite);
    :hover {
      color: var(--color--green);
    }
  }
`;

const Button = styled.button`
  all: unset;
  border-radius: 5px;
  color: var(--color--green);
  padding: 10px;
  margin: 20px;
  border: 2px solid var(--color--green);
  :hover {
    background-color: var(--color--green);
  }
`;

export {
  Container,
  Landing,
  About,
  Project,
  Other,
  CardContainer,
  Contact,
  Mail,
  Social,
  Button,
  Github,
  Linkedin,
  Twitter,
  InstagramLogo,
  GearLogo,
  Arrow,
};
