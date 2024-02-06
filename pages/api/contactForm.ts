import formidable from "formidable";
import { IncomingMessage } from "http";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  // Configure your email transport here (SMTP, etc.)
  // Example: For using a Gmail account
  service: "gmail",
  auth: {
    user: "sonal.r@lanatussystems.com",
    pass: "sonal@lanatus",
  },
});

const contactForm = async (
  req: IncomingMessage,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { error?: string; message?: string }): void | PromiseLike<void>;
        new (): any;
      };
    };
  }
) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const { name, email, message } = fields;
    console.log("name, email, message", name, email, message);
    const { file } = files;

    // Implement email sending logic here
    const mailOptions = {
      from: "your_email@gmail.com",
      to: "recipient_email@example.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      //   attachments: [
      //     {
      //       filename: file.name,
      //       path: file.path,
      //     },
      //   ],
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error sending email", error);
      console.log("error", error);

      // res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

export default contactForm;
