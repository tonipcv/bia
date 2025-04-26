// /components/Quiz/Steps/Step1.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { quizStyles } from "../../styles/theme";

export default function StepOne() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className={quizStyles.container}>
      <div className="space-y-8">
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <h2 className={quizStyles.title}>
            Protocolo Coreano para
            <br className="sm:hidden" /> Rejuvenescimento
          </h2>
          <p className={quizStyles.subtitle}>
            Plano Personalizado para 28 dias
          </p>
        </div>

        {/* Imagem Principal */}
        <div className="relative mx-auto w-full max-w-lg aspect-[4/3]">
          <Image
            src="/ad-vuom.png"
            alt="Protocolo Coreano"
            fill
            className="object-contain rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Descrição */}
        <div className="text-center space-y-3">
          <h3 className={quizStyles.description}>
            Descubra como transformar sua pele e elevar sua autoestima com o protocolo coreano personalizado da{" "}
            <span className="text-gray-900 font-semibold">VUOM™</span>
          </h3>
        </div>

        {/* Botão */}
        <div className="pt-6">
          <button
            onClick={() => setCurrentStep(2)}
            className={quizStyles.button}
          >
            Criar plano agora!
          </button>
        </div>
      </div>
    </div>
  );
}
