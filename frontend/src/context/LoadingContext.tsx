'use client'

import { createContext,useContext,useState,ReactNode, Children } from "react";

const LoadingContext = createContext<{
    loading: boolean;
    setLoading: (loading: boolean) => void;
}>({
    loading: true,
    setLoading: () => {},
});

export const LoadingProvider = ({children} : {children: ReactNode}) => {
    const [loading, setLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext);