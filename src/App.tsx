<<<<<<< HEAD
import React from 'react';
import Footer from '../src/layout/Footer';
import './App.css';
import Navbar from './layout/Navbar';
=======
import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/Router";
>>>>>>> 76c5bcf43eab5225fe87f9076660e4d0a7b34ca3

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Footer />
=======
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
>>>>>>> 76c5bcf43eab5225fe87f9076660e4d0a7b34ca3
    </div>
  );
}

export default App;
