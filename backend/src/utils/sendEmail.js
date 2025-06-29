import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter=nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        }
    });

    const mailOptions={
        from:process.env.EMAIL_USER,
        to:options.to,
        subject:options.subject,
        text:options.text,
        html:options.html
    };

    await transporter.sendMail(mailOptions);
}