'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const taglines = [
    "From raw data to actionable intelligence - powered by machine learning and AI.",
    "Turning complex datasets into smarter decisions and real-world impact 🌍.",
    "Driving innovation through data science, machine learning, and AI 🚀.",
    "Unlocking insights that power better strategies and solutions 🔑.",
];

const Hero = () => {
    const [currentTagline, setCurrentTagline] = useState(taglines[0]);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % taglines.length;
            setCurrentTagline(taglines[index]);
        }, 4500); // Total cycle time: 1s fade + 3.5s display

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="gradient-text">Mayank Kantharia</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-300">
                            Data Scientist
                        </h2>
                        <p className="text-lg text-gray-400 max-w-lg transition-opacity duration-500 ease-in-out">
                            {currentTagline}
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#contact" className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2">
                                <span>Get In Touch</span>
                                <i className="mdi mdi-email-outline"></i>
                            </a>
                            <a href="/Resume Mayank Kantharia - Australia.pdf" target="_blank" className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2">
                                <span>Download Resume</span>
                                <i className="mdi mdi-download-outline"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
                        <div className="relative w-full h-96 flex items-center justify-center">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl transform -rotate-6"></div>
                            <div className="relative w-80 h-80 bg-dark rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center">
                                <Image src="/1.jpeg" alt="Abstract representation" width={320} height={320} className="brightness-120 opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;