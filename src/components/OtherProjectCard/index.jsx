import { Container, Link } from './style.jsx';
export default function OtherProjectCard({ ...props }) {
  return (
    <Container>
      <Link />
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>ExpressJs</li>
        <li>Styled Component</li>
      </ul>
    </Container>
  );
}
