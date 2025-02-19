"use client";
import Link from "next/link";
import { useState } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section className=" py-12">
      <div className="flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Purple header bar */}
          <div className="bg-gradient-to-r from-purple-700 to-purple-900 px-6 py-4">
            <h1 className="text-2xl font-bold text-center text-white">
              สมัครสมาชิก
            </h1>
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
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-3 transition-colors"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-3 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  ยืนยันรหัสผ่าน
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-3 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 accent-purple-600"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="acceptTerms"
                    className="font-light text-gray-700"
                  >
                    ฉันยอมรับ{" "}
                    <Link
                      href="#"
                      className="font-medium text-purple-600 hover:text-purple-800 underline-offset-2 hover:underline transition-colors"
                    >
                      เงื่อนไขและข้อตกลง
                    </Link>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg px-5 py-3 text-center hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                >
                  สมัครสมาชิก
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
                มีบัญชีอยู่แล้ว?{" "}
                <Link
                  href="/auth/login"
                  className="text-purple-600 font-medium hover:text-purple-800 underline-offset-2 hover:underline transition-colors"
                >
                  เข้าสู่ระบบที่นี่
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
