import express from 'express';
import bodyparcer from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(
    bodyparcer.json({ limit: '50mb', extended: true, parameterLimit: 50000 })
);
app.use(
    bodyparcer.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
    })
);

app.use(cors());

app.get('/api/', (res) => {
    res.send('Hello');
});

app.post('/api/send', (req, res) => {
    let { name, phone, description, images } = req.body;

    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'ksu1ven@mail.ru',
            pass: 'rmK3TK9AE5XCLqx4JJWs',
        },
    });

    let mailoptions = {
        from: 'ksu1ven@mail.ru',
        to: 'igorosechkin2407@gmail.com',
        subject: 'Новый заказ с сайта svarka-tyt-minsk',
        html: `
        <h2>Имя клиента: ${name}</h2>
        <h3>Телефон: ${phone}</h3>
        <p>Описание: ${description}</p>
        `,
        attachments: images.map((image, index) => {
            return {
                filename: `zakaz-${index}.jpg`,
                content: image.split('base64,')[1],
                encoding: 'base64',
            };
        }),
    };

    smtpTransport.sendMail(mailoptions, (error) => {
        if (error) res.send(error);
        else {
            res.send('Success');
        }
    });

    smtpTransport.close();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
