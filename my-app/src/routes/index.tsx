import { BrowserRouter, Route, Routes } from "react-router"
import ProtectedRoute from "./ProtectedRouter"
import DashBoard from "@/pages/dashboard"
import { useAuth } from "@/context/AuthContext"
import LoginPage from "@/pages/login/LoginPage"

const RoutesComponent = () => {

    const { token } = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>{ token ? <DashBoard/> : <LoginPage/>}</ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent