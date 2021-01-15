import nodemailer from "nodemailer";

async function mail({
  config,
  message,
}) {
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: 587,
    secure: false,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const {
    from,
    to,
    subject,
    html,
  } = message;

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default mail