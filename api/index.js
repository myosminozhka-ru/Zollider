// Import dependencies
const express = require('express')
const mailService = require('../services/mailService.js')

// Create app instance
const app = express()

// Define JSON as return type
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  console.log(req)
  await mailService.sendActivationMail()
  res.json({ message: 'hello world' })
})

module.exports = {
  path: '/api',
  handler: app,
}