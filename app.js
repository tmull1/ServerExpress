// Import modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Integrate third-party middleware

// Logger Middleware: Log all incoming requests
app.use(morgan('dev'));

// Body Parser Middleware: Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up basic routes

// Root route
app.get('/', (req, res) => {
    res.send('Hello, welcome to the Express server!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is a basic Express server set up for demonstration purposes.');
});

// Handle non-existent routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Listen on a specified port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
