"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-4 border-b border-purple-500/30">
          <div className="flex items-center justify-between">
            <Link href="/">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                ระบบจองห้องประชุม
              </p>
            </Link>
          </div>
        </div>

        <div className="relative flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <div className="flex-1 flex items-center justify-between">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive("/")
                      ? "bg-yellow-500 text-gray-900 shadow-md"
                      : "text-gray-100 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  หน้าแรก
                </Link>
                <Link
                  href="/user/room"
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive("/user/room")
                      ? "bg-yellow-500 text-gray-900 shadow-md"
                      : "text-gray-100 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  ห้องประชุม
                </Link>
                <Link
                  href="/contact"
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive("/contact")
                      ? "bg-yellow-500 text-gray-900 shadow-md"
                      : "text-gray-100 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  ติดต่อ
                </Link>
              </div>
            </div>

            <div className="flex space-x-3">
              <Link href="/login">
                <button className="px-4 py-2 bg-yellow-500 bg-transparent border border-yellow-300 text-yellow-100 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200">
                  เข้าสู่ระบบ
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 bg-gray-800 bg-transparent border border-gray-300 text-gray-100 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-200">
                  สมัครสมาชิก
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden absolute top-4 right-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-200 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-purple-800 pb-3 px-4">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                isActive("/")
                  ? "bg-yellow-500 text-gray-900"
                  : "text-white hover:bg-purple-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              หน้าแรก
            </Link>
            <Link
              href="/user/room"
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                isActive("/user/room")
                  ? "bg-yellow-500 text-gray-900"
                  : "text-white hover:bg-purple-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ห้องประชุม
            </Link>
            <Link
              href="/contact"
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                isActive("/contact")
                  ? "bg-yellow-500 text-gray-900"
                  : "text-white hover:bg-purple-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ติดต่อ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
