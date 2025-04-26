"use client";

import React, { useState, useEffect } from "react";
import { quizStyles } from "../../styles/theme";

export default function StepThirtyFour() {
  const [seconds, setSeconds] = useState(10);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequência de timers para mostrar as mensagens
    const step1 = setTimeout(() => setStep(1), 1000);
    const step2 = setTimeout(() => setStep(2), 4000);
    const step3 = setTimeout(() => setStep(3), 7000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        window.location.href = "https://app.vuom.life/register";
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const getMessage = () => {
    switch (step) {
      case 1:
        return (
          <h2 className={`text-xl font-light text-[#35426A] font-['Avenir'] animate-fade-in`}>
            Agora você poderá criar sua conta para receber o plano...
          </h2>
        );
      case 2:
        return (
          <p className={`text-xl text-gray-600 font-light font-['Avenir'] animate-fade-in`}>
            Liberamos um Plano com valor de custo para você
          </p>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <p className={`text-xl text-gray-600 font-light font-['Avenir']`}>
              Mas só ficará disponível por 10 minutos, iremos te redirecionar em...
            </p>
            <div className={`text-3xl font-semibold text-[#35426A] font-['Avenir']`}>
              {String(seconds).padStart(2, "0")}s
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={quizStyles.container}>
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#35426A]"></div>
        </div>

        {/* Message Container - Altura fixa para evitar "pulos" no layout */}
        <div className="min-h-[120px] flex items-center justify-center">
          {getMessage()}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
} 