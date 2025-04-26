"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Initialize Stripe outside of component
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
    }
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default function Home() {
  const [step, setStep] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailSubmit = () => {
    if (!email) {
      setEmailError('Por favor, insira seu e-mail');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido');
      return;
    }
    setEmailError('');
    setStep(5);
  };

  const handleDonation = async () => {
    if (!selectedAmount) return;
    
    try {
      setIsLoading(true);
      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe failed to load');

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedAmount,
          email: email,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      const { id: sessionId } = await response.json();
      
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              A Primeira Inteligência Artificial
              <span className="block mt-2">para Cristãos do Brasil</span>
            </h1>
            
            <div className="mt-12">
              <Button
                onClick={() => setStep(1)}
                size="lg"
                className="bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 px-12 py-6 text-lg"
              >
                Testar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="max-w-2xl mx-auto px-6 py-20 text-center">
            <div className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
              + de 3.000 cristãos estão usando essa Inteligência Artificial para criar orações, 
              ler biblia e ter acesso as melhores orações para sua situação atual.
            </div>
            <Button
              onClick={() => setStep(2)}
              size="lg"
              className="mt-8 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 px-12 py-6 text-lg"
            >
              Continuar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="max-w-2xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Você sabe o maior problema das Inteligências Artificiais atualmente?
            </h2>
            <div className="flex flex-col gap-4 items-center">
              <Button
                onClick={() => {
                  setHasAnswered(true);
                  setTimeout(() => setStep(3), 500);
                }}
                size="lg"
                className="w-48 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 py-6 text-lg"
              >
                Sim
              </Button>
              <Button
                onClick={() => {
                  setHasAnswered(true);
                  setTimeout(() => setStep(3), 500);
                }}
                size="lg"
                className="w-48 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 py-6 text-lg"
              >
                Não
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-2xl mx-auto px-6 py-20 text-center">
            <div className="space-y-6 text-lg text-gray-200 mb-8">
              <p>
                Todas IAs tem informações genericas e não influencia o jovem a viver sua vida 
                a partir de elementos cristãos e bíblicos.
              </p>
              <p>
                Nosso objetivo é transformar o mundo caótico em mais apelo pela fé em Deus, 
                diversas tecnologias estão sendo criadas mas poucas são focadas no público cristão.
              </p>
              <p className="font-medium text-white">
                Foi assim que surgiu o Cristão IA.
              </p>
            </div>
            <Button
              onClick={() => setStep(4)}
              size="lg"
              className="mt-8 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 px-12 py-6 text-lg"
            >
              Continuar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        );

      case 4:
        return (
          <div className="max-w-2xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Parabéns liberamos um teste para você na nossa plataforma.
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Para continuar, por favor insira seu e-mail:
            </p>
            <div className="max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 mb-2 py-6 text-lg rounded-full"
              />
              {emailError && (
                <p className="text-red-400 text-sm mb-4">{emailError}</p>
              )}
              <Button
                onClick={handleEmailSubmit}
                size="lg"
                className="w-full mt-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 py-6 text-lg"
              >
                Continuar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-2xl mx-auto px-6 py-20 text-center">
            <p className="text-lg text-gray-200 mb-8">
              Para desenvolver tecnologia custa muito caro porém para viralizar essa ação 
              estamos oferecemos um teste por um valor simbólico.
            </p>
            <div className="text-xl font-medium mb-4">
              Escolha o valor do seu período teste de 14 dias:
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {[5, 10, 30].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`w-48 py-6 px-4 rounded-full transition-all duration-300 ${
                    selectedAmount === amount 
                    ? 'bg-white text-black scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <div className="text-xl font-semibold">R$ {amount}</div>
                  <div className="text-sm mt-1 opacity-80">valor teste</div>
                </button>
              ))}
            </div>
            
            {selectedAmount && (
              <div className="mt-8 animate-fade-in">
                <p className="text-sm text-gray-400 mb-4">
                  Após os 14 dias, sua assinatura será renovada por 69/mês.
                  Cancele quando quiser.
                </p>
                <Button
                  onClick={handleDonation}
                  size="lg"
                  disabled={isLoading}
                  className="bg-white hover:bg-gray-200 text-black font-semibold rounded-full transition-all duration-300 px-12 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processando...' : 'Ativar Período Teste!'}
                </Button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-normal tracking-[-0.03em] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        {renderStep()}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-white/10">
        <div className="text-center">
          <div className="text-gray-400 text-sm">
            © 2024 Cristão AI™
          </div>
        </div>
      </footer>
    </div>
  );
}
