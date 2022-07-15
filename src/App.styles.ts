import styled from "styled-components";

export const Container = styled.div`
  background-color: #17202A;
  color: #F2F3F4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Content = styled.div`
  width: 80%;
  max-width: 1100px;
`;
export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #F2F3F4;
  text-align: center;
  border-bottom: solid 1px #566573;
  /* padding-bottom: 20px;
  padding-top: 10px; */

  .gradient-text {
    background-color: #43CBFF;
    background-image: linear-gradient(45deg, #43CBFF, #9708CC);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`;