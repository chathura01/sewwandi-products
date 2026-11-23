import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MESSAGE_LIMIT = 4000;

function line(value: unknown, max = 200) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};
  const name = line(data.name);
  const email = line(data.email);
  const phone = line(data.phone);
  const interest = line(data.interest);
  const message =
    typeof data.message === "string"
      ? data.message.replace(/\r\n/g, "\n").trim().slice(0, MESSAGE_LIMIT)
      : "";

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please add your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s/g, "");
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass || !to) {
    return NextResponse.json(
      { error: "The contact form is not ready yet. Please email us directly." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Sewwandi Products" <${user}>`,
      to,
      replyTo: email,
      subject: `Website message: ${interest || "General enquiry"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Interest: ${interest || "—"}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact email failed");
    console.error(error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "We could not send your message. Please email sewwandiproduct@gmail.com directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
