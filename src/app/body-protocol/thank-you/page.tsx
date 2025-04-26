"use client";

import { CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    fbq: any;
    gtag?: (command: string, action: string, params?: any) => void;
  }
}

function ThankYouContent() {
  const [countdown, setCountdown] = useState(10);
  const searchParams = useSearchParams();
  const baseWhatsappUrl = "https://wa.me/5511975873111";
  const message = encodeURIComponent(`Olá! Tenho interesse no Reset Hormonal +38.`);
  const whatsappUrl = `${baseWhatsappUrl}?text=${message}`;

  useEffect(() => {
    // Track Lead event when thank you page loads
    if (typeof window !== 'undefined') {
      // Facebook Pixel tracking
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Reset Hormonal +38',
          content_category: 'Body Protocol Form',
          status: 'complete'
        });
      }
      
      // Google Analytics lead event
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          'protocol_type': 'Body Protocol',
          'lead_source': 'Form Submission'
        });
      }
    }
  }, []);

  const openWhatsApp = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }
    window.open(whatsappUrl, "_blank");
    setCountdown(10);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      openWhatsApp();
    }
  }, [countdown]);

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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm text-center">
              <div className="mb-8 flex justify-center">
                <CheckCircle className="h-16 w-16 text-[#35426A]" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-medium text-[#35426A] mb-4">
                Obrigado pelo seu interesse!
              </h1>
              
              <p className="text-xl text-[#7286B2] mb-8 max-w-xl mx-auto">
                Você será redirecionado para o WhatsApp em <span className="text-[#35426A] font-medium">{countdown} segundos</span> para iniciar seu atendimento personalizado.
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={openWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-full transition-all duration-300 px-8 py-6 text-lg w-full md:w-auto"
                >
                  Ir para WhatsApp Agora
                  <MessageCircle className="ml-2 h-6 w-6" />
                </Button>

                <p className="text-sm text-[#7286B2]">
                  Se preferir, você também pode{" "}
                  <Link 
                    href="/"
                    className="text-[#35426A] hover:text-[#7286B2] underline"
                  >
                    voltar para a página inicial
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function ThankYou() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF] flex items-center justify-center">
        <div className="text-[#35426A]">Carregando...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
} 