"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import Image from "next/image";

interface DataPoint {
  month: number;
  value: number;
}

const withoutPlanData: DataPoint[] = [
  { month: 0, value: 30 },
  { month: 1, value: 35 },
  { month: 2, value: 45 },
  { month: 3, value: 60 },
  { month: 4, value: 80 },
  { month: 5, value: 95 },
];

const withPlanData: DataPoint[] = [
  { month: 0, value: 70 },
  { month: 1, value: 60 },
  { month: 2, value: 45 },
  { month: 3, value: 35 },
  { month: 4, value: 25 },
  { month: 5, value: 20 },
];

export default function StepTwentyNine() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-32 max-w-3xl mx-auto px-4">
      <div className="space-y-8">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/dep4.webp"
            alt="Resultados"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-light text-gray-900">
            Seu Protocolo Exclusivo para Rejuvenescimento foi criado!
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Baseado em suas respostas, seu plano personalizado será revelado agora.
          </p>
        </div>

        {/* Comparison Graphs */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Without Plan Graph */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <h3 className="font-light text-gray-900">Sem o Protocolo</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={withoutPlanData}>
                    <XAxis 
                      dataKey="month" 
                      tickFormatter={(value: number) => `${value}m`}
                      stroke="#9CA3AF"
                    />
                    <YAxis hide={true} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-red-600 mt-2">
                  Sinais de Envelhecimento ↗
                </p>
              </div>
            </div>
          </div>

          {/* With Plan Graph */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="space-y-4">
              <h3 className="font-light text-gray-900">Com o Protocolo</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={withPlanData}>
                    <XAxis 
                      dataKey="month" 
                      tickFormatter={(value: number) => `${value}m`}
                      stroke="#9CA3AF"
                    />
                    <YAxis hide={true} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-green-600 mt-2">
                  Rejuvenescimento ↘
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={() => setCurrentStep(30)}
          className="w-full max-w-md mx-auto h-14 flex items-center justify-center gap-2 bg-black text-white rounded-full font-light text-lg hover:bg-gray-900 transition-colors"
        >
          Obter meu plano agora
        </button>
      </div>
    </div>
  );
} 