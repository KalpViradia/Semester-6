import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/pages/home" className="text-xl font-bold text-gray-900">
          Home
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/pages/about"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            About
          </Link>
          <Link
            href="/pages/contact"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Contact
          </Link>
          <Link
            href="/pages/students"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Students
          </Link>
          <Link
            href="/pages/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
