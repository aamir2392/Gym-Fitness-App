import nodeMailer from "nodemailer";

export default async function sendEmail(options) {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: process.env.SMTP_PORT == 465, // Use SSL if on port 465
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nEmail of user who sent the message : ${options.userEmail}`,
  };

  // Send the email with the correct mailOptions
  await transporter.sendMail(mailOptions);
}
