// controllers/visaController.js
const axios = require('axios');
const fs = require('fs');
const config = require('../config/config');

const pushFunds = async (req, res) => {
    const {
        amount,
        recipientPrimaryAccountNumber,
        senderAccountNumber,
        transactionIdentifier,
        surcharge,
        senderAddress,
        pointOfServiceData,
        colombiaNationalServiceData,
        serviceProcessingType,
        acquiringBin,
        retrievalReferenceNumber,
        systemsTraceAuditNumber,
        senderName,
        businessApplicationId,
        settlementServiceIndicator,
        transactionCurrencyCode,
        recipientName,
        sourceAmount,
        senderCountryCode,
        localTransactionDateTime,
        purposeOfPayment,
        cardAcceptor,
        senderReference,
        acquirerCountryCode,
        sourceCurrencyCode,
        senderCity,
        senderStateCode,
        merchantCategoryCode,
        sourceOfFundsCode
    } = req.body;

    const data = {
        amount,
        recipientPrimaryAccountNumber,
        senderAccountNumber,
        transactionIdentifier,
        surcharge,
        senderAddress,
        pointOfServiceData,
        colombiaNationalServiceData,
        serviceProcessingType,
        acquiringBin,
        retrievalReferenceNumber,
        systemsTraceAuditNumber,
        senderName,
        businessApplicationId,
        settlementServiceIndicator,
        transactionCurrencyCode,
        recipientName,
        sourceAmount,
        senderCountryCode,
        localTransactionDateTime: new Date(localTransactionDateTime).toISOString(),
        purposeOfPayment,
        cardAcceptor,
        senderReference,
        acquirerCountryCode,
        sourceCurrencyCode,
        senderCity,
        senderStateCode,
        merchantCategoryCode,
        sourceOfFundsCode
    };

    try {
        const response = await axios.post(config.visa.endpoint, data, {
            auth: {
                username: config.visa.userID,
                password: config.visa.password
            },
            httpsAgent: new (require('https').Agent)({
                cert: fs.readFileSync(config.visa.certPath),
                key: fs.readFileSync(config.visa.keyPath),
                rejectUnauthorized: true
            })
        });
        res.status(200).json({ success: true, message: 'Transaction Successful', data: response.data, amount });
    } catch (error) {
        console.log(error);
        res.status(error.response ? error.response.status : 500).json({
            message: error.message,
            data: error.response ? error.response.data : null
        });
    }
};

const getPushFundsStatus = async (req, res) => {
    const { statusIdentifier } = req.params;

    try {
        const response = await axios.get(`${config.visa.endpoint}/${statusIdentifier}`, {
            auth: {
                username: config.visa.userID,
                password: config.visa.password
            },
            httpsAgent: new (require('https').Agent)({
                cert: fs.readFileSync(config.visa.certPath),
                key: fs.readFileSync(config.visa.keyPath),
                rejectUnauthorized: false
            })
        });
        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({
            message: error.message,
            data: error.response ? error.response.data : null
        });
    }
};

module.exports = { pushFunds, getPushFundsStatus };
