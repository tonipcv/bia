import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, utmSource, utmMedium, utmCampaign } = body;

    // Basic validation
    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Saving lead:', { name, email, whatsapp }); // Debug log

    // Save lead data
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        whatsapp: whatsapp.replace(/\D/g, ''), // Remove non-digits
        utmSource,
        utmMedium,
        utmCampaign,
      },
    });

    console.log('Lead saved:', lead); // Debug log

    return NextResponse.json({
      success: true,
      data: lead
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 