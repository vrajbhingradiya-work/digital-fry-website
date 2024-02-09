import nodemailer from "nodemailer";

export const sendEmail = async ({ formData }: any) => {
  try {
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8851bea3115f5f",
        pass: "53ee4c53d14ad5",
      },
    });

    const mailOptions = {
      from: "lll.rg3.lll@gmail.com",
      to: "vraj.21bcon069@jecrcu.edu.in",
      //   to: "info@digitalfry.in"
      subject: `Inquiry Raised by ${formData.clientName}`,
      text: `Please find the attached file Client Name : ${formData.clientName}
      Client EmailId : ${formData.clientEmailId}
      Client Number : ${formData.clientNumber}
      Client Message : ${formData.clientMessage} `,
    };
    const mailresponse = await transport.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Email error:", error);
      }
    });

    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
