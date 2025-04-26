export const stepStyles = {
  container: "h-[100dvh] flex flex-col",
  content: "flex-1 overflow-y-auto",
  section: "space-y-6 p-4",
  
  // Header styles
  header: "text-center space-y-2",
  title: "text-xl font-semibold text-gray-900",
  subtitle: "text-gray-600 text-sm",

  // Grid styles
  grid: "grid grid-cols-2 gap-2",
  
  // Button styles
  button: {
    base: "p-3 rounded-lg border transition-all duration-200",
    selected: "border-gray-900 bg-gray-50",
    unselected: "border-gray-200 hover:border-gray-400",
    text: "text-base",
    description: "text-xs text-gray-500",
  },

  // Bottom navigation
  bottomNav: {
    container: "sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100",
    wrapper: "space-y-3",
    primary: "w-full h-12 rounded-xl font-medium text-base transition-all duration-200",
    primaryEnabled: "bg-gray-900 text-white hover:bg-gray-800",
    primaryDisabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
    back: "mx-auto text-gray-500 hover:text-gray-900 transition-colors text-xs flex items-center gap-2"
  }
}; 