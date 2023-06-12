const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail() {
        await this.transporter.sendMail({
            from: 'arstanbek353@yandex.ru',
            to: 'arstanbek353@gmail.com',
            subject: `Активация`,
            text: '',
            html: `
                <div>
                <h1>для активации перейдите по ссылке</h1>
                <a href="dd" target="_blank">dd</a>
                </div>
            `
        })
    }
}

module.exports = new MailService()