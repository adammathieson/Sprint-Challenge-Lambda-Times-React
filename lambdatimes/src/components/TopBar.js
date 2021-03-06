import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <WrapBar>
      <Container>
        <ConLeft>
          <LSpan>TOPICS</LSpan><LSpan>SEARCH</LSpan>
        </ConLeft>
        <ConCent>
          <CentSpan>GENERAL</CentSpan><CentSpan>BROWNBAG</CentSpan><CentSpan>RANDOM</CentSpan><CentSpan>MUSIC</CentSpan><CentSpan><CentSpanLC>ANNOUNCEMENTS</CentSpanLC></CentSpan>
        </ConCent>
        <ConRight>
          <RSpan>LOG IN</RSpan>
        </ConRight>
      </Container>
    </WrapBar>
  )
}

const WrapBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ConLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ConCent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CentSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }
`;
const CentSpanLC = styled.span`
  margin-right: 0;
`;

const ConRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RSpan = styled.span`
  cursor: pointer;
`;
export default TopBar;