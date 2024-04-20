import express from 'express';
import bodyparcer from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(bodyparcer.json());
app.use(bodyparcer.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
    console.log('WELCOME');
    resizeBy.send('Welcome!');
});

app.post('/api/send', (req, res) => {
    console.log('ASDFG');
    console.log(req.body);
    let { name, phone, description } = req.body;

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
        to: 'ksu1ven@mail.ru',
        subject: 'Новый заказ с сайта',
        html: `
        <h3>${name}</h3>
        <h3>${phone}</h3>
        <h3>${description}</h3>
        `,
    };

    smtpTransport.sendMail(mailoptions, (error, response) => {
        if (error) res.send(error);
        else {
            res.send('Success');
        }
    });

    smtpTransport.close();
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '/dist')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
