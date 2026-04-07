const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Bharath Kumar', email: 'bharath@example.com' },
        { id: 2, name: 'John Doe', email: 'john@example.com' }
    ];
    res.json(users);
});
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', user: newUser });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports = app;