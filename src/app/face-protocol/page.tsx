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

export default function FaceProtocol() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save lead data
      const response = await fetch('/api/leads/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Get UTM parameters from URL if they exist
          utmSource: new URLSearchParams(window.location.search).get('utm_source'),
          utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
          utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save lead data');
      }

      // Track lead capture event
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Face Protocol Form',
            status: 'complete'
          });
        }
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            'event_category': 'lead',
            'event_label': 'Face Protocol Form'
          });
        }
      }

      // Store data in localStorage
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userWhatsapp", formData.whatsapp);
      
      // Redirect to thank you page
      router.push("/face-protocol/thank-you");
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Ocorreu um erro. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
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
                Método Coreano para Exercícios Faciais
              </h1>
              
              <p className="text-xl text-[#7286B2] leading-relaxed max-w-2xl mx-auto">
                Resultados naturais superiores ao procedimentos caros em 30 dias
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
                    onChange={(e) => setFormData({...formData, whatsapp: formatWhatsApp(e.target.value)})}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-[#35426A] hover:bg-[#7286B2] text-white font-medium rounded-full transition-all duration-300 px-8 py-6 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Processando..." : (
                    <>
                      Começar Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
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