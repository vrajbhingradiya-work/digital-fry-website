import nodemailer from "nodemailer";

export const sendEmail = async ({ formData }: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service
      auth: {
        user: "junexus.edgerunners@gmail.com", // Replace with your email
        pass: "zxcw vinh mfyy jrej", // Replace with your email password
      },
    });

    const mailOptions = {
      from: "junexus.edgerunners@gmail.com",
      to: "lll.rg3.lll@gmail.com",
      //   to: "info@digitalfry.in"
      subject: `Inquiry Raised by ${formData.clientName}`,
      text: `Please find the attached file Client Name : ${formData.clientName}
      Client EmailId : ${formData.clientEmailId}
      Client Number : ${formData.clientNumber}
      Client Message : ${formData.clientMessage} `,
    };
    const mailresponse = transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Email error:", error);
      }
    });

    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
