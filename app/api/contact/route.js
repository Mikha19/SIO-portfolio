import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'alexandremikhael1911@gmail.com',
            subject: `Portfolio Contact: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Nouveau message de contact</h2>
                    <p><strong>Nom:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
                        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
                    </div>
                </div>
            `,
            reply_to: email
        });

        if (data.error) {
            console.error('Resend API error:', data.error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        );
    }
}