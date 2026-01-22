import nodemailer from "nodemailer";

// Default SMTP configuration (can be overridden with environment variables)
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT ?? 465),
  user: process.env.SMTP_USER ?? "danielmisganaw192021@gmail.com",
  // Remove spaces from app password (Gmail app passwords are 16 chars without spaces)
  pass: (process.env.SMTP_PASS ?? "gfjozzozxlsruhsq").replace(/\s+/g, ""),
  to: process.env.SMTP_TO ?? "danielmisganaw1719@gmail.com",
  from: process.env.SMTP_FROM ?? "danielmisganaw192021@gmail.com",
};

// For Gmail, use service: "gmail" OR host/port, not both
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
});

type ContactPayload = {
  type: "contact";
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type AppointmentPayload = {
  type: "appointment";
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  message?: string;
};

export type FormPayload = ContactPayload | AppointmentPayload;

type HandlerResult = {
  status: number;
  body: Record<string, unknown>;
};

const formatSubject = (payload: FormPayload) =>
  payload.type === "contact"
    ? `New contact request from ${payload.name}`
    : `New appointment request from ${payload.fullName}`;

const formatHtml = (payload: FormPayload) => {
  const baseStyles = `
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
      .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
      .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px 20px; text-align: center; }
      .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; }
      .content { padding: 30px 20px; }
      .info-section { background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
      .info-row { display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
      .info-row:last-child { border-bottom: none; }
      .info-label { font-weight: 600; color: #374151; width: 120px; font-size: 14px; }
      .info-value { color: #111827; flex: 1; font-size: 14px; }
      .message-box { background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 15px; margin-top: 20px; border-radius: 4px; }
      .message-label { font-weight: 600; color: #065f46; margin-bottom: 8px; font-size: 14px; }
      .message-text { color: #047857; line-height: 1.6; white-space: pre-wrap; font-size: 14px; }
      .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; }
      .badge { display: inline-block; background-color: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-left: 8px; }
    </style>
  `;

  if (payload.type === "contact") {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${baseStyles}
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Request</h1>
          </div>
          <div class="content">
            <div class="info-section">
              <div class="info-row">
                <span class="info-label">👤 Name:</span>
                <span class="info-value">${payload.name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">📧 Email:</span>
                <span class="info-value"><a href="mailto:${payload.email}" style="color: #10b981; text-decoration: none;">${payload.email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">📞 Phone:</span>
                <span class="info-value">${payload.phone ? `<a href="tel:${payload.phone}" style="color: #10b981; text-decoration: none;">${payload.phone}</a>` : "N/A"}</span>
              </div>
            </div>
            <div class="message-box">
              <div class="message-label">💬 Message:</div>
              <div class="message-text">${payload.message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Lkie Coffee contact form.</p>
            <p>Please reply directly to respond to ${payload.name}.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${baseStyles}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📅 New Appointment Request</h1>
        </div>
        <div class="content">
          <div class="info-section">
            <div class="info-row">
              <span class="info-label">👤 Patient Name:</span>
              <span class="info-value">${payload.fullName}</span>
            </div>
            <div class="info-row">
              <span class="info-label">📧 Email:</span>
              <span class="info-value"><a href="mailto:${payload.email}" style="color: #10b981; text-decoration: none;">${payload.email}</a></span>
            </div>
            <div class="info-row">
              <span class="info-label">📞 Phone:</span>
              <span class="info-value"><a href="tel:${payload.phone}" style="color: #10b981; text-decoration: none;">${payload.phone}</a></span>
            </div>
            <div class="info-row">
              <span class="info-label">📅 Preferred Date:</span>
              <span class="info-value">${payload.date}</span>
            </div>
            <div class="info-row">
              <span class="info-label">🕐 Preferred Time:</span>
              <span class="info-value">${payload.time}</span>
            </div>
            <div class="info-row">
              <span class="info-label">🦷 Service:</span>
              <span class="info-value">${payload.service} <span class="badge">NEW</span></span>
            </div>
          </div>
          ${payload.message ? `
            <div class="message-box">
              <div class="message-label">💬 Additional Notes:</div>
              <div class="message-text">${payload.message.replace(/\n/g, "<br>")}</div>
            </div>
          ` : ""}
        </div>
        <div class="footer">
          <p>This appointment request was submitted through the Lkie Coffee website.</p>
          <p>Please reply directly to confirm or reschedule with ${payload.fullName}.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function handleFormPayload(payload: FormPayload): Promise<HandlerResult> {
  if (payload.type !== "contact" && payload.type !== "appointment") {
    return {
      status: 400,
      body: { error: "Invalid payload type" },
    };
  }

  try {
    await transporter.sendMail({
      from: `"Lkie Coffee" <${SMTP_CONFIG.from}>`,
      to: SMTP_CONFIG.to,
      replyTo: payload.email,
      subject: formatSubject(payload),
      html: formatHtml(payload),
    });

    return {
      status: 200,
      body: { success: true },
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[api/route] Failed to send email", error);
    console.error("[api/route] Error details:", errorMessage);
    
    // Provide more helpful error messages
    let userMessage = "Failed to send email. Please try again later.";
    if (errorMessage.includes("Invalid login")) {
      userMessage = "Email authentication failed. Please check SMTP credentials.";
    } else if (errorMessage.includes("ECONNREFUSED") || errorMessage.includes("ETIMEDOUT")) {
      userMessage = "Could not connect to email server. Please check your internet connection.";
    } else if (errorMessage.includes("EAUTH")) {
      userMessage = "Email authentication failed. Please verify your email credentials.";
    }
    
    return {
      status: 500,
      body: { 
        error: userMessage,
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
    };
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as FormPayload;
    const result = await handleFormPayload(payload);

    return new Response(JSON.stringify(result.body), {
      status: result.status,
    });
  } catch (error) {
    console.error("[api/route] Failed to send email", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
      }),
      { status: 500 },
    );
  }
}

