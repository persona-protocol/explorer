const express = require('express')
const fs = require('fs')
const path = require('path')
const history = require('connect-history-api-fallback')
const app = express()
const ip = process.env.EXPLORER_HOST || '127.0.0.1'
const port = process.env.EXPLORER_PORT || 4200
let key = fs.readFileSync('cert/private.key');
let cert = fs.readFileSync( 'cert/certificate.pem' );
let https = require('https');
let options = {
  key: key,
  cert: cert,
  };

// Web Server
const distPath = path.join(__dirname + '/dist/');
if (fs.existsSync(distPath)) {
  const staticFileMiddleware = express.static(distPath);
  app.use(staticFileMiddleware);
  app.use(history());
  app.use(staticFileMiddleware);
  app.get('/', function (req, res) {
    res.render(path.join(distPath + '/index.html'))
  })
  const server = https.createServer(options, app).listen(port, ip)
} else {
    throw new Error('No Dist Path - please build')
}
