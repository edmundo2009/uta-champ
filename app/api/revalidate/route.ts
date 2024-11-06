// app/api/revalidate/route.ts
import { revalidateFAQs } from '@/lib/faq/service';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // You might want to add authentication here
    // const authHeader = request.headers.get('x-webhook-secret');
    // if (authHeader !== process.env.WEBHOOK_SECRET) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // Check if the updated content is FAQ-related
    if (body.data?.relativePath?.includes('faqs.md')) {
      await revalidateFAQs();
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    return NextResponse.json({ revalidated: false, message: 'Not FAQ content' });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
  }
}