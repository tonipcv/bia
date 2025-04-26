"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function SuccessPage() {
  useEffect(() => {
    // Track conversion
    try {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          currency: 'GBP',
          value: 19.00
        });
      }

      if ((window as any).gtag) {
        (window as any).gtag('event', 'purchase', {
          currency: 'GBP',
          value: 19.00,
          items: [
            {
              id: 'face-protocol-uk',
              name: 'Face Protocol UK',
              quantity: 1
            }
          ]
        });
      }
    } catch (error) {
      console.error('Error tracking conversion:', error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={48}
            className="h-12 w-auto mx-auto brightness-0"
          />
        </div>

        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Thank you for your purchase!
          </h1>

          <p className="text-gray-600 mb-8">
            You will receive an email with your access details shortly. Our team will contact you via WhatsApp to start your transformation journey.
          </p>

          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 