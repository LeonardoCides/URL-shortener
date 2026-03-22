const express = require('express');
const { nanoid } = require('nanoid');
const app = express();

app.use(express.json());

const urls = {};

app.post('/shorten', (req, res) => {
    const { longUrl } = req.body;
    const id = nanoid(6);
    urls[id] = longUrl;
    res.json({ shortUrl: `http://localhost:3000/${id}` });
});

app.get('/:id', (req, res) => {
    const longUrl = urls[req.params.id];
    if (longUrl) return res.redirect(longUrl);
    res.status(404).send('URL not found');
});

app.listen(3000, () => console.log('Server running on port 3000'));
