import nodemailer from "nodemailer";

const sendEmail = async (req, res) => {
  const { to, html } = req.body;

  if (!to || !html) {
    return res
      .status(400)
      .json({ message: "Missing to or html in request body" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"PH-University" <abdullahalfahin183@gmail.com>',
      to,
      subject: "Reset your password within 10 mins!",
      text: "",
      html,
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
};

export default sendEmail;
