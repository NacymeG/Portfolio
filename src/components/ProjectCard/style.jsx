import styled from 'styled-components';

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Row2 = styled.div`
  background-color: #112240;
  padding: 30px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 14px;
    margin: 0;
    color: var(--color--green);
  }
  h1 {
    cursor: pointer;
    font-size: 40px;
    line-height: 88px;
    letter-spacing: normal;
    color: var(--color--textWhite);
  }
  h1:hover {
    color: var(--color--green);
  }
  .projectImage {
    cursor: pointer;
    width: 600px;
    margin-right: 50px;
  }

  ul {
    position: relative;
    top: 20px;
    font-size: 14px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    li {
      font-family: 'Fira Mono', monospace;
      padding: 10px;
      color: var(--color--green);
    }
  }
  .githubLogo {
  }
  .cardDescription {
    position: relative;
    right: 180px;
  }
`;
export { Container, Headline, Row2 };
