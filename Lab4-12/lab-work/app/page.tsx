export default function Home() {
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">

        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’re glad you&apos;re here! Explore our content and learn more about what we do.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition group">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We aim to deliver high-quality experiences and meaningful content.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition group">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition">
              What We Do
            </h2>
            <p className="text-gray-600">
              Learn more about our services, ideas, and ongoing projects.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition group">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Have questions? Reach out anytime—we’re here to help.
            </p>
          </div>

        </section>
      </div>
    </>
  );
}
