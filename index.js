const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layouts'); // Set the default layout

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const browserSync = require('browser-sync').create();

browserSync.init({
    proxy: "localhost:3000", // Your server URL
    files: ["views/**/*.ejs", "public/**/*.*"], // Watch these files
    notify: false, // Disable the notification
});

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Us' });
});

app.get('/help', (req, res) => {
    res.render('pages/help', { title: 'Help | FAQs' });
});

app.get('/signup', (req, res) => {
    res.render('pages/signup', { title: 'Sign Up' });
});

app.get('/login', (req, res) => {
    res.render('pages/login', { title: 'Login' });
})

app.get('/log-request-step-one', (req, res) => {
    res.render('pages/process/choose-device', { title: 'Device Type' });
});

app.get('/log-request-step-two', (req, res) => {
    res.render('pages/process/device-condition', { title: 'Device Condition' });
});

app.get('/log-request-step-three', (req, res) => {
    res.render('pages/process/what-to-do-with-device', { title: 'What To-Do with Device' });
});

app.get('/log-request-dispose', (req, res) => {
    res.render('pages/process/subprocess/dispose-device', { title: 'Dispose Device' });
});

app.get('/log-request-donate', (req, res) => {
    res.render('pages/process/subprocess/donate-device', { title: 'Donate Device' });
});

app.get('/log-request-resell', (req, res) => {
    res.render('pages/process/subprocess/resell-device', { title: 'Resell Device' });
});

app.get('/log-request-exchange', (req, res) => {
    res.render('pages/process/subprocess/exchange-device', { title: 'Exchange Device' });
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});