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
                  <h4>ФИО</h4>
                  <h5><b>${data.name}</b></h5>
                  <hr />
                  <h4>Возраст заявителя</h4>
                  <h5><b>${data.age}</b></h5>
                  <hr />
                  <h4>E-mail</h4>
                  <h5><b>${data.email}</b></h5>
                  <hr />
                  <h4>Телефон</h4>
                  <h5><b>${data.tel}</b></h5>
                  <hr />
                  <h4>Расскажите о вашей семье</h4>
                  <h5><b>${data.family}</b></h5>
                  <hr />
                  <h4>Что планируете ремонтировать и как?</h4>
                  <h5><b>${data.comment}</b></h5>
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