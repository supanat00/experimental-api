// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

const users = [
    { username: 'testuser', password: '123456' },
    { username: 'user1', password: 'password1' },
];

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // สร้าง token (สำหรับตัวอย่างนี้ใช้ข้อความธรรมดา)
    const token = 'dummy-token';

    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set({
        name: 'auth',
        value: token,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60, // 1 ชั่วโมง
    });
    return response;
}
