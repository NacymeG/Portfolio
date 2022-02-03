import { Container, Button } from './style.jsx';

export default function Navbar() {
  return (
    <Container>
      <ul>
        <a href='http://localhost:3000/#About'>
          <li>
            <span>01.</span> About
          </li>
        </a>
        <a href='http://localhost:3000/#Project'>
          <li>
            <span>02.</span> My Projects
          </li>
        </a>
        <a href='http://localhost:3000/#Contact'>
          <li>
            <span>03.</span> Contact
          </li>
        </a>
      </ul>
      <a href='https://www.linkedin.com/in/nacymeg/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABU_FkYBpdatNwiPGJacD6J30kF1sSyt2jc,1635476887349)/'>
        <Button>
          <p>Resume</p>
        </Button>
      </a>
    </Container>
  );
}
