import styled from "styled-components";

export const Container = styled.div`
  background-color: #20212C;
  /* box-shadow: 0px 0px 5px black; */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  font-size: 14px;

  input {
    color: #fff;
    flex: 1;
    margin: 0px 10px;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: solid 1px #b6b6b6;
    background-color: #20212C;
  }
  button {
    background-color: #2d2d34;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    flex: 1;
    border-radius: 5px;
    outline: none;
    border: none;
  }
  button:hover {
    cursor: pointer;
    background-color: #3548CD;
    transition: 0.3s;
  }
 

  select {
    color: #fff;
    background-color: #20212C;
    flex: 1;
    border-radius: 5px;
  }
`;
