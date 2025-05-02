import { useAuth } from "@/context/AuthContext";
import { ReactElement } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: {children: ReactElement}) => {
    const { token } = useAuth()

    return token ? children : <Navigate to='/' />
}

export default ProtectedRoute