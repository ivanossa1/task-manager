const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 
const sendWelcomeEmail = (email, name) => {
   sgMail.send({
       to: email,
       from: 'sk8punk1236@hotmail.com',
       subject: 'Thanks for Joining In',
       text: `Welcome to the App, ${name}. Let me know how you get alone with the app.`
   })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sk8punk1236@hotmail.com',
        subject: 'Sorry to see you go :(',
        text: `Please give us a chance ${name}. Let me know if you had a problem!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}