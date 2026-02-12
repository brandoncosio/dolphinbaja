import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Solo hacemos scroll top si NO hay un ancla (#)
        // (Si hay ancla, dejamos que el Navbar maneje el scroll suave a la sección)
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}