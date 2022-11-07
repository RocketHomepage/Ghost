import nodemailer from "nodemailer";
export default async (req, res) => {
  console.log(req.body);
  console.log("Sending1234");
  const { Name, Email, Message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "rahulkumarp79@gmail.com",
      pass: "R!a@hulMona",
    },
  });
  const data = {
    from: Email,
    to: "info@juki-lobby.de",
    subject: `Contact form submission from ${Name}`,
    html: `<h1>${Name} Have contacted you</h1>
      <p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${Email}</p><br>
        <p><strong>Message: </strong> ${Message}</p><br>
      `,
  };

  transporter.sendMail(data, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
