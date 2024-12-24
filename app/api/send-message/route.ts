import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Sanitize environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.replace(/["';]/g, "");
    const chatId = process.env.TELEGRAM_CHAT_ID?.replace(/["';]/g, "");

    if (!botToken || !chatId) {
      throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    }

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

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Telegram API error:", responseData);
      throw new Error(responseData.description || "Telegram API error");
    }

    return NextResponse.json({ status: "success", data: responseData });
  } catch (error: any) {
    console.error("Error sending message:", error.message);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
