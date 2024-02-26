
// const { response } = require("express");


import nodemailer from "nodemailer";



 export const contactController = (req,res) =>{
    const {email,message,name} = req.body;
    const transporter = nodemailer.createTransport({
        service:"Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSCODE,
        },
      });
      const mailOptions = {
        from: `"${name}" <${email}>`,
        to:process.env.EMAIL,
        replyTo:email,
        subject:name+' | new message |',
        text: message
      }

      transporter.sendMail(mailOptions,(error,response)=>{
        if (error){
            console.log(error);
        }else{
            console.log(response);
            res.json({
                message:"email sent successfully"
            });
        }
      })
}

// module.exports = contactController;