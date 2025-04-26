"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepThirtyFour() {
  const router = useRouter();
  const { setCurrentStep, currentStep } = useQuizContext();
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Store WhatsApp number in localStorage or your preferred state management
    localStorage.setItem("userWhatsapp", whatsapp);
    
    // Redirect to checkout
    router.push("/checkout/protocol-face");
  };

  const formatWhatsApp = (value: string) => {
    // Remove any non-digit characters
    const numbers = value.replace(/\D/g, "");
    
    // Format as (XX) XXXXX-XXXX
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return numbers;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Parabéns, com apenas 10-15 minutos por dia você sentirá a transformação
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Insira seu WhatsApp para começar sua jornada
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
              Seu WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processando..." : "Entrar Agora"}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Ao continuar, você concorda em receber mensagens sobre seu progresso
            </p>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">Programa personalizado baseado em suas respostas</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">Suporte exclusivo via WhatsApp</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-gray-700">Acesso imediato após a confirmação</p>
          </div>
        </div>
      </div>
    </div>
  );
} 