import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  // Check for secret to confirm this is a valid request
  if (request.headers.get('x-tina-webhook-secret') !== process.env.TINA_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate the home page
    revalidatePath('/');
    // Revalidate the FAQs page
    revalidatePath('/faqs');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}