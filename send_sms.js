// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Thank you so much for protecting the mother earth, we hope your environmentally safe journey continues!',
     from: '+17755357793',
     to: '+12405618977'
   })
  .then(message => console.log(message.sid));
