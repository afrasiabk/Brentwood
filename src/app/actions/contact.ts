"use server";

import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const companyName = formData.get("companyName") as string;
  const companyWebsite = formData.get("companyWebsite") as string;
  const services = formData.get("services") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!fullName || !email || !phone || !subject || !message) {
    throw new Error("Please fill in all required fields");
  }

  // Instantiate the email client lazily so a missing key never crashes the page.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Email service isn't configured yet. Please email us directly at business@brentwoodglobal.co.uk."
    );
  }
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Brentwood Global Contact <onboarding@resend.dev>",
      to: ["business@brentwoodglobal.co.uk"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; padding: 0; background-color: #f8fafc;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #f97316, #dc2626); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 1px;">
              BRENTWOOD<span style="color: #fbbf24;">∞</span> GLOBAL
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
          </div>
          
          <!-- Main Content -->
          <div style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            
            <!-- Personal Information Section -->
            <div style="margin-bottom: 35px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; border-bottom: 3px solid #f97316; padding-bottom: 10px; display: inline-block;">
                👤 Personal Information
              </h2>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316;">
                  <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</strong>
                  <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">${fullName}</p>
                </div>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316;">
                  <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</strong>
                  <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 18px;">
                    <a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${email}</a>
                  </p>
                </div>
              </div>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316;">
                <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</strong>
                <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a>
                </p>
              </div>
            </div>

            ${
              companyName || companyWebsite
                ? `
            <!-- Company Information Section -->
            <div style="margin-bottom: 35px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; border-bottom: 3px solid #f97316; padding-bottom: 10px; display: inline-block;">
                🏢 Company Information
              </h2>
              
              ${
                companyName
                  ? `
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316; margin-bottom: 15px;">
                <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company Name</strong>
                <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">${companyName}</p>
              </div>
              `
                  : ""
              }
              
              ${
                companyWebsite
                  ? `
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316;">
                <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company Website</strong>
                <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 18px;">
                  <a href="${companyWebsite}" target="_blank" style="color: #dc2626; text-decoration: none; font-weight: 600;">${companyWebsite}</a>
                </p>
              </div>
              `
                  : ""
              }
            </div>
            `
                : ""
            }

            ${
              services
                ? `
            <!-- Services Section -->
            <div style="margin-bottom: 35px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; border-bottom: 3px solid #f97316; padding-bottom: 10px; display: inline-block;">
                🛠️ Services of Interest
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316;">
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${services
                    .split(", ")
                    .map(
                      (service) => `
                    <span style="background: linear-gradient(135deg, #f97316, #dc2626); color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${service}</span>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
            `
                : ""
            }
            
            <!-- Inquiry Details Section -->
            <div style="margin-bottom: 35px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; border-bottom: 3px solid #f97316; padding-bottom: 10px; display: inline-block;">
                💬 Inquiry Details
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316; margin-bottom: 20px;">
                <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</strong>
                <p style="margin: 8px 0 0 0; color: #1f2937; font-size: 18px; font-weight: 600;">${subject}</p>
              </div>
              
              <div style="background: #f8fafc; padding: 25px; border-radius: 10px; border-left: 4px solid #f97316;">
                <strong style="color: #f97316; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 15px; display: block;">Message</strong>
                <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #1f2937; line-height: 1.7; font-size: 16px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #f3f4f6; text-align: center;">
              <div style="background: linear-gradient(135deg, #f97316, #dc2626); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 18px;">Quick Response Guaranteed</h3>
                <p style="margin: 0; opacity: 0.9; font-size: 14px;">Our team will respond to this inquiry within 24 hours</p>
              </div>
              
              <p style="color: #6b7280; font-size: 14px; margin: 0; line-height: 1.5;">
                📧 This email was sent from the Brentwood Global contact form<br>
                🕒 Received on ${new Date().toLocaleString()}<br>
                🌐 Visit us at <a href="https://brentwoodglobal.co.uk" style="color: #f97316; text-decoration: none;">brentwoodglobal.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    return {
      success: true,
      message: "Message sent successfully!",
      data,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    throw new Error("Failed to send message. Please try again.");
  }
}
