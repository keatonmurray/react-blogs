const express = require('express');
const cors = require('cors');
const routes = require('./routes/router');

const app = express();
app.use(express.json()); 
app.use(cors());

app.use('/uploads', express.static('uploads'));

const db = require('./db/db.js');

app.use('/api', routes); 

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
