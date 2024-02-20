const express = require('express');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the dynamically generated XML sitemap
app.get('/sitemap.xml', async (req, res) => {
    try {
        const sitemapStream = new SitemapStream({ hostname: 'http://localhost:3000' });

        // Add your routes dynamically to the sitemap
        sitemapStream.write({ url: '/home', changefreq: 'daily', priority: 1.0 });
        // Add more routes as needed

        sitemapStream.end();
        
        const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());
        
        res.header('Content-Type', 'application/xml');
        res.send(sitemap);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

