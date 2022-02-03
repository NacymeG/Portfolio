import {
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
} from './style.jsx';
import ImageProfile from './photo.jpg';
import ProjectCard from '../../Components/ProjectCard';
import OtherProjectCard from '../../Components/OtherProjectCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5051/projects').then(function (res) {
      setProjects(res.data);
    });
    axios.get('http://localhost:5051/other').then(function (res) {
      setOthers(res.data);
    });
  }, []);
  return (
    <Container id='Landing'>
      <a href='#Landing'>
        <Arrow />
      </a>
      <Mail>
        <a href='mailto:Nacyme.gallel@gmail.com'>
          <span> Nacyme.gallel@gmail.com </span>
        </a>
        ______________
      </Mail>
      <Social>
        <a href='www.github.com'>
          <Github />
        </a>
        <a href='www.linkedin.com'>
          <Linkedin />
        </a>
        <a href='www.twitter.com'>
          <Twitter />
        </a>
        <a href='www.instagram.com'>
          <InstagramLogo />
        </a>
        <a href='www.instagram.com'>
          <GearLogo />
        </a>
        <hr width='50px' />
      </Social>
      <Landing>
        <p>Hi, my name is</p>
        <h1>Nacyme Gallel.</h1>
        <h2>Freshly arrived in the world of web development.</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis
          quos velit numquam mollitia, cupiditate beatae consequuntur illum
          dicta doloribus. Provident, aliquam quae modi laboriosam iusto
          laudantium corrupti fuga consectetur, nobis reprehenderit optio culpa
          animi, iste illum maxime est quis!
        </h3>
      </Landing>

      <About id='About'>
        <div className='aboutContainer'>
          <h1>
            <span>01.</span> About me
          </h1>
          <div>
            <p>
              Hello ! My name is Nacyme and I enjoy creating things that live on
              the internet. I began the Wild Code School on september!
            </p>
            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul>
              <li>
                <span>.</span> JavaScript (ES6+)
              </li>
              <li>
                <span>.</span> React
              </li>
              <li>
                <span>.</span> Node.js
              </li>
              <li>
                <span>.</span> ExpressJs
              </li>
              <li>
                <span>.</span> Styled Component
              </li>
            </ul>
          </div>
        </div>
        <div className='imageContainer'>
          <img src={ImageProfile} alt='Nacyme Gallel' />
        </div>
      </About>
      <Project id='Project'>
        <h1>
          <span>02.</span> Some Things I’ve Made
        </h1>
        <div className='projectContainer'>
          {projects.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </Project>
      <Other>
        <h1>Other Projects</h1>
        <CardContainer>
          {others.map((other) => {
            return <OtherProjectCard {...other} />;
          })}
        </CardContainer>
      </Other>
      <Contact id='Contact'>
        <span>03. What's Next ?</span>

        <h1>Get In Touch</h1>
        <p> I’m currently looking for any new opportunities,</p>
        <p>my inbox is always open.</p>
        <p>Come say hi!</p>
        <Button>Contact me !</Button>
      </Contact>
    </Container>
  );
}
