// config/config.js
require('dotenv').config();

module.exports = {
    visa: {
        userID: process.env.VISA_USER_ID,
        password: process.env.VISA_PASSWORD,
        certPath: './config/cert.pem',
        keyPath: './config/key.pem',
        endpoint: 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pushfundstransactions'
    }
};
