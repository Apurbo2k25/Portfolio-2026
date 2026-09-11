import { Contact } from "../model/formSchema.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // 1. Save to MongoDB
    const newMessage = await Contact.create({ name, email, message });

    // 2. Send Email via Resend API (Fast HTTP Request)
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
