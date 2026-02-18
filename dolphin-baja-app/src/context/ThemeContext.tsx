import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {

    // 👇 AQUÍ ESTÁ EL CAMBIO CLAVE
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            // 1. Revisamos si el usuario ya guardó una preferencia anteriormente
            // (Si ya visitó la web y cambió el tema, respetamos su elección)
            const savedTheme = localStorage.getItem('dolphin_theme') as Theme;
            if (savedTheme) return savedTheme;
        }

        // 2. SI ES LA PRIMERA VEZ (O no hay nada guardado):
        // Retornamos DIRECTAMENTE 'light'.
        // Hemos eliminado la comprobación de (prefers-color-scheme: dark)
        // para que ignore la configuración del sistema operativo.
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remover la clase anterior para evitar conflictos
        root.classList.remove('light', 'dark');

        // Agregar la clase actual al HTML (esto activa el CSS de Tailwind)
        root.classList.add(theme);

        // Guardar la elección en el navegador para futuras visitas
        localStorage.setItem('dolphin_theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}