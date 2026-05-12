import { NextResponse } from "next/server";

type ContactRequest = {
  company?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  otherService?: unknown;
};

const MAX_LENGTHS = {
  company: 120,
  name: 120,
  email: 160,
  phone: 60,
  service: 160,
  otherService: 500
};

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isTooLong(value: string, max: number) {
  return value.length > max;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const company = clean(body.company);
  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const service = clean(body.service);
  const otherService = clean(body.otherService);

  if (!company || !name || !email || !phone || !service) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }

  if (
    isTooLong(company, MAX_LENGTHS.company) ||
    isTooLong(name, MAX_LENGTHS.name) ||
    isTooLong(email, MAX_LENGTHS.email) ||
    isTooLong(phone, MAX_LENGTHS.phone) ||
    isTooLong(service, MAX_LENGTHS.service) ||
    isTooLong(otherService, MAX_LENGTHS.otherService)
  ) {
    return NextResponse.json({ error: "Field value is too long." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (service === "Diğer" && !otherService) {
    return NextResponse.json({ error: "Other service detail is required." }, { status: 400 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!serviceId || !templateId || !publicKey || !toEmail) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(request.headers.get("origin") ? { origin: request.headers.get("origin") as string } : {})
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        company_name: company,
        email_address: email,
        phone_number: phone,
        requested_service: service === "Diğer" ? otherService : service,
        to_email: toEmail
      }
    })
  });

  if (!emailResponse.ok) {
    console.error("EmailJS send failed:", {
      status: emailResponse.status,
      statusText: emailResponse.statusText
    });

    return NextResponse.json({ error: "Email could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
