const router = require('express').Router()
const nodemailer = require('nodemailer')

// send email via contact form
router.post('/', async (req, res, next) => {
    const {sender, email, message} = req.body

    // prepare data
    const data = {
        from: email,
        to: process.env.MAIL_ME,
        subject: `${sender} via contact form`,
        text: message,
        html: `<p><b>Name:</b> ${sender}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>`
    }

    // use mailtrap to create transporter
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: process.env.MAIL_USER,
    //         pass: process.env.MAIL_PASS
    //     }
    // });

    // use mail to create transporter
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    
    // send via nodemailer
    await transporter.sendMail(data).then(info => {
        // console.log('send>> ', info);
        res.json('Your message has been send to Kira.')
    })
    .catch(error => console.log(error))
})

module.exports = router;