const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(data, check, img) {
        await this.transporter.sendMail({
            from: 'arstanbek353@yandex.ru',
            to: 'arstanbek353@yandex.ru',
            subject: `Золлидер чек`,
            text: '',
            html: `
                <div>
                  <h1>ФИО</h1>
                  <h2><b>${data.name}</b></h2>
                  <br /><br />
                  <h1>Возраст заявителя</h1>
                  <h2><b>${data.age}</b></h2>
                  <br /><br />
                  <h1>E-mail</h1>
                  <h2><b>${data.email}</b></h2>
                  <br /><br />
                  <h1>Телефон</h1>
                  <h2><b>${data.tel}</b></h2>
                  <br /><br />
                  <h1>Расскажите о вашей семье</h1>
                  <h2><b>${data.family}</b></h2>
                  <br /><br />
                  <h1>Что планируете ремонтировать и как?</h1>
                  <h2><b>${data.comment}</b></h2>
                  <br /><br />
                </div>
            `,
            attachments: [
              ...check, 
              ...img,
            ]
        })
    }
}

module.exports = new MailService()