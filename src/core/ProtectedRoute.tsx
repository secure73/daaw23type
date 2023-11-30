import React from "react";
import { Navigate, Outlet } from "react-router";

interface Props {
  redirectPath?: string;
  children?: any;
  isAllowed: boolean;
}

const ProtectRoute = ({
  isAllowed,
  redirectPath = "/landing",
  children,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectRoute;
