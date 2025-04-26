"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step < 8) {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    if (step === 8) {
      setLoading(true);
      const timer1 = setTimeout(() => setLoadingStep(2), 2000);
      const timer2 = setTimeout(() => setLoadingStep(3), 4000);
      const timer3 = setTimeout(() => {
        router.push("/register");
      }, 6000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [step, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        {step === 1 && (
          <div className="space-y-8">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8">
              <Image
                src="/ad-vuom.png"
                alt="Protocolo Coreano"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                quality={90}
                priority
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#35426A] text-center">
              Você já conhece o Protocolo Coreano?
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={handleNext}
                className="bg-[#35426A] hover:bg-[#7286B2] text-white font-medium py-6"
              >
                Sim
              </Button>
              <Button
                onClick={handleNext}
                className="bg-[#35426A] hover:bg-[#7286B2] text-white font-medium py-6"
              >
                Não
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-xl text-[#35426A] leading-relaxed">
              Protocolo Coreano é uma série de exércicios e mascáras faciais caseiras usadas pelas Coreanas para manter uma pele saudável e diminuir rugas com efeito Botox.
            </h2>
            <Button
              onClick={handleNext}
              className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium"
            >
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/dep.avif"
                alt="Resultados do Protocolo"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                quality={85}
                className="object-contain"
              />
            </div>
            <p className="text-lg text-[#35426A]">
              O recomendado é fazer o protocolo por 28 dias ou 4 semanas para ter resultados similares a esse da imagem acima.
            </p>
            <Button
              onClick={handleNext}
              className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium"
            >
              Quero ter esses resultados
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8">
            <h2 className="text-xl text-[#35426A] leading-relaxed">
              Será necessário somente poucos minutos no dia de dedicação, qual seu tempo disponivel
            </h2>
            <div className="space-y-4">
              {["10 minutos por dia", "20 minutos por dia", "30 minutos por dia"].map((time) => (
                <Button
                  key={time}
                  onClick={handleNext}
                  className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium py-6"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-8">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="/dep2.jpeg"
                alt="Mulheres que já aplicaram o Protocolo"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                quality={85}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl text-[#35426A] leading-relaxed">
              Mais de 20 mil mulheres de mais de 46 países já aplicaram o Protocolo e agora chegou a sua vez.
            </h2>
            <Button
              onClick={handleNext}
              className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium"
            >
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-8">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="/estudo21.png"
                alt="Estudos do Protocolo"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                quality={90}
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-[#35426A]">
                Estudos mostram que o Protocolo Coreano gera resultados nas primeiras semanas se feitos e acompanhados com o método correto.
              </p>
              <p className="text-lg text-[#35426A]">
                E na VUOM - empresa de estética avançada - decidimos liberar um plano com valor de custo para ajudar você a ter a pele transformada ainda esse mês.
              </p>
              <p className="text-lg text-[#35426A]">
                Somente você terá um taxa para gerar o acesso ao servidor de menos que um Mac Donalds.
              </p>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium"
            >
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-[#35426A]/5 p-6 rounded-xl">
                <p className="text-lg text-[#35426A] font-medium mb-4">
                  Se você depois do Protocolo comprovar que fez o que foi falo e não teve nada de resultado devolvemos todo o seu dinheiro.
                </p>
                <p className="text-[#7286B2]">
                  Tanto para o Plano Iniciante (Valor de custo), quanto para o Plano PRO (Para quem quer ter um suporte individualizado)
                </p>
              </div>
              <p className="text-center text-lg text-[#35426A] font-medium">
                Clique no botão abaixo para liberar o seu acesso:
              </p>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium py-6 text-lg"
            >
              Liberar Meu Acesso Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-8 text-center">
            {loadingStep === 1 && (
              <div className="space-y-4">
                <Loader2 className="w-12 h-12 animate-spin mx-auto text-[#35426A]" />
                <p className="text-xl text-[#35426A]">Seu acesso já está sendo liberado...</p>
              </div>
            )}
            {loadingStep === 2 && (
              <div className="space-y-4">
                <Check className="w-12 h-12 mx-auto text-green-500" />
                <p className="text-xl text-[#35426A]">Seu acesso foi liberado!</p>
              </div>
            )}
            {loadingStep === 3 && (
              <div className="space-y-4">
                <p className="text-xl text-[#35426A]">Em segundos você poderá criar a sua conta...</p>
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#35426A]" />
              </div>
            )}
          </div>
        )}

        {/* Progress bar */}
        {step < 8 && (
          <div className="mt-8 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#35426A] transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
} 