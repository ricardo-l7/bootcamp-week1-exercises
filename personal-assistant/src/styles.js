import styled from 'styled-components'

export const SubmitButton = styled.button`
  background: #787D33;
  border: none;
  border-radius: 2px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  color: white;
  padding: 6px;
  margin-left: 1vw;
  &:hover {
    background-color: #27285C;
  }
`;

export const Button = styled.button`
  background: #787D33;
  border: none;
  border-radius: 2px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  color: white;
  padding: 6px;
  &:hover {
    background-color: #27285C;
  }
`;

export const Bar = styled.input`
  border: 2px solid #787D33;
  background-color: white;
  border-radius: 15px;
  color: #27285C;
  height: 4vh;
  width: fit-content;
  padding: 5px;
  margin-top: 3vh;
  &:focus {
    outline: none;
  }
  `;

export const List = styled.div`
  text-align: center;
  border: 5px solid #787D33;
  background-color:  white;
  color: #27285C;
  height: fit-content;
  width: fit-content;
  padding: 2vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`
export const StyledHeader = styled.header`
  font-size: 28px;
  font-weight: bold;
  color: #27285C;
  font-style: italic;
  margin-top: 3vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  background-color: #F8F0E3;
  height: 100vh;
  overflow-y: auto;
  margin: 0%;

`;

export const MastHead = styled.div`
  flex-wrap: wrap;
  margin-left: 0;
  height: 3vh;
  background-color: #27285C;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
