import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  console.log("middleware running");
  try {
    let bodyparsed = await req.json();
    let { name, email, message } = bodyparsed;
    console.log(email);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: `"Your Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'naveenkumar171837@gmail.com',
      replyTo: `${name} <${email}>`,
      subject: `New message from ${name} (${email})`,
      text: `Name: ${name}\nEmail: ${email}\n: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <a href="mailto:${email}"><strong>Email:</strong> ${email}</a>
             <p> ${message}</p>`,
    };

    console.log(mailOptions.from);
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Successfully sent" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}