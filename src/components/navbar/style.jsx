import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 4;
  font-size: 13px;
  padding: 10px 100px 10px 0;
  position: sticky;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--color--background);
  top: 0;
  ul {
    display: flex;
    color: #c1cae9;
    list-style-type: none;
    li {
      font-family: 'Fira Mono', monospace;
      padding: 5px 20px;
      cursor: pointer;
      span {
        color: var(--color--green);
      }
    }
    li:hover {
      color: var(--color--green);
    }
  }
 
  }
  
  `;
const Button = styled.button`
  all: unset;
  border-radius: 5px;
  color: var(--color--green);
  padding: 10px;
  border: 2px solid var(--color--green);
  :hover {
    background-color: var(--color--green);
  }
`;
export { Container, Button };
