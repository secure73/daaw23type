import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
