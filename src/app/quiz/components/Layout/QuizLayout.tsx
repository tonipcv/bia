import React from 'react';
import { useQuizState } from '../../hooks/useQuizState';

interface QuizLayoutProps {
  children: React.ReactNode;
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({ children }) => {
  const { currentStep } = useQuizState();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="relative">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${(currentStep / 37) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
              />
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">
              Step {currentStep} of 37
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
}; 