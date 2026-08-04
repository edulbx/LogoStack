import React from 'react';
import { WORK_STEPS } from '../constants';

const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-3">Como Trabalhamos</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Do primeiro contato à entrega
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Processo transparente, com escopo e prazo definidos antes de qualquer linha de código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORK_STEPS.map((step) => (
            <div key={step.id} className="bg-dark-800 border border-white/5 p-8 rounded-2xl hover:border-brand-500/30 transition-colors">
              <span className="block font-display font-bold text-3xl text-brand-500 mb-4">
                {String(step.id).padStart(2, '0')}
              </span>
              <h4 className="text-white font-semibold text-lg mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
