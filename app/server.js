'use server'

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_SERVER_HOST,
//     port: process.env.EMAIL_SERVER_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_RECIPIENT,
//       subject: `New message from ${name}`,
//       text: message,
//     });

//     res.status(200).json({ status: 'Ok' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error sending email' });
//   }
// }

var sendmail = require('sendmail')();

sendmail({
    from: 'muzmmil.khan16@gmail.com',
    to: 'mk995943@gmail.com',
    subject: 'Test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
