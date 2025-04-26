"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, Users, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

declare global {
  interface Window {
    fbq: any;
  }
}

export default function BodyProtocol() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/body-protocol/thank-you");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF]">
      <div className="min-h-screen font-light tracking-[-0.03em]">
        {/* Header */}
        <header className="w-full pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={180}
                  height={54}
                  className="h-12 w-auto brightness-0"
                  priority
                />
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-medium text-[#35426A] mb-4 leading-tight">
                Reset Hormonal +38
              </h1>
              
              <p className="text-xl text-[#7286B2] leading-relaxed max-w-2xl mx-auto">
                A fórmula que alinha alimentação, treino e mente com seu novo ritmo biológico – sem loucuras.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    required
                    className="w-full p-4 rounded-full border-gray-100 focus:border-[#35426A] focus:ring-[#35426A] text-[#35426A] font-light"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    required
                    className="w-full p-4 rounded-full border-gray-100 focus:border-[#35426A] focus:ring-[#35426A] text-[#35426A] font-light"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="WhatsApp"
                    required
                    className="w-full p-4 rounded-full border-gray-100 focus:border-[#35426A] focus:ring-[#35426A] text-[#35426A] font-light"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium rounded-full transition-all duration-300 px-8 py-6"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Star className="h-8 w-8 text-[#35426A] fill-current" />
                </div>
                <p className="text-[#35426A] font-medium mb-2">4.9/5 Avaliações</p>
                <p className="text-sm text-[#7286B2]">Mais de 1.000 clientes satisfeitas</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-[#35426A]" />
                </div>
                <p className="text-[#35426A] font-medium mb-2">+5.000 Assinantes</p>
                <p className="text-sm text-[#7286B2]">Transformações reais comprovadas</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-[#35426A]" />
                </div>
                <p className="text-[#35426A] font-medium mb-2">Garantia de Resultado</p>
                <p className="text-sm text-[#7286B2]">30 dias de acompanhamento exclusivo</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 