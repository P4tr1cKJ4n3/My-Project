const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/callback', async (req, res) => {
    const code = req.query.code;

    // Exchange code for access token
    const response = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
    });

    const accessToken = response.data.access_token;

    // Use the access token to fetch user details or perform other actions

    res.send('Login successful! You can close this tab.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
