
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host:process.env.NEXT_PUBLIC_HOST,
    port:process.env.NEXT_PUBLIC_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
    tls: {
        rejectUnauthorized: false, // <== Ignore invalid cert
      },
});

export default async function sendMessage(data:any) {
    transporter.verify((err:any, success:any) => {
        if (err) {
          console.error("SMTP connection failed:", err);
        } else {
          console.log("SMTP is ready:", success);
        }
      });
    const info = await transporter.sendMail({
        from: data.email,
        to: process.env.NEXT_PUBLIC_TO,
        cc:[process.env.NEXT_PUBLIC_VCC,process.env.NEXT_PUBLIC_HCC],
        subject: data.subject,
        text: data.message, // plain‑text body
        html: `<b>${data.message}</b>`, // HTML body
    });
   
    return info
};