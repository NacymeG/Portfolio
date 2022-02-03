import styled from 'styled-components';
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal';

const Container = styled.div`
  background-color: #112240;
  border-radius: 5px;
  padding: 30px;
  height: 320px;
  width: 320px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 20px;
    color: var(--color--textWhite);
  }
  h3 {
    text-align: center;
    font-size: 14px;
    color: var(--color--textGrey);
  }
  ul {
    li {
      padding: 5px;
      font-family: 'Fira Mono', monospace;
      font-size: 10px;
    }
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Link = styled(LinkExternal)`
  width: 48px;
  color: var(--color--green);
`;

export { Container, Link };
