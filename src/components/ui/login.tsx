'use client';

import React, { useState } from 'react';
import { z } from 'zod';

interface LoginPageProps {
    onLoginComplete: () => void;
}

// กำหนด schema สำหรับ validate ข้อมูล login ด้วย Zod
const loginSchema = z.object({
    username: z.string().nonempty({ message: 'กรุณากรอก Username' }),
    password: z.string().min(6, { message: 'Password ต้องมีความยาวอย่างน้อย 6 ตัวอักษร' }),
});

export default function LoginPage({ onLoginComplete }: LoginPageProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        // Validate input ด้วย Zod
        const result = loginSchema.safeParse({ username, password });
        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                // หาก login สำเร็จ ให้ตั้งค่า state ว่า login แล้ว
                setIsLoggedIn(true);
            } else {
                const data = await res.json();
                setError(data.message || 'การเข้าสู่ระบบล้มเหลว');
            }
        } catch {
            setError('เกิดข้อผิดพลาดบางอย่าง');
        }
        setIsLoading(false);
    };

    // ถ้า login สำเร็จแล้ว ให้แสดงข้อความต้อนรับพร้อมปุ่มตกลง
    if (isLoggedIn) {
        return (
            <div className="p-8 flex flex-col items-center">
                <h1 className="text-xl font-bold mb-4">ยินดีต้อนรับ!</h1>
                <p className="mb-4">คุณได้เข้าสู่ระบบเรียบร้อยแล้ว</p>
                <button
                    onClick={onLoginComplete}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                >
                    ตกลง
                </button>
            </div>
        );
    }

    // แสดงฟอร์ม login เมื่อยังไม่ได้เข้าสู่ระบบ
    return (
        <div className="p-8 flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded disabled:opacity-50"
                >
                    {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
