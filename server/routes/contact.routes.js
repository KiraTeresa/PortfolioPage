const router = require('express').Router()
const nodemailer = require('nodemailer')

// send email via contact form
router.post('/', async (req, res, next) => {
    const {sender, email, message} = req.body

    // prepare data
    const data = {
        from: email,
        to: 'kira@kira.com',
        subject: `${sender} via contact form`,
        text: message,
        html: `<b>${message}</b>`
    }

    // use mailtrap to create transporter
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    
    // send via nodemailer
    await transporter.sendMail(data).then(info => {
        console.log('send>> ', info);
        res.json('Your message has been send to Kira.')
    })
    .catch(error => console.log(error))
})

module.exports = router;