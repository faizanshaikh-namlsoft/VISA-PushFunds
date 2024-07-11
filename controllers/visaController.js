// controllers/visaController.js
const axios = require('axios');
const fs = require('fs');
const config = require('../config/config');

const pushFunds = async (req, res) => {
    const { amount, recipientPrimaryAccountNumber, senderAccountNumber } = req.body;

    const data = {
  "surcharge": "11.2",
  "senderAddress": "901 Metro Center Blvd",
  "pointOfServiceData": {
    "panEntryMode": "90",
    "posConditionCode": "00",
    "motoECIIndicator": "0"
  },
  "recipientPrimaryAccountNumber": recipientPrimaryAccountNumber,
  "colombiaNationalServiceData": {
    "addValueTaxReturn": "10.00",
    "taxAmountConsumption": "10.00",
    "nationalNetReimbursementFeeBaseAmount": "20.00",
    "addValueTaxAmount": "10.00",
    "nationalNetMiscAmount": "10.00",
    "countryCodeNationalService": "170",
    "nationalChargebackReason": "11",
    "emvTransactionIndicator": "1",
    "nationalNetMiscAmountType": "A",
    "costTransactionIndicator": "0",
    "nationalReimbursementFee": "20.00"
  },
  "transactionIdentifier": "617020001849971",
  "serviceProcessingType": {
    "requestType": "01"
  },
  "acquiringBin": "408999",
  "retrievalReferenceNumber": "412770451036",
  "systemsTraceAuditNumber": "451018",
  "senderName": "Mohammed Qasim",
  "businessApplicationId": "AA",
  "settlementServiceIndicator": "9",
  "transactionCurrencyCode": "USD",
  "recipientName": "rohan",
  "sourceAmount": "123.12",
  "senderCountryCode": "124",
  "senderAccountNumber": senderAccountNumber,
  "amount": amount,
  "localTransactionDateTime": new Date().toISOString(),
  "purposeOfPayment": "purpose",
  "cardAcceptor": {
    "address": {
      "country": "USA",
      "zipCode": "94404",
      "county": "San Mateo",
      "state": "CA"
    },
    "idCode": "CA-IDCode-77765",
    "name": "Visa Inc. USA-Foster City",
    "terminalId": "TID-9999"
  },
  "senderReference": "",
  "acquirerCountryCode": "840",
  "sourceCurrencyCode": "840",
  "senderCity": "Foster City",
  "senderStateCode": "CA",
  "merchantCategoryCode": "6012",
  "sourceOfFundsCode": "05"
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
                rejectUnauthorized: false
            })
        });
        res.status(200).json({ success: true, message: 'Transaction Successfull', data: response.data });
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json({
            message: error.message,
            data: error.response ? error.response.data : null
        });
    }
};

module.exports = { pushFunds };
