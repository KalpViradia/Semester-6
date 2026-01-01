export default function Contact() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">

                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-center mb-8">
                        We&apos;re here to help! Reach out to us anytime.
                    </p>

                    <div className="space-y-6">

                        <div className="flex items-start space-x-4">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-700">Email</h2>
                                <p className="text-gray-500">support@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
                                <p className="text-gray-500">+91 9999999999</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-700">Address</h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Rajkot - Morbi Highway,<br />
                                    Rajkot, 363650
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
