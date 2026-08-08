import { NextResponse } from "next/server";

// Basic quotation intake endpoint.
// By default it validates and logs the request so the site works out-of-the-box on Vercel.
// To receive quotes by email, wire this up to a provider (Resend, SendGrid, Nodemailer, etc.)
// or a form service — see the README for a ready-to-use snippet.
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data || !data.name) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // Server-side log (visible in Vercel function logs).
    console.log("[SolidCore] New quotation request:", {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      product: data.product,
      quantity: data.quantity,
      location: data.location,
      date: data.date,
      message: data.message,
    });

    // TODO: integrate email/CRM delivery here.

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
