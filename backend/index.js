require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(bodyParser.json());

// Initialize users.json if it doesn't exist
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Helper function to read/write users
const getUsers = () => JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
const saveUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

const internshipApplications = [];

app.post('/api/internship/apply', (req, res) => {
    try {
        const { name, email, university, domain, resumeLink } = req.body;
        if (!name || !email || !university || !domain || !resumeLink) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const application = { id: internshipApplications.length + 1, name, email, university, domain, resumeLink, timestamp: new Date().toISOString() };
        internshipApplications.push(application);
        res.status(201).json({ message: 'Application submitted successfully', data: application });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.get('/api/internship/applications', (req, res) => {
    res.json(internshipApplications);
});

// Production-ready Auth Routes
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required.' });

        const users = getUsers();
        if (users.find(u => u.email === email)) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        // Hash the password securely
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = { id: Date.now().toString(), name, email, passwordHash: hashedPassword };
        users.push(newUser);
        saveUsers(users);
        
        // Return without password hash
        res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: 'Email and password are required.' });

        const users = getUsers();
        const user = users.find(u => u.email === email);
        if (!user) return res.status(401).json({ error: 'Invalid credentials.' });

        // Compare incoming password with stored hash
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials.' });

        // Generate JWT Token
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({ 
            message: 'Login successful', 
            token,
            user: { id: user.id, name: user.name, email: user.email } 
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.listen(PORT, (err) => {
    if (err) return console.error('Failed to start server:', err.message);
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
