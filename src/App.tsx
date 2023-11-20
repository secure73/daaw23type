import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/Router";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
