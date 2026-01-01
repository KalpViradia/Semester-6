import Link from 'next/link';

export default function About() {
    return (
        <>
            <div className="p-6">

                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        About Us
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are a passionate team committed to creating meaningful experiences
                        and delivering high-value content for our users.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To inspire, empower, and connect people through thoughtful design,
                            quality resources, and a commitment to continuous improvement.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To build a platform that brings value to everyone and helps shape a
                            better digital future through creativity and innovation.
                        </p>
                    </div>

                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                We believe in honesty and transparency in everything we do.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Constantly creating new ideas to improve user experiences.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl font-semibold text-gray-800">Growth</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Helping our team and community grow and evolve continuously.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Meet Our Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>
                            <h3 className="text-lg font-semibold text-gray-800">Person 1</h3>
                            <p className="text-gray-500 text-sm">Founder & CEO</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>
                            <h3 className="text-lg font-semibold text-gray-800">Person 2</h3>
                            <p className="text-gray-500 text-sm">Lead Designer</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>
                            <h3 className="text-lg font-semibold text-gray-800">Person 3</h3>
                            <p className="text-gray-500 text-sm">Developer</p>
                        </div>

                    </div>
                </section>

                <section className="bg-blue-700 text-white p-8 rounded-xl shadow-md text-center mt-12">
                    <h3 className="text-2xl font-semibold mb-3">Want to Learn More?</h3>
                    <p className="text-white/80 max-w-xl mx-auto mb-6">
                        We’d love to share more about our mission and what we’re building.
                    </p>
                    <Link
                        href="/contact"
                    >
                        <span
                            className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg no-underline"
                        >
                            Contact Us
                        </span>
                    </Link>
                </section>

            </div>
        </>
    );
}