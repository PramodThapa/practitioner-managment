import React from "react";

import { isEmpty } from "lodash";

import { Navigate, useLocation } from "react-router-dom";
import { getUserFromLocalStorage } from "../services/localStroage";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  let location = useLocation();

  if (isEmpty(getUserFromLocalStorage())) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
