const nodemailer = require("nodemailer");

const {sendError, sendMessage} = require ("./message");

async function sendEmail () {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'schoolads.equipe.contact@gmail.com',
          pass: 'SchoolAds*123*SchoolAds'
        }
      });
      
      var mailOptions = {
        from: 'schoolads.equipe.contact@gmail.com',
        to: 'cheikh-ahmed-t.GNANKENE@etu.univ-amu.fr',
        subject: 'Ma candidature',
        text: 'Ma candidature test!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
}


module.exports = sendEmail;

