import './App.css';
import styled, { css } from 'styled-components';


const Wrapper = styled.section`
 padding: 4rem;
 margin: 2em;
 width: 200px;
 background-color: ${({ bgColor }) => bgColor ? bgColor : 'papayawhip'};
 ${({ is3D }) => is3D && css`
    background-color: yellow;
    box-shadow: 1rem 1rem black;
 `}
`

const Title = styled.h1`
 font-size: 1.5rem;
 text-align: center;
 color: palevioletred;
`

const CircleWrapper = styled(Wrapper)`
border-radius:100%;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Hello Title</Title>
      </Wrapper>
      <Wrapper bgColor={"silver"}>
        <Title>Hello Title</Title>
      </Wrapper>
      <Wrapper bgColor={"silver"} is3D={true}>
        <Title>Hello Title</Title>
      </Wrapper>
      <CircleWrapper bgColor={"silver"}>
        <Title>Hello Title</Title>
      </CircleWrapper>
    </div>
  );
}

export default App;
