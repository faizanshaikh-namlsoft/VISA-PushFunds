require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    visa: {
        userID: process.env.VISA_USER_ID,
        password: process.env.VISA_PASSWORD,
        certPath: isProduction ? './config/prod_cert.pem' : './config/cert.pem',
        keyPath: isProduction ? './config/prod_key.pem' : './config/key.pem',
        endpoint: isProduction 
            ? 'https://api.visa.com/visadirect/fundstransfer/v1/pushfundstransactions'
            : 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pushfundstransactions'
    }
};
