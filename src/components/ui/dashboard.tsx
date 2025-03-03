'use client'
import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            {/* แสดงข้อมูลโปรไฟล์ */}
            <div className="mb-6 p-4 border rounded shadow">
                <h2 className="text-xl font-semibold">โปรไฟล์ผู้ใช้งาน</h2>
                <p>ชื่อ: John Doe</p>
                <p>อีเมล: john.doe@example.com</p>
            </div>
            {/* แสดงสถิติการใช้งาน */}
            <div className="mb-6 p-4 border rounded shadow">
                <h2 className="text-xl font-semibold">สถิติการใช้งาน</h2>
                <p>จำนวน API calls: 100</p>
                <p>จำนวนผู้ใช้งานที่ active: 5</p>
            </div>
            {/* สามารถเพิ่มส่วนอื่น ๆ เช่น การแจ้งเตือนหรือกราฟข้อมูลได้อีก */}
            <div className="p-4 border rounded shadow">
                <h2 className="text-xl font-semibold">การแจ้งเตือน</h2>
                <p>ไม่มีการแจ้งเตือนใหม่ในขณะนี้</p>
            </div>
        </div>
    );
};

export default Dashboard;
