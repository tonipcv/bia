"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

const benefits = [
  {
    title: "Natural Harmonization",
    description: "Facial rejuvenation without invasive procedures",
    color: "from-neutral-50 to-gray-50"
  },
  {
    title: "Natural Lifting",
    description: "Facial muscle toning for a lifting effect",
    color: "from-stone-50 to-neutral-50"
  },
  {
    title: "Facial Contouring",
    description: "Naturally defines and shapes facial contours",
    color: "from-gray-50 to-stone-50"
  }
];

const features = [
  {
    text: "Wrinkle Reduction",
    description: "Naturally smooths expression lines"
  },
  {
    text: "Firmer Skin",
    description: "Increases skin elasticity and firmness"
  },
  {
    text: "Rejuvenation",
    description: "More youthful and natural appearance"
  }
];

export default function StepThree() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/dep.avif"
            alt="Testimonials"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-light text-gray-900 tracking-tight">
            Natural Facial Harmonization
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Transform your face with 100% natural Korean techniques, without invasive procedures
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-r ${benefit.color} border border-gray-100 transition-all duration-300 hover:shadow-md`}
            >
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 text-lg tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-100">
          <h3 className="font-light text-xl text-gray-900 tracking-tight">
            Natural Results
          </h3>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-1">
                <p className="font-medium text-gray-900 tracking-tight">{feature.text}</p>
                <p className="text-gray-500 text-sm font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentStep(4)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-6 py-4 px-8 w-[90%] max-w-md rounded-full text-white font-light bg-black hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg tracking-wide"
      >
        Get your plan
      </button>
    </div>
  );
} 