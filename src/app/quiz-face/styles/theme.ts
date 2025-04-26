export const theme = {
  colors: {
    primary: '#35426A', // Navy color
    primaryHover: '#2A3557',
    text: {
      primary: '#1F2937', // gray-900
      secondary: '#4B5563', // gray-600
    },
    background: {
      gradient: {
        from: '#D6D2D3',
        to: '#F8FFFF'
      }
    }
  },
  fontFamily: {
    primary: 'Avenir, sans-serif'
  }
};

export const quizStyles = {
  container: 'pb-24 font-["Avenir"]',
  title: 'text-2xl font-semibold text-gray-900 font-["Avenir"]',
  subtitle: 'text-gray-600 text-lg font-["Avenir"]',
  description: 'text-gray-700 text-lg leading-relaxed font-["Avenir"]',
  button: 'w-full h-14 rounded-full font-medium text-lg bg-[#35426A] text-white hover:bg-[#2A3557] transition-all duration-200 shadow-lg font-["Avenir"]',
  optionButton: 'w-full p-4 text-left rounded-xl border border-gray-200 hover:border-[#35426A]/30 hover:bg-[#35426A]/5 transition-all duration-200 font-["Avenir"]',
}; 