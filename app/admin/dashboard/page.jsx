"use client";
import React from 'react';
import { BarChart3, Users, Calendar, Clock, Settings, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  // Sample statistics
  const stats = {
    totalBookings: 156,
    activeUsers: 48,
    availableRooms: 12,
    pendingRequests: 8
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">แดชบอร์ดผู้ดูแลระบบ</h1>
        <p className="text-gray-600">ยินดีต้อนรับสู่ระบบจัดการห้องประชุม</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-blue-100">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">การจองทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">ผู้ใช้งานที่ใช้งานอยู่</p>
              <p className="text-2xl font-bold text-gray-800">{stats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-purple-100">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">ห้องว่าง</p>
              <p className="text-2xl font-bold text-gray-800">{stats.availableRooms}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-yellow-100">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">คำขอที่รอดำเนินการ</p>
              <p className="text-2xl font-bold text-gray-800">{stats.pendingRequests}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">การจองล่าสุด</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((booking) => (
                <div key={booking} className="flex items-center justify-between p-4 border-b">
                  <div>
                    <p className="font-medium text-gray-800">ห้องประชุม {booking}</p>
                    <p className="text-sm text-gray-600">13:00 - 15:00</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    อนุมัติแล้ว
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">การดำเนินการด่วน</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Users className="h-5 w-5 text-blue-600 mb-2" />
                <p className="font-medium text-gray-800">จัดการผู้ใช้</p>
                <p className="text-sm text-gray-600">ดูและแก้ไขบัญชีผู้ใช้</p>
              </button>
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Calendar className="h-5 w-5 text-green-600 mb-2" />
                <p className="font-medium text-gray-800">จัดการการจอง</p>
                <p className="text-sm text-gray-600">ดูและจัดการการจองห้อง</p>
              </button>
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <BarChart3 className="h-5 w-5 text-purple-600 mb-2" />
                <p className="font-medium text-gray-800">รายงาน</p>
                <p className="text-sm text-gray-600">ดูสถิติและการวิเคราะห์</p>
              </button>
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Settings className="h-5 w-5 text-gray-600 mb-2" />
                <p className="font-medium text-gray-800">ตั้งค่า</p>
                <p className="text-sm text-gray-600">กำหนดค่าระบบ</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;