'use client'
import { useState } from 'react';
import LoginPage from '@/components/ui/login';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <main>
        {/* ถ้ายังไม่ได้ login หรือยังไม่ได้กดตกลง จะแสดง LoginPage */}
        {!isAuthenticated && (
          <LoginPage onLoginComplete={() => setIsAuthenticated(true)} />
        )}
        {/* เมื่อผู้ใช้ login และกดตกลงแล้ว ให้แสดงเนื้อหาอื่น ๆ ของหน้า Home */}
        {isAuthenticated && (
          <div className="p-8">
            <h1 className="text-2xl font-bold">เนื้อหาหน้าแรก</h1>
            <p>นี่คือข้อมูลและเนื้อหาที่อยู่ในหน้าแรกหลังจากเข้าสู่ระบบแล้ว</p>
            {/* เพิ่มเนื้อหาอื่น ๆ ตามที่ต้องการ */}
          </div>
        )}
      </main>
    </div>
  );
}
