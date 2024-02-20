import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import SignUp from './Components/SignUp/SignUp';
import Maincomp from './Components/MainComp/Maincomp';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {

  // hello world
  return (
    <AppStyled bg={bg} className="App">
      <Routes>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Maincomp />} />
      </Routes>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
