'use client'
import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-blue-600">Dashboard Overview</h1>
                <p className="text-gray-600 mt-2">ดูข้อมูลและสถิติการใช้งานล่าสุดของระบบ</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* โปรไฟล์ผู้ใช้งาน */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">โปรไฟล์ผู้ใช้งาน</h2>
                    <p className="text-gray-700"><span className="font-bold">ชื่อ:</span> TikTokUser01</p>
                    <p className="text-gray-700"><span className="font-bold">อีเมล:</span> tiktok.user01@example.com</p>
                    <p className="text-gray-700"><span className="font-bold">TikTok ID:</span> 12345678</p>
                    <p className="text-gray-700"><span className="font-bold">Followers:</span> 250k</p>
                    <p className="text-gray-700"><span className="font-bold">Engagement Rate:</span> 5.4%</p>
                </div>

                {/* สถิติการใช้งาน */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">สถิติการใช้งาน</h2>
                    <p className="text-gray-700"><span className="font-bold">จำนวน API Calls:</span> 12,345</p>
                    <p className="text-gray-700"><span className="font-bold">ผู้ใช้งาน Active:</span> 750 คน</p>
                    <p className="text-gray-700"><span className="font-bold">เวลาเฉลี่ยที่ใช้งาน:</span> 15 นาที/เซสชัน</p>
                    <p className="text-gray-700"><span className="font-bold">จำนวน Video Uploads:</span> 350 ครั้ง</p>
                </div>

                {/* ข้อมูลแคมเปญ */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">ข้อมูลแคมเปญ</h2>
                    <div className="mb-4">
                        <p className="text-gray-700 font-bold">แคมเปญที่ 1: &ldquo;Summer Promo&ldquo;</p>
                        <p className="text-gray-600">Impressions: 50,000 | Clicks: 2,500 | CTR: 5%</p>
                    </div>
                    <div>
                        <p className="text-gray-700 font-bold">แคมเปญที่ 2: &ldquo;New Product Launch&ldquo;</p>
                        <p className="text-gray-600">Impressions: 75,000 | Clicks: 3,800 | CTR: 5.07%</p>
                    </div>
                </div>

                {/* การแจ้งเตือน */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">การแจ้งเตือน</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>08:00 AM: ระบบอัปเดต API เวอร์ชันใหม่เรียบร้อยแล้ว</li>
                        <li>09:15 AM: พบความผิดปกติในการเรียก API จาก IP 192.168.1.100</li>
                        <li>10:30 AM: API Calls เพิ่มขึ้น 20% เมื่อเทียบกับสัปดาห์ที่ผ่านมา</li>
                    </ul>
                </div>
            </div>

            {/* กิจกรรมล่าสุด */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">กิจกรรมล่าสุด</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>08:45 AM - JohnDoe อัปโหลดวิดีโอใหม่</li>
                    <li>09:30 AM - ตรวจพบการเรียก API ที่ผิดปกติ</li>
                    <li>10:15 AM - แคมเปญ &ldquo;Summer Promo&ldquo; ถูกอัปเดตข้อมูล</li>
                    <li>11:00 AM - ส่งการแจ้งเตือนให้ผู้ใช้งาน</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
