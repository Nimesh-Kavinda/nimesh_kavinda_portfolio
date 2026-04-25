'use client'

import { createContext,useContext,useState,ReactNode, Children } from "react";

const LoadingContext = createContext<{
    loading: boolean;
    setLoading: (loading: boolean) => void;
}>({
    loading: false,
    setLoading: () => {},
});

export const LoadingProvider = ({children} : {children: ReactNode}) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext);