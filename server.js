const express = require('express');
const connectDB = require('./config/db');

// app config
const app = express();
const PORT = process.env.PORT || 5000

// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

//api routes
app.get('/', (req, res) => res.send('API Running'))

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

// listener
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));