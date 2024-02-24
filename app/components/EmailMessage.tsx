// components/EmailMessage.tsx

import * as React from 'react';

type MessageProps = {
    name: string;
    address: string;
    zipCode: number;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const EmailMessage = ({ name, address, zipCode, email, phone, subject, message }: MessageProps) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold">{subject}</h2>
                <p>{message}</p>
            </div>
            <div className="border-t border-gray-300 mt-12">
                <h3 className="text-lg font-bold mb-2">Contact Information</h3>
                <p className="mb-1 font-medium font-bold text-lg">{name}</p>
                <p className="mb-1 text-sm text-gray-600 italic">{address} - {zipCode}</p>
                <p className="mb-1 text-sm text-gray-600"><a href={`mailto:${email}`}>{email}</a></p>
                <p className="mb-1 text-sm text-gray-600"><a href={`tel:${phone}`}>{phone}</a></p>
            </div>
        </div>

    );
};

export default EmailMessage;