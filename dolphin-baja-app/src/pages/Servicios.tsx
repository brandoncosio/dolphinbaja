import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import SplashScreen from '../components/SplashScreen';

// 👇 COMPONENTES MODULARES IMPORTADOS
import ServicesHero from '../components/services/ServicesHero';
import PartnersBanner from '../components/services/PartnersBanner';
import PackagesGrid from '../components/services/PackagesGrid';
import ServiceCategory from '../components/services/ServiceCategory';
import ServiceModal from '../components/services/ServiceModal';

import { getServicesData, getCategoriesList, TabKey, ModalData } from '../components/services/servicesData';

export default function Servicios() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (modalData) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalData]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash && !isLoading) {
      scrollToSection(location.hash.replace('#', ''));
    } else if (!location.hash && !isLoading) {
      window.scrollTo(0, 0);
    }
  }, [location.hash, isLoading]);

  const currentData = getServicesData(lang, {
    onNavigate: (id: string) => {
      setModalData(null);
      setTimeout(() => scrollToSection(id), 350);
    }
  });

  const categoriesList = getCategoriesList(lang);

  return (
    <>
      <Helmet>
        <title>{lang === 'es' ? 'Catálogo de Servicios y Tours | Dolphin Dive' : 'Diving Services & Tours | Dolphin Dive'}</title>
      </Helmet>

      <div className="min-h-screen selection:bg-cyan-400 selection:text-dark bg-slate-50 dark:bg-dark transition-colors duration-500 pb-20">
        <AnimatePresence>
          {isLoading && <SplashScreen key="splash" />}
        </AnimatePresence>

        <ServicesHero heroData={currentData.hero} categoriesList={categoriesList} scrollToSection={scrollToSection} />

        <PartnersBanner />

        <main className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">
          <PackagesGrid paquetesData={currentData.paquetes} setModalData={setModalData} setCurrentImageIdx={setCurrentImageIdx} scrollToSection={scrollToSection} />

          {/* 👇 AQUÍ ESTÁ LA CORRECCIÓN: Agregamos 'intro' a la lista de secciones */}
          {(['fundives', 'intro', 'cursos', 'snorkel'] as TabKey[]).map((tabKey) => (
            <ServiceCategory
              key={tabKey}
              tabKey={tabKey}
              sectionTitle={categoriesList.find(c => c.id === tabKey)?.label || ''}
              servicesList={currentData[tabKey]}
              setModalData={setModalData}
              setCurrentImageIdx={setCurrentImageIdx}
              scrollToSection={scrollToSection}
            />
          ))}
        </main>
      </div>

      <AnimatePresence>
        {modalData && (
          <ServiceModal modalData={modalData} setModalData={setModalData} currentImageIdx={currentImageIdx} setCurrentImageIdx={setCurrentImageIdx} scrollToSection={scrollToSection} />
        )}
      </AnimatePresence>
    </>
  );
}