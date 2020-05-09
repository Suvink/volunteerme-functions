//keys
const accountSid = functions.config().twilio.sid
const authToken = functions.config().twilio.key
const fromNo = functions.config().twilio.from
const messagingSid = functions.config().twilio.msid

const functions = require('firebase-functions')
const client = require('twilio')(accountSid, authToken)
const cors = require('cors')({ origin: true })


exports.sendWhatsapp = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(400).json({
        message: 'Not Allowed'
      })
    } else {
      //Send text message
      client.messages 
      .create({ 
          body: req.body.message, 
          from: fromNo, 
          messagingServiceSid: messagingSid,      
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



