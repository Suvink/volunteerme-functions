const functions = require('firebase-functions')
const accountSid = functions.config().twilio.sid
const authToken = functions.config().twilio.key
const client = require('twilio')(accountSid, authToken)
const cors = require('cors')({ origin: true })

exports.sendWhatsapp = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(400).json({
        message: 'Not Allowed'
      })
    } else {
      client.messages
        .create({
          mediaUrl: [
            'https://wizardly-visvesvaraya-500b32.netlify.app/favicon.png'
          ],
          from: 'whatsapp:+14155238886',
          body: req.body.message,
          to: req.body.to
        })
        .then(message => console.log(message.sid))
        .then(
          res.status(200).json({
            message: 'success!'
          })
        )
        .catch(error => {
          console.log(error)
        })
    }
  })
})

