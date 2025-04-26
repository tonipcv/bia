export const metadata = {
  metadataBase: new URL('https://vuom.com'),
  title: {
    default: 'VUOM | Beauty Tech Innovation',
    template: '%s | VUOM'
  },
  description: 'VUOM é uma empresa de beauty tech que revoluciona a beleza através de protocolos faciais inovadores baseados na tecnologia coreana. | VUOM is a beauty tech company revolutionizing beauty through innovative facial protocols based on Korean technology.',
  keywords: [
    'beauty tech',
    'tecnologia coreana',
    'korean beauty technology',
    'inovação em beleza',
    'beauty innovation',
    'protocolos faciais',
    'facial protocols',
    'rejuvenescimento natural',
    'natural rejuvenation',
    'k-beauty tech'
  ],
  authors: [{ name: 'VUOM' }],
  creator: 'VUOM',
  publisher: 'VUOM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vuom.com',
    title: 'VUOM | Beauty Tech Innovation',
    description: 'VUOM: Revolucionando a beleza com tecnologia coreana avançada. Descubra nossos protocolos faciais inovadores para resultados transformadores. | VUOM: Revolutionizing beauty with advanced Korean technology. Discover our innovative facial protocols for transformative results.',
    siteName: 'VUOM',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VUOM - Beauty Tech Innovation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VUOM | Beauty Tech Innovation',
    description: 'VUOM: Revolucionando a beleza com tecnologia coreana avançada. Descubra nossos protocolos faciais inovadores para resultados transformadores. | VUOM: Revolutionizing beauty with advanced Korean technology.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
