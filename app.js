// app.js
const express = require('express');
const bodyParser = require('body-parser');
const visaRoutes = require('./routes/visaRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', visaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
