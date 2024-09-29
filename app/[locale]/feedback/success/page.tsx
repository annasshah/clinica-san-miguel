'use client';

import React from 'react';

const ThankYouPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  p-8">
            {/* Header Section */}
            <div className='max-w-3xl'>
                <div className="mb-8">
                    <img
                        src="/assets/discount-icon.png" // Ensure this image is in the public folder
                        alt="MyClinic Logo"
                        className="w-20"
                    />
                </div>

                {/* Main Content */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Thank You for Your Feedback – Enjoy 10% Off on Your Next Visit!
                </h1>

                <p className="text-lg text-gray-700 mb-4">
                    Dear <span className="font-semibold">Marco Barfield</span>,
                </p>

                <p className="text-gray-700 mb-4  max-w-xl">
                    We sincerely appreciate you taking the time to share your feedback with us. Your input helps us improve and deliver the best possible care at Clínica San Miguel.
                </p>

                <p className="text-gray-700 mb-4  max-w-xl">
                    As a token of our gratitude, we are pleased to offer you <span className="font-bold">10% off</span> on your next visit! Simply use the promo code <span className="font-bold">[Promo Code]</span> when you schedule your appointment or make your next purchase.
                </p>

                <p className="text-gray-700 mb-4  max-w-xl">
                    We look forward to welcoming you back soon!
                </p>

                <p className="text-gray-700 mb-6  max-w-xl">
                    Warm regards,<br />
                    Team,<br />
                    Clínica San Miguel
                </p>

                {/* Footer */}
                <div className="mt-8 text-gray-600 ">
                    Manage by MyClinicMD
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
