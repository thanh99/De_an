const user = require('./modules/user')
const nodemailer = require('nodemailer')
const EMAIL = 'tuan.na.230@gmail.com'
const PASSWORD = 'anhtuanqwe'



const handlers = {
    async sendMail(data) {
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })
        let { to, subject, text, html } = data
        if (!to) {
            throw new Error(`Missing info 'to'!`)
        }
        if (!subject) {
            throw new Error(`Missing info 'subject'!`)
        }
        if (!text && !html) {
            throw new Error(`Missing info 'text' or 'html'!`)
        }

        await mailTransport.sendMail({
            from: EMAIL,
            to,
            subject,
            text,
            html
        }, (err, info) => {
            if (err) {
                console.error(err.message)
            } else {
                console.log({ message: 'Success!', info })
            }
        })
    },
    async sendMailWhenCreateProduct(data) {
        let listEmail = await user.findEmailOfUser()
        for (let i = 0; i < listEmail.length; i++) {
            const element = listEmail[i]
            let dataSend = {
                to: element.email,
                subject: 'Sản phẩm mới',
                text: "Sản phẩm mới",
                html: `
                <h3>${data.name}</h3>
                <p>${data.price}</p>
                <img src="${data.image}" alt="img"/>`
            }
            this.sendMail(dataSend)
        }
    }
}

module.exports = handlers