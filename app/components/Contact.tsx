'use client';
import { FormEvent } from 'react';

const Contact = () => {
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Form submitted! (This is a placeholder)");
    }

    return (
        <section id="contact" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto"></div>
                </div>
                
                <div className="glass-card p-6 md:p-12 rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex flex-col justify-between h-full space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">Let&apos;s Connect</h3>
                                <p className="text-gray-400 leading-relaxed text-justify">
                                    Finishing my Master’s in Data Science 🎓 and ready to turn data into impact. 
                                    Actively seeking opportunities in data science, machine learning, and AI — 
                                    let’s collaborate and make something amazing!
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <a href="mailto:mayankkantharia01@gmail.com"
                                    className="w-12 h-12 shrink-0 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition">
                                    <i className="mdi mdi-email-outline text-2xl"></i>
                                </a>
                                <div className="flex flex-col justify-center min-w-0">
                                    <h4 className="font-medium text-white">Email</h4>
                                    <p className="text-gray-400 hover:text-primary transition wrap-break-word leading-relaxed">
                                        <a href="mailto:mayankkantharia01@gmail.com">mayankkantharia01@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
                                    <div className="flex space-x-4">
                                        <a href="https://github.com/mayankkantharia" target="_blank"
                                        className="w-12 h-12 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition">
                                            <i className="mdi mdi-github text-2xl"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/mayankkantharia/" target="_blank"
                                        className="w-12 h-12 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition">
                                            <i className="mdi mdi-linkedin text-2xl"></i>
                                        </a>
                                        <a href="https://www.instagram.com/mayankkantharia" target="_blank"
                                        className="w-12 h-12 rounded-full bg-dark-light hover:bg-primary/10 border border-gray-700 flex items-center justify-center transition">
                                            <i className="mdi mdi-instagram text-2xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                        <input type="text" id="name" className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                        <input type="email" id="email" className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                    <input type="text" id="subject" className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea id="message" rows={3} className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2">
                                        <span>Send Message</span>
                                        <i className="mdi mdi-send"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;