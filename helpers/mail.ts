import nodemailer from "nodemailer";

export const sendEmail = async ({ client }: any) => {
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
      subject: `Inquiry Raised by ${client.clientName}`,
      text: `Please find the attached file Client Name : ${client.clientName}
      Client EmailId : ${client.clientEmailId}
      Client Number : ${client.clientNumber}
      Client Message : ${client.clientMessage} `,
    };
    const mailresponse = await transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Email error:", error);
      }
    });

    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
