"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { quizStyles } from "../../styles/theme";

const benefits = [
  {
    title: "Harmonização Natural",
    description: "Rejuvenescimento facial sem procedimentos invasivos",
    color: "from-neutral-50 to-gray-50"
  },
  {
    title: "Lifting Natural",
    description: "Tonificação dos músculos faciais para um efeito lifting",
    color: "from-stone-50 to-neutral-50"
  },
  {
    title: "Contorno Facial",
    description: "Define e modela naturalmente o contorno do rosto",
    color: "from-gray-50 to-stone-50"
  }
];

const features = [
  {
    text: "Redução de Rugas",
    description: "Suaviza linhas de expressão naturalmente"
  },
  {
    text: "Pele Mais Firme",
    description: "Aumenta a elasticidade e firmeza da pele"
  },
  {
    text: "Rejuvenescimento",
    description: "Aparência mais jovem e natural"
  }
];

export default function StepThree() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className={`min-h-screen flex flex-col font-["Avenir"]`}>
      <div className="flex-1 pb-24 space-y-8">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/dep.avif"
            alt="Depoimentos"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header Section */}
        <div className="text-center space-y-3 px-4">
          <h2 className={`text-3xl font-light text-gray-900 tracking-tight font-["Avenir"]`}>
            Harmonização Facial Natural
          </h2>
          <p className={`text-gray-600 text-lg max-w-xl mx-auto leading-relaxed font-light font-["Avenir"]`}>
            Transforme seu rosto com técnicas coreanas 100% naturais, sem procedimentos invasivos
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="space-y-4 px-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-r ${benefit.color} border border-gray-100 transition-all duration-300 hover:shadow-md font-["Avenir"]`}
            >
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 text-lg tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className={`bg-white rounded-2xl p-8 space-y-6 border border-gray-100 mx-4 font-["Avenir"]`}>
          <h3 className="font-light text-xl text-gray-900 tracking-tight">
            Resultados Naturais
          </h3>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-1">
                <p className="font-medium text-gray-900 tracking-tight">{feature.text}</p>
                <p className="text-gray-500 text-sm font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botão fixo na parte inferior */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm">
        <button
          onClick={() => setCurrentStep(4)}
          className={`w-full max-w-md mx-auto h-14 rounded-full text-white font-light bg-[#35426A] hover:bg-[#2A3557] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-lg tracking-wide font-["Avenir"]`}
        >
          Receber plano
        </button>
      </div>
    </div>
  );
} 