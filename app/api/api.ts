import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
}

// Wrap in an async IIFE so we can use await.
(async () => {
    const info = await transporter.sendMail({
        from: 'hsseshoka@gmail.com',
        to: "vincent.nkabinde@okuhlemsimza.co.za",
        subject: "Hello ✔",
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
})();