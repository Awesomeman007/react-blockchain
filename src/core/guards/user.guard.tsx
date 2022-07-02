import { Component, ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext"

function withUserGuard<P>(Component: ComponentType<P>): FC<P> {
// const withUserGuard = <P extends ComponentType>(Component: ComponentType<P>): FC<P> => {
    const WithUserGuard = (props: P) => {
        const { token } = useAuthContext();
        if (token) {
            return <Component {...props} />
        } 
        return <Navigate to = "/landing" />
    }

    return WithUserGuard

}

export default withUserGuard