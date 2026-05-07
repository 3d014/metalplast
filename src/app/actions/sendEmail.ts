'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(formData: FormData): Promise<SendEmailResult> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    await resend.emails.send({
      from: 'Metalplast Contact <onboarding@resend.dev>',
      to: 'drapic397@gmail.com',
      replyTo: email,
      subject: `[Metalplast] ${subject}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
