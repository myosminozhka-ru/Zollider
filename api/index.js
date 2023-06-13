// Import dependencies
const express = require('express')
const mailService = require('../services/mailService.js')
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: "uploads/" });
// Create app instance
const app = express()

// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

const cpUpload = upload.fields([{ name: 'check', maxCount: 1 }, { name: 'img', maxCount: 3 }])

app.post('/', cpUpload, async function(req, res, next){
  await mailService.sendActivationMail(req.body)
  res.send(JSON.stringify(req.body));
});

module.exports = {
  path: '/api/',
  handler: app,
}