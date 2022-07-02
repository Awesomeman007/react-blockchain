import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "./cookieHandler";

interface AuthContextConstruct {
    token?: string
    setToken: (token: string) => void
}

interface Token {
    userId: string
}

export const AuthContext = createContext({} as AuthContextConstruct)

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({...props
}) => {
    const [token, setToken] = useState(getCookie("token") ?? undefined);
    const decodedToken = token ? jwtDecode<Token>(token) : undefined
    const value = {token, setToken}

    useEffect(() => {
        const cookieToken = getCookie("token") ?? undefined
        setToken(cookieToken)
        console.log("useeffect auth context")
    }, [])

    return <AuthContext.Provider value={value} {...props} />
}

export default AuthProvider