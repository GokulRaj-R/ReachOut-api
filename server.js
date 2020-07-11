const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Running'));

const PORT = process.env.port || 4000;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
