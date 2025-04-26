"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const products = [
  { id: "cleanser", text: "Sabonete facial" },
  { id: "toner", text: "Tônico" },
  { id: "serum", text: "Sérum" },
  { id: "moisturizer", text: "Hidratante" },
  { id: "eye_cream", text: "Creme para os olhos" },
  { id: "mask", text: "Máscara facial" },
  { id: "exfoliant", text: "Esfoliantes" },
  { id: "lip_care", text: "Tratamento labial" },
  { id: "none", text: "Nenhum desses" }
];

export default function StepSeven() {
  const { setCurrentStep } = useQuizContext();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    if (id === "none") {
      setSelectedProducts(["none"]);
      return;
    }
    
    setSelectedProducts(prev => {
      if (prev.includes("none")) {
        return [id];
      }
      return prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
    });
  };

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Quais desses produtos você usa?
          </h2>
          <p className="text-gray-600 text-lg">
            Selecione todos que você utiliza
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => toggleProduct(product.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedProducts.includes(product.id)
                  ? "border-black bg-black/5"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <span className={`text-base font-medium ${
                selectedProducts.includes(product.id)
                  ? "text-black"
                  : "text-gray-700"
              }`}>
                {product.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4 space-y-4">
        <button
          onClick={() => setCurrentStep(8)}
          disabled={selectedProducts.length === 0}
          className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-300 ${
            selectedProducts.length > 0
              ? "bg-black hover:bg-gray-900"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continuar
        </button>

        <button
          onClick={() => setCurrentStep(6)}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
      </div>
    </div>
  );
} 