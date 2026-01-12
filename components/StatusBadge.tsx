import React, { useState, useEffect } from 'react';

const StatusBadge: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    "Aceitando Projetos Nível 1 e 2",
    "Apenas 2 projetos restantes para fechar o mês"
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o modo flutuante após passar 200px
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`
        transition-all duration-700 ease-in-out z-50 flex items-center justify-center
        ${isScrolled 
          ? 'fixed top-24 right-6 md:right-12' // Posição flutuante (lado direito)
          : 'relative mb-8' // Posição original na Hero
        }
      `}
    >
      <div 
        className={`
          inline-flex items-center gap-2 rounded-full border transition-all duration-500
          ${isScrolled 
            ? 'bg-dark-900/90 border-brand-500/30 text-brand-400 shadow-lg backdrop-blur-md px-4 py-2 text-xs md:text-sm' 
            : 'bg-white/5 border-white/10 text-brand-300 px-4 py-2 text-sm hover:bg-white/10'
          }
        `}
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
        </span>
        
        <span className="whitespace-nowrap min-w-[200px] text-center transition-opacity duration-300">
           {texts[textIndex]}
        </span>
      </div>
    </div>
  );
};

export default StatusBadge;