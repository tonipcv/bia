"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    // Track successful purchase
    if (typeof window !== 'undefined') {
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          content_name: 'Protocolo Facial',
          content_category: 'Face Protocol Subscription',
          status: 'complete'
        });
      }
      
      if (window.gtag) {
        window.gtag('event', 'purchase', {
          'protocol_type': 'Face Protocol',
          'transaction_id': new Date().getTime().toString()
        });
      }
    }
  }, []);

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
                Parabéns! Sua compra foi confirmada
              </h1>
              
              <p className="text-xl text-[#7286B2] mb-8 max-w-xl mx-auto">
                Você receberá em breve um e-mail com as instruções de acesso ao protocolo.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/"
                  className="inline-block bg-[#35426A] hover:bg-[#7286B2] text-white font-medium rounded-full transition-all duration-300 px-8 py-4"
                >
                  Voltar para a página inicial
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 