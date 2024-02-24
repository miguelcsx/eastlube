// routes/send.tsx
import { json } from '@remix-run/node';
import { Resend } from 'resend';
import EmailMessage from '~/components/EmailMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

export const action = async ({ request }: { request: Request }) => {
    if (request.method === 'POST') {
        const formData = new URLSearchParams(await request.text());
        const message = JSON.parse(Object.keys(Object.fromEntries(formData.entries()))[0]);
        const { data, error } = await resend.emails.send({
            from: 'Eastlube Website <sales@eastlube.com>',
            to: ['sales@eastlube.com'],
            subject: `${message.name} needs info about ${message.subject} - Eastlube website`,
            react: EmailMessage({ 
                name: message.name,
                address: message.address,
                zipCode: message.zipCode,
                email: message.email,
                phone: message.phone,
                subject: message.subject,
                message: message.message
            }),
        });

        if (error) {
            return json({ error }, 400);
        }

        return json(data, 200);
    }

    return json({ error: 'Method not allowed' }, 405);
};
