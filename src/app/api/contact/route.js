import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // 在服务器端转发，彻底绕过国内网络限制
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "46e0339d-27b0-466d-a128-40b90f507567",
        name: body.name,
        email: body.email,
        message: body.message,
        subject: "New Inquiry from Exact Pro Audio"
      })
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
