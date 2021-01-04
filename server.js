const http = require('http');
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const app = express();
const apiHost = 'http://localhost:8000';
app.use('//api', (req, res) => {
  proxy.web(req, res, { target: `${apiHost}`, changeOrigin: true });
});

const port = 8080;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
