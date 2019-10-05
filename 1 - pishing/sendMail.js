const nodeMailer = require('nodemailer');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const ATTACKER_GMAIL_USER = process.env.ATTACKER_GMAIL_USER;
const ATTACKER_GMAIL_PASS = process.env.ATTACKER_GMAIL_PASS;
const SENDER_NAME = process.argv[2];
const SUBJECT = process.argv[3];
const VICTIM_EMAIL = process.argv[4];
const HTML_FILE = process.argv[5];

(() => {

    const html = fs.readFileSync(HTML_FILE);

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: ATTACKER_GMAIL_USER,
            pass: ATTACKER_GMAIL_PASS
        }
    });
    
    let mailOptions = {
        from: `"${SENDER_NAME}" <${ATTACKER_GMAIL_USER}>`,
        to: VICTIM_EMAIL, // list of receivers
        subject: SUBJECT, // Subject line
        html // html body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
})();
