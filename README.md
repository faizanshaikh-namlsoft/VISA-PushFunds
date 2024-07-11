# Visa Direct Push Funds Transaction API

This Node.js Express project integrates the Visa Direct API to perform push funds transactions. It allows users to initiate transactions to transfer funds from a sender's account to a recipient's account using Visa's sandbox environment.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (version 12 or later)
- npm (Node package manager)
- Visa Developer Account
- Project created in the Visa Developer Portal with Visa Direct enabled
- `cert.pem` and `key.pem` files from Visa Developer Portal

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/faizanshaikh-namlsoft/VISA-PushFunds.git
   cd VISA-PushFunds

2. **Install dependencies**

   npm install

3. **Add your Visa API credentials**

   Create a cert directory in the root of your project and place your cert.pem and key.pem files inside.

4. **Configure your credentials**

   Edit the config/config.js file to include your Visa API credentials.

5. **Start the server**

   node server.js

## Usage

To initiate a push funds transaction, send a POST request to `http://localhost:3000/api/pushFunds` with the following JSON body:

```json
{
    "amount": "124.05",
    "recipientPrimaryAccountNumber": "4104920120500001",
    "senderAccountNumber": "4104920120500002"
}
```

### Example using `curl`

```bash
curl -X POST http://localhost:3000/api/pushFunds -H "Content-Type: application/json" -d '{
    "amount": "124.05",
    "recipientPrimaryAccountNumber": "4104920120500001",
    "senderAccountNumber": "4104920120500002"
}'
```

## Project Structure
.
├── config
│   ├── config.js
│   ├── cert.pem
│   └── key.pem
├── controllers
│   └── visaController.js
├── routes
│   └── visaRoutes.js
├── node_modules
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md

## License

   This project is licensed under the MIT License.
