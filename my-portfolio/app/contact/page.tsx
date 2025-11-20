'use client';

import { useState } from 'react';
import SocialMedia from '../components/socialMedia';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-8 py-16">
            <h1 className="mb-8 text-3xl font-light text-zinc-400 text-center">
                Do you have an idea? Let's make it real together!
            </h1>
            
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="space-y-6">
                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-4 rounded-xl">
                                <svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-white mb-2">Email</h2>
                                <a href="mailto:bruqua@hotmail.com" className="text-cyan-500 text-lg hover:text-cyan-400">
                                    bruqua@hotmail.com
                                </a>
                                <p className="text-zinc-400 text-sm mt-2 italic">Response within 24h</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-4 rounded-xl">
                                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-white mb-2">Ubication</h2>
                                <p className="text-cyan-500 text-lg">Montevideo, Uruguay</p>
                                <p className="text-zinc-400 text-sm mt-2 italic">Remote work</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                        <SocialMedia />
                    </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="bg-transparent">
                    <h2 className="text-4xl font-bold text-white mb-4">Send me a message</h2>
                    <p className="text-zinc-400 mb-8">Tell me about your project</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                        
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                        
                        <div>
                            <textarea
                                name="message"
                                placeholder="Describe your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                            />
                        </div>
                        <div className="btn-gradient">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-zinc-900 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        
                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400">
                                Failed to send message. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </main>
    );
}