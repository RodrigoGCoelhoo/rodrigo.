'use client';

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

// interface ContextProps {
//     page: 'home' | 'academic' | 'professional' | 'personal' | 'certificates' | 'projects';
//     setPage: Dispatch<SetStateAction<'home' | 'academic' | 'professional' | 'personal' | 'certificates' | 'projects'>>;
//     language: 'pt' | 'en';
//     setLanguage: Dispatch<SetStateAction<'pt' | 'en'>>;
// }

interface ContextProps {
    page: string;
    setPage: (page: string) => void;
    language: string;
    setLanguage: (language: string) => void;
}

const GlobalContext = createContext<ContextProps>({
    page: 'home',
    language: 'PT'
} as ContextProps)

export const GlobalContextProvider = ({ children } : any) => {
    const [page, setPage] = useState('home');
    const [language, setLanguage] = useState('PT');

    return (
        <GlobalContext.Provider value={{ page, setPage, language, setLanguage }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);