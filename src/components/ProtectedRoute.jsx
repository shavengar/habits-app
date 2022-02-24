import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isPrivate, children }) => {
    const activeUser = true;
    const redirectTo = isPrivate ? "/login" : "/profile";
    if ((activeUser && isPrivate) || (!activeUser && !isPrivate)) {
        return <>{children}</>;
    } else {
        return <Navigate to={redirectTo} />;
    }
};

export default ProtectedRoute;
