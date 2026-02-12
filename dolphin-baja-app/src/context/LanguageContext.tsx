import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'es' | 'en';

interface LanguageContextType {
    lang: Language;
    toggleLanguage: () => void;
    t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // 👇 CAMBIO AQUÍ: Inicializamos en 'en' (Inglés) como pediste
    const [lang, setLang] = useState<Language>('en');

    const toggleLanguage = () => {
        setLang(prev => (prev === 'es' ? 'en' : 'es'));
    };

    const value = {
        lang,
        toggleLanguage,
        t: translations[lang]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
    return context;
};