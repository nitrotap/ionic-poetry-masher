const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'www' directory (or 'dist' directory for Ionic 3)
app.use(express.static(path.join(__dirname, 'www')));

// redirect all routes to root URL '/index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
