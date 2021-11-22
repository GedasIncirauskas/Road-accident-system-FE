import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Maps, Home, Register, Login } from './components';
import * as S from './App.styles.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/accident"
          element={
            <S.Container>
              <Maps />
            </S.Container>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
