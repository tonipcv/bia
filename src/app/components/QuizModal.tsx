"use client";

import React from 'react';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Rocket, User, Mail, Phone, MessageSquare, Target, Instagram, DollarSign, TrendingUp, Stars } from "lucide-react";

type QuizStep = {
  title: string;
  subtitle: string;
  type: 'welcome' | 'input' | 'radio' | 'checkbox' | 'final';
  options?: string[];
  inputType?: string;
  placeholder?: string;
  icon: React.ReactElement;
};

const steps: QuizStep[] = [
  {
    title: "Let's create your dream app in record time!",
    subtitle: "Answer a few questions to help us understand your vision better.",
    type: "welcome",
    icon: <Rocket className="w-8 h-8" />
  },
  {
    title: "What's your name?",
    subtitle: "Let's start with an introduction",
    type: "input",
    inputType: "text",
    placeholder: "Enter your full name",
    icon: <User className="w-6 h-6" />
  },
  {
    title: "What's your email?",
    subtitle: "We'll use this to send you important updates",
    type: "input",
    inputType: "email",
    placeholder: "your@email.com",
    icon: <Mail className="w-6 h-6" />
  },
  {
    title: "What's your phone number?",
    subtitle: "For quick communication about your project",
    type: "input",
    inputType: "tel",
    placeholder: "Your phone number",
    icon: <Phone className="w-6 h-6" />
  },
  {
    title: "Preferred contact method",
    subtitle: "How would you like us to reach you?",
    type: "radio",
    options: ["WhatsApp", "Email", "Phone Call"],
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Your industry",
    subtitle: "Select all that apply to your business",
    type: "checkbox",
    options: ["Digital Marketing", "Fitness & Health", "Medical", "Finance & Trading", "Other"],
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Your Instagram handle",
    subtitle: "Let's connect on social media",
    type: "input",
    inputType: "text",
    placeholder: "@yourusername",
    icon: <Instagram className="w-6 h-6" />
  },
  {
    title: "Current annual online revenue",
    subtitle: "This helps us understand your business scale",
    type: "radio",
    options: [
      "Up to $100k",
      "$100k - $1M",
      "$1M - $10M",
      "Above $10M"
    ],
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    title: "Revenue target",
    subtitle: "Where do you want to be?",
    type: "radio",
    options: [
      "$100k - $1M",
      "$1M - $10M",
      "$10M - $100M",
      "Above $100M"
    ],
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Ready to Transform Your Business",
    subtitle: "Apps are the future of business growth. Let's build your digital empire together.",
    type: "final",
    icon: <Stars className="w-8 h-8" />
  }
];

export default function QuizModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSuccess(true);
      console.log(formData);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setCurrentStep(0);
        setFormData({});
      }, 3000);
    }
  };

  const handleInputChange = (value: string | string[]) => {
    setFormData({
      ...formData,
      [steps[currentStep].title]: value
    });
  };

  const renderStep = () => {
    const step = steps[currentStep];

    const StepHeader = () => (
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
          {step.icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
          <p className="text-white/60">{step.subtitle}</p>
        </div>
      </div>
    );

    switch (step.type) {
      case 'welcome':
      case 'final':
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-tr from-white/20 to-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-white/60">{step.subtitle}</p>
          </div>
        );

      case 'input':
        return (
          <div className="space-y-4">
            <StepHeader />
            <Input
              type={step.inputType}
              placeholder={step.placeholder}
              value={formData[step.title] || ''}
              onChange={(e) => handleInputChange(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
            />
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-4">
            <StepHeader />
            <RadioGroup
              value={formData[step.title] || ''}
              onValueChange={handleInputChange}
              className="space-y-2"
            >
              {step.options?.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 p-4 border border-white/20 rounded-xl cursor-pointer hover:bg-white/5 transition-all"
                >
                  <RadioGroupItem value={option} id={option} className="border-white/20 text-white" />
                  <span className="text-white/80">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-4">
            <StepHeader />
            <div className="space-y-2">
              {step.options?.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 p-4 border border-white/20 rounded-xl cursor-pointer hover:bg-white/5 transition-all"
                >
                  <Checkbox
                    checked={(formData[step.title] || []).includes(option)}
                    onCheckedChange={(checked) => {
                      const currentValues = formData[step.title] || [];
                      if (checked) {
                        handleInputChange([...currentValues, option]);
                      } else {
                        handleInputChange(currentValues.filter((v: string) => v !== option));
                      }
                    }}
                    className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <span className="text-white/80">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-white/10 text-white sm:max-w-xl">
        {showSuccess ? (
          <div className="text-center py-6">
            <div className="w-24 h-24 bg-gradient-to-tr from-white/20 to-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Application Submitted Successfully!
            </h3>
            <p className="text-lg text-white/60">
              We'll be in touch shortly to discuss your project.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-white transition-all duration-500 ease-in-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            {renderStep()}
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full bg-white text-black hover:bg-white/90"
            >
              {currentStep === steps.length - 1 ? 'Finalizar' : 'Continuar'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 