
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "mail.okuhlemsimza.co.za",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "samoel.seshoka@okuhlemsimza.co.za",
        pass: "HENK2025#seshoka",
    },
    tls: {
        rejectUnauthorized: false, // <== Ignore invalid cert
      },
});

export default async function sendMessage(data) {
    console.log("from utils",data)
    transporter.verify((err, success) => {
        if (err) {
          console.error("SMTP connection failed:", err);
        } else {
          console.log("SMTP is ready:", success);
        }
      });
    const info = await transporter.sendMail({
        from: data.email,
        to: "vincent.nkabinde@okuhlemsimza.co.za",
        subject: data.subject,
        text: data.message, // plain‑text body
        html: `<b>${data.message}</b>`, // HTML body
    });
    console.log(info)
    return info
};