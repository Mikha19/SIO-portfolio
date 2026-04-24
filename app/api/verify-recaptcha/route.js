import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json({ success: false, error: 'missing-token' }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET;
    if (!secret) {
      console.error('RECAPTCHA_SECRET not configured');
      return NextResponse.json({ success: false, error: 'server-misconfigured' }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await res.json();

    // data.success is boolean; optionally check score if using v3
    if (data.success) {
      return NextResponse.json({ success: true, score: data.score ?? null });
    }

    return NextResponse.json({ success: false, data }, { status: 400 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'server-error' }, { status: 500 });
  }
}
