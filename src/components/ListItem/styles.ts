import styled from "styled-components";

type ContainerProps={
  done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
  `
    display: flex;
    background-color: #1C2833;
    padding: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;

    input{
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }

    label{
      flex: 1;
      text-align: left;
      color: #D5D8DC;
      font-size: 1rem;
      text-decoration: ${done? 'line-through': 'initial'}
    }
    button{
      background-color: transparent;
      border: none;
      cursor:pointer
    }
  `
))