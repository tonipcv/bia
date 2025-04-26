import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { whatsapp, utmSource, utmMedium, utmCampaign } = body;

    // Validate WhatsApp number
    if (!whatsapp || whatsapp.length < 10) {
      return NextResponse.json(
        { error: 'Invalid WhatsApp number' },
        { status: 400 }
      );
    }

    // Save to database
    const quizResponse = await prisma.quizResponse.create({
      data: {
        whatsapp,
        utmSource,
        utmMedium,
        utmCampaign,
      },
    });

    return NextResponse.json(quizResponse);
  } catch (error) {
    console.error('Error saving WhatsApp:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 