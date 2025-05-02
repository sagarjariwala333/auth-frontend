import { loginService } from "@/services/ApiService";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ContextType {
    token: string | null,
    login: (email: string, password: string) => Promise<void>,
    logout: () => void
}

const initialState = {
    token: null,
    login: async () => {},
    logout: () => {}
}

const AuthContext = createContext<ContextType>(initialState)

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)

    const login = async (email: string, password: string) => {
        console.log(email, password)
        const res = await loginService(email, password)
        localStorage.setItem('access_token', res.data.token)
        setToken(res.data.token)
    }

    const logout = () => {
        localStorage.removeItem('access_token')
        setToken(null)
    }

    useEffect(() => {
        const token = localStorage.getItem('access_token') ?? ''
        setToken(token)
    },[])

    return <AuthContext.Provider value={{ login, logout, token }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }