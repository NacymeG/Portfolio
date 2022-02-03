import { Container, Headline, Row2 } from './style';
export default function ProjectCard({ ...props }) {
  console.log(props);
  return (
    <Container>
      <div>
        <img className='projectImage' src={props.image} alt={props.title} />
      </div>
      <div>
        <div className='cardDescription'>
          <Headline>
            <p>Featured Projects</p>

            <h1>{props.title}</h1>
          </Headline>
          <Row2>{props.description}</Row2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>ExpressJs</li>
            <li>Styled Component</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
