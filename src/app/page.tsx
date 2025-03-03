'use client'
import { useState } from 'react';
import LoginPage from '@/components/ui/login';
import Dashboard from '@/components/ui/dashboard';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <main>
        {/* ถ้ายังไม่ได้ login จะแสดง LoginPage */}
        {!isAuthenticated && (
          <LoginPage onLoginComplete={() => setIsAuthenticated(true)} />
        )}
        {/* เมื่อผู้ใช้ login แล้ว ให้แสดง Dashboard */}
        {isAuthenticated && <Dashboard />}
      </main>
    </div>
  );
}
