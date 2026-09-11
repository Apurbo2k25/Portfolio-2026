import { Contact } from "../model/formSchema.js";
import nodemailer from "nodemailer";

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

    // 2. Respond immediately to the user so fetch doesn't stay pending
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });

    // 3. Send email asynchronously in the background
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      family: 4,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      })
      .then(() => console.log("Email sent successfully"))
      .catch((err) => console.error("Email failed to send:", err));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
