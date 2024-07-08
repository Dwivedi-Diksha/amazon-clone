import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from 'react';
import Header from '../header/header';
import Home from '../home/home';
import Login from '../login/login';
import Checkout from "../checkout/checkout";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/checkout" element={
            <React.Fragment>
              <Checkout/>
            </React.Fragment>} />

          <Route path="/login" element={
            <React.Fragment>
              <Login/>
            </React.Fragment>} />

          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <Home/>
            </React.Fragment>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;