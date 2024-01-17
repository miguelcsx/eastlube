import React, { useState } from "react";
import { json } from "@remix-run/node";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactForm = () => {
    return (
        <div className="bg-zinc-950 text-white pt-24 pb-6 md:px-12 px-6">
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
                            <p>+1 833-880-PUMP (7867)</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Hours</h3>
                            <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
                            <p>Saturday - Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-base font-thin mb-1">
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
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
                                        name="address"
                                        placeholder="Enter your address"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="zipCode" className="block text-base font-thin mb-1">
                                        ZIP Code
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        placeholder="Enter your ZIP code"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
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
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="block text-base font-thin mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
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
                                    name="subject"
                                    placeholder="Enter the subject"
                                    className="w-full border border-white rounded-md py-2 px-3 text-white bg-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-base font-thin mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here ..."
                                    className="w-full border border-white rounded-md py-3 px-3 text-white bg-transparent"
                                ></textarea>
                            </div>
                            <div className="mb-4 flex justify-center"> {/* Wrap the button in a flex container and center it */}
                                <button
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
