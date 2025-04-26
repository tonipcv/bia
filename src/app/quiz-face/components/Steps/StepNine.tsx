"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepNine() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {/* Image Section */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/dep2.jpeg"
              alt="Resultados Naturais"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Header Section */}
          <div className="text-center space-y-2 px-4">
            <h2 className="text-xl font-light text-gray-900 tracking-tight">
              Elimine Rugas, Papada e Rejuvenesça
              <br />
              <span className="font-medium">Até 10 Anos Sem Botox!</span>
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 space-y-4 border border-gray-100 mx-4">
            <p className="text-gray-600 text-base leading-relaxed text-center font-light">
              Aumente sua confiança com uma combinação única de exercícios de Face Yoga e uma rotina de skincare personalizada.
            </p>

            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                <div className="w-1 h-5 bg-black rounded-full"></div>
                <span className="text-gray-900 font-light text-sm">Exercícios faciais direcionados</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                <div className="w-1 h-5 bg-black rounded-full"></div>
                <span className="text-gray-900 font-light text-sm">Rotina personalizada de skincare</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                <div className="w-1 h-5 bg-black rounded-full"></div>
                <span className="text-gray-900 font-light text-sm">Resultados duradouros e naturais</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <div className="space-y-3">
          <button
            onClick={() => setCurrentStep(10)}
            className="w-full h-12 rounded-xl font-medium text-white bg-black hover:bg-gray-900 transition-all duration-200 text-base"
          >
            Quero começar agora
          </button>

          <button
            onClick={() => setCurrentStep(8)}
            className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-xs flex items-center gap-2"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 