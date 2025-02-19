"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../auth/context/AuthContext";
import { useState } from "react";

// Simple SVG icons as components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function Header() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide header on auth pages
  const isAuthPage = pathname.startsWith("/auth");
  if (isAuthPage) return null;

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-4 border-b border-purple-500/30">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
              ระบบจองห้องประชุมมหาวิทยาลัยราชภัฏบุรีรัมย์
            </p>
            
            {/* Mobile menu button */}
            <button 
              className="sm:hidden p-2 rounded-full hover:bg-purple-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
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
                  รายการห้องประชุม
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
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-800">
                    <span>บัญชีผู้ใช้</span>
                    <ChevronDownIcon />
                  </button>
                  <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">โปรไฟล์</Link>
                      <Link href="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">การจองของฉัน</Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        ออกจากระบบ
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/auth/login">
                    <button className="px-4 py-2 bg-transparent border border-yellow-300 text-yellow-100 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-800">
                      เข้าสู่ระบบ
                    </button>
                  </Link>
                  <Link href="/auth/register">
                    <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-800">
                      สมัครสมาชิก
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-purple-500/30 bg-purple-800/90 backdrop-blur-sm">
          <Link
            href="/"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive("/")
                ? "bg-yellow-500 text-gray-900"
                : "text-gray-100 hover:bg-purple-700"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            หน้าแรก
          </Link>
          <Link
            href="/user/room"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive("/user/room")
                ? "bg-yellow-500 text-gray-900"
                : "text-gray-100 hover:bg-purple-700"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            รายการห้องประชุม
          </Link>
          <Link
            href="/contact"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive("/contact")
                ? "bg-yellow-500 text-gray-900"
                : "text-gray-100 hover:bg-purple-700"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            ติดต่อ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;