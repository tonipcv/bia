"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { Check, ArrowRight, X } from "lucide-react";

export default function StepThirtyTwo() {
  const { setCurrentStep, currentStep } = useQuizContext();
  const [email, setEmail] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const isValid = email && emailConsent && termsAccepted;

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="font-bold">Final Step</span>
        </div>
        <h1 className="text-[32px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight mb-4">
          <span className="text-gray-900">Enter Your Email to Receive Your</span>
          <br />
          <span className="text-black">Wall Pilates Plan</span>
        </h1>
        <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
          <p className="text-gray-900 text-lg font-medium tracking-[-0.03em] leading-relaxed">
            Your personalized fitness journey is just one click away!
          </p>
        </div>
      </div>

      {/* Email Input with Icon */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full h-16 pl-12 pr-6 rounded-xl border-2 border-gray-200 bg-white
                   placeholder-gray-400 text-gray-900 text-lg outline-none
                   focus:border-black focus:ring-2 focus:ring-black/20 transition-all"
        />
      </div>

      {/* Stats Card */}
      <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-md border border-gray-200">
        <h2 className="text-black text-4xl font-bold mb-2">
          500,000+
        </h2>
        <p className="text-gray-700 text-lg">
          women have already joined
        </p>
      </div>

      {/* Email Consent */}
      <div className="max-w-md mx-auto bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-start gap-4 mb-4">
          <button
            onClick={() => setEmailConsent(!emailConsent)}
            className={`w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center 
              transition-all duration-300 cursor-pointer
              ${emailConsent 
                ? 'bg-black border-black' 
                : 'border-gray-300 bg-white hover:border-black'}`}
          >
            {emailConsent && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <p className="text-gray-700 text-sm leading-relaxed">
            I agree to receive future emails from Reverse Health and its affiliates 
            with tips, offers, products and more.
          </p>
        </div>

        {/* Terms Acceptance */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => setTermsAccepted(!termsAccepted)}
            className={`w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center 
              transition-all duration-300 cursor-pointer
              ${termsAccepted 
                ? 'bg-black border-black' 
                : 'border-gray-300 bg-white hover:border-black'}`}
          >
            {termsAccepted && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <p className="text-gray-700 text-sm leading-relaxed">
            I acknowledge that I have read, understood, and accepted the{' '}
            <button 
              onClick={() => setShowTerms(true)}
              className="text-black font-medium hover:text-gray-600 transition-colors"
            >
              Terms of Use
            </button>
            {' '}and{' '}
            <button
              onClick={() => setShowTerms(true)}
              className="text-black font-medium hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8 max-w-md mx-auto">
        <button 
          onClick={() => isValid && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 rounded-lg relative flex items-center justify-center 
            transition-all duration-200
            ${isValid 
              ? 'bg-black hover:bg-gray-800' 
              : 'bg-gray-300 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg font-medium">Get My Wall Pilates Plan</span>
          {isValid && (
            <div className="absolute right-4 w-10 h-10 bg-gray-800 rounded-lg 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-110">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
        {!isValid && (
          <p className="text-gray-600 text-xs text-center mt-2">Please complete all fields to continue</p>
        )}
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto shadow-xl border border-gray-200 animate-fadeIn">
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
              <div>
                <div className="inline-flex items-center bg-gray-100 text-gray-900 px-3 py-1 rounded-full mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold">Important Information</span>
                </div>
                <h2 className="text-gray-900 text-2xl md:text-3xl font-bold">
                  Terms & Privacy Policy
                </h2>
              </div>
              <button 
                onClick={() => setShowTerms(false)}
                className="text-gray-400 hover:text-black transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:no-underline hover:prose-a:underline">
              <h3>Privacy Policy</h3>
              <p>We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
              
              <h3>Terms of Use</h3>
              <p>By accessing and using our services, you agree to comply with these Terms of Use. Our services are intended for personal use only, and you agree not to misuse any information provided.</p>
              
              <h3>Data Collection</h3>
              <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or fill out a form. This may include your name, email address, and other personal details.</p>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setShowTerms(false)}
                  className="w-full md:w-auto px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 