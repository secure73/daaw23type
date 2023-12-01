import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectRoute from "./ProtectedRoute";

const Router: React.FC = () => {
  const token = localStorage.getItem("token");
  //check if token is valid is a prociture that you can do it later
  //ex :
  // const token = localStorage.getItem("token");
  // if(token){
  
  
  // function checkToken(token: string) {
  //check if token is valid
  //      return true;
  //    }
  
  
  
  //   const isValid = checkToken(token);
  //   if(!isValid){
  //     localStorage.removeItem("token");
  //   }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      {/* protection */}
      <Route
        element={
          <ProtectRoute
            redirectPath={"/login"}
            //isAllowed={checkToken(token)}
            isAllowed={!!token}
          />
        }
      >
        {/* protection */}
        {/* all protected route come here */}
        <Route path={"/dashboard"} element={<Dashboard />} />



        {/* all protected route come here */}
      </Route>
      {/* end Protection */}
    </Routes>
  );
};

export default Router;
