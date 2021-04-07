const express = require('express');

// app config
const app = express();
const PORT = process.env.PORT || 5000

//api routes
app.get('/', (req, res) => res.send('API Running'))

// listener
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));