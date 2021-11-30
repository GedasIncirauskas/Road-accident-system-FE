import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Maps, Home, Register, Login, Statistic } from './components';
import AuthProvider from './contexts/auth';
import * as S from './App.styles.js';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/statistic" element={<Statistic />} />
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
    </AuthProvider>
  );
};

export default App;
