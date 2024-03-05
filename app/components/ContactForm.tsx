import React, { useState } from "react";
import { json } from "@remix-run/node";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";


type FormInput = {
    name: string;
    address: string;
    zipCode: number;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const ContactForm = () => {

    const phoneNumbers = [
        { number: '+1 410-320-7147', info: 'Lubrication Equipment Services' },
        { number: '+1 410-582-0600', info: 'Accounts Payable/Receivable' }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<FormInput>();

    async function onSubmit(formData: FormInput) {
        await fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({
                name: formData.name,
                address: formData.address,
                zipCode: formData.zipCode,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
            }),
        }).then(() => {
            // Notification
            toast.success("Your email message has been sent successfully");
            setIsModalOpen(true);
        });
        reset();
    }

    return (
        <div className="bg-zinc-950 text-white pt-24 pb-6 md:px-12 px-6">
            {/* Modal to display success message */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-black rounded-md shadow-md z-50 border-2 border-white">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Success!</h2>
                            <p className="mb-4">Your email message has been sent successfully.</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full block mx-auto"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information Section */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Contact</h2>
                        <p className="text-base mb-8 mr-20">Come visit our service centers and experience the power of expert lubrication support!</p>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p>512 N. Crain Highway, Suite #13</p>
                            <p>Glen Burnie, MD 21061</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Email</h3>
                            <a href="mailto:sales@eastlube.com" className="text-lg hover:underline">
                                sales@eastlube.com
                            </a>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Phone</h3>
                            {phoneNumbers.map((phone, index) => (
                                <p key={index} className="mb-1">
                                    <a href={`tel:${phone.number}`} className="hover:underline">{phone.number}</a> - {phone.info}
                                </p>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Hours</h3>
                            <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
                            <p>Saturday - Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-base font-thin mb-1">
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                    {...register('name')}
                                />
                            </div>
                            <div className="mb-4 flex">
                                <div className="mr-2 w-full">
                                    <label htmlFor="address" className="block text-base font-thin mb-1">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder="Enter your address"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                        {...register('address')}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="zipCode" className="block text-base font-thin mb-1">
                                        ZIP Code
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        placeholder="Enter your ZIP code"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                        {...register('zipCode')}
                                    />
                                </div>

                            </div>
                            <div className="mb-4 flex"> {/* Wrap email and phone in a flex container */}
                                <div className="mr-2 w-full">
                                    <label htmlFor="email" className="block text-base font-thin mb-1">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                        {...register('email')}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="block text-base font-thin mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                        {...register('phone')}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-base font-thin mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter the subject"
                                    className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                    {...register('subject')}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-base font-thin mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message here ..."
                                    className="w-full border border-white rounded-md py-3 px-3 text-white bg-transparent"
                                    {...register('message')}
                                ></textarea>
                            </div>
                            <div className="mb-4 flex justify-center"> {/* Wrap the button in a flex container and center it */}
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="bg-white text-black border border-black rounded-md py-2 px-6 hover:bg-zinc-300"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactForm;
