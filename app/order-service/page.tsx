'use client';

import Link from 'next/link';

export default function OrderServicePage() {
    // Program items for the order of service
    const programItems = [
        'Pre-event Experience',
        'Opening Session',
        'Introductory Session',
        'High Level Panel Discussion',
        'Musical Interlude/ Wealth Quiz by MC',
        'Launch Ceremony',
        'National Anthem',
        'Welcome Address by Permanent Secretary, FMYD',
        'Mission and Vision of Investonaire Academy',
        'Goodwill message',
        'Remarks by Guest of Honour, Honourable Minister of Women Affairs',
        'Prayer for the Celebrant',
        'Live Performance - Guest Artist',
        'Video Presentation - Showcasing',
        'Youth Testimonial and Presentation of Funded Trading Accounts and Gifts',
        'Keynote Address by Honourable Minister of Youths',
        'Launch of Learning Management System (LMS)',
        'Group Photo',
        'Closing Remarks',
        'Lunch is served',
        'Meet, Greet and Networking',
    ];

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm md:max-w-md lg:max-w-lg">
                <h1 className="text-xl md:text-2xl font-bold text-yellow-600 mb-4 text-center">
                    ORDER OF SERVICE
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">
                    Diamond Jubilee Celebration
                </h2>

                <p className="text-gray-600 text-sm md:text-base mb-6 text-center">
                    25th December 2025 • 10:00 AM
                </p>

                <div className="space-y-3 mb-6">
                    {programItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-100 pb-2"
                        >
                            <span className="text-sm text-gray-800">{item}</span>
                        </div>
                    ))}
                </div>

                <Link href="/">
                    <button className="w-full bg-black text-white font-semibold py-3 rounded-md border border-yellow-500 hover:bg-gray-900 active:bg-yellow-600 active:border-black transition">
                        BACK TO INVITATION
                    </button>
                </Link>
            </div>
        </main>
    );
}
