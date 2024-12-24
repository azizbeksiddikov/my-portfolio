import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Telegram environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Make sure these are defined in .env.local or Vercel environment
    if (!botToken || !chatId) {
      return NextResponse.json(
        { status: "error", message: "Missing Telegram credentials" },
        { status: 500 }
      );
    }

    // Send message to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: content,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ status: "success", data });
  } catch (error: any) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
