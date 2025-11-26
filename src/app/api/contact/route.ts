import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { title, message, phone, reply_to, sender_name, company } = await req.json();

    if (!reply_to || !sender_name) {
      return NextResponse.json({ message: "Email and name are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const htmlBody = `
      <div style="background-color:#fff;padding:30px;font-family:Arial,sans-serif;">
        <div style="max-width:600px;margin:0 auto;background-color:rgba(229,247,247,1);border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
          
            <!-- Header -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(0,94,107,0.6);padding:20px;">
            <tr>
                <td align="left" style="color:white;font-size:40px;font-family:Arial,sans-serif;line-height:22px;">
                Max Cup
                </td>
                <td align="right">
                <img src="https://maxcup.hu/wp-content/uploads/2023/11/maxcup-logo-re-pohar-small.png" 
                    alt="Max Cup Logo" 
                    style="height:40px; display:block;">
                </td>
            </tr>
            </table>


          <!-- Body -->
          <div style="padding:25px;color:#004a6b;font-size:16px;line-height:1.6;">
            <p><strong>Name:</strong> ${sender_name}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Email:</strong> ${reply_to}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <hr style="margin:20px 0;border:none;border-top:1px solid #ccc;">

            <p><strong>Message:</strong></p>
         <p dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, "<br>") }} />

          </div>

          <!-- Footer -->
          <div style="background-color:rgba(0,94,107,0.6);color:white;text-align:center;padding:15px;font-size:12px;">
            &copy; 2025 Max Cup. All rights reserved.
          </div>

        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${sender_name}" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: title || `New contact form submission from ${sender_name}`,
      text: `${message}\nPhone: ${phone}\nEmail: ${reply_to}\nCompany: ${company || "N/A"}`,
      html: htmlBody,
      replyTo: reply_to,
    });

    return NextResponse.json({ message: "Email sent!" });
  } catch (err: unknown) {
  console.error(err);

  const message =
    err instanceof Error ? err.message : "Error sending email";

  return NextResponse.json({ message }, { status: 500 });
}

}
