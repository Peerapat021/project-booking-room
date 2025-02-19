"use client";
import Link from "next/link";
import { useState } from "react";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login attempted with:", credentials);
  };

  return (
    <section className="py-12">
      <div className="flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Purple header bar */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-900 px-6 py-4">
            <h2 className="text-2xl font-bold text-center text-white">
              เข้าสู่ระบบ
            </h2>
          </div>

          <div className="p-6 space-y-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  อีเมล
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-3 transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-800"
                  >
                    รหัสผ่าน
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      ลืมรหัสผ่าน?
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-3 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600 accent-purple-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  จดจำฉันไว้
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg px-5 py-3 text-center hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                >
                  เข้าสู่ระบบ
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 pt-2">
                <div className="h-px bg-gray-300 w-full"></div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  หรือ
                </span>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>

              <p className="text-sm text-center text-gray-700 mt-4">
                ยังไม่มีบัญชี?{" "}
                <Link
                  href="/auth/register"
                  className="text-purple-600 font-medium hover:text-purple-800 underline-offset-2 hover:underline transition-colors"
                >
                  สมัครสมาชิกที่นี่
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
