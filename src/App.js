import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import userImg from "./images/useravatar.jpg";
export const Context = createContext();

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Context.Provider value={{ userImg: userImg }}>
      <FlexColumn className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </FlexColumn>
    </Context.Provider>
  );
}

export default App;
