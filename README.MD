<a  href="https://www.services.suvink.me/volunteer-me">
<center>
<img src="https://volunteerme.netlify.app/img/logo-full.d473237c.png">
</center>
</a>
 
# VolunteerME: Backend

[![Vue version](https://img.shields.io/badge/Firebase-Functions-yellow)]()
[![Vue version](https://img.shields.io/badge/Licence-MIT-orange)]()


## About

Sri Lanka is one of the best places to volunteer in the world. In fact Sri Lanka has the highest rate of volunteering in the world according to the <a href="https://www.unv.org/Our-stories/Facilitating-dialogue-volunteerism-and-inclusion-Sri-Lanka">UN Volunteers</a>.

> Sri Lanka has the highest rate of volunteering in the world. Each year
> an average of around seven million people volunteered their time,
> nearly half of those aged over 15 in the country.
> ---CAF World Giving Index


But finding a project to volunteer is not so easy. Mainly because different hosts publish their projects on their own websites and facebook pages and they are scattered everywhere. VolunteerME is a common place to list down all the volunteering opportunities in Sri Lanka so that anyone can easily find and work in projects. 


## Demo Link
 Demo Link: https://services.suvink.me/volunteer-me


## Frontend Source Code
Github: https://github.com/Suvink/volunteer-me


## Project setup

<b>Note: You need Firebase CLI tools preconfigured</b>
<br><br>


### <b>Step 1: Clone this repository and `cd` into it </b><br>
```bash
git clone git@github.com:Suvink/volunteerme-functions.git
cd volunteerme-functions
```

### <b>Step 2: Install depenancies </b><br>

```bash
npm install
```

 ### <b>Step 3: Setup API keys and secrets </b><br>


<b>Adding account SID and API token to Firebase</b>
<br>
You can follow <a href="https://www.twilio.com/docs/sms/tutorials/how-to-send-sms-messages-node-js">this guide from Twilio</a> to learn how to setup Programmable SMS. 

Use <a href="www.twilio.com/referral/ZY9uLw">this link</a> to get $10 credit for Twilio.

<b>Adding account SID and API token to Firebase</b>
<br>

| Variable | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API_KEY  | Your Twilio API key - find this [in the Console](https://www.twilio.com/console).                                                         |
| ACCOUNT_SID   | Your Twilio Account SID - find this [in the Console](https://www.twilio.com/console).                                                         |
| YOUR_TWILIO_NUMBER | Your Twilio phone number  - you can [buy one here](https://www.twilio.com/console/phone-numbers/search).|
| YOUR_MESSAGING_ID | Your Messaging service SID  - you can find [more details here](https://www.twilio.com/docs/sms/services/tutorials/how-to-send-sms-messages-services) |


Replace with your credentials and execute the following command.
```
firebase functions:config:set twilio.key="YOUR_API_KEY" twilio.sid="YOUR_ACCOUNT_SID twilio.from="YOUR_TWILIO_NUMBER" twilio.msid="YOUR_MESSAGING_ID"
```
<br>

### <b>Step 4: Testing Functions</b>
```
npm install && firebase emulators:start --only functions
```
<br>

### <b>Step 6: Deploying Functions</b>
```
npm install && firebase deploy
```

### <b>Step 6: Linking into frontend</b>
After deploying into firebase it will give you a link to your Firebase function. Grab the link and put it in your `.env` file in the frontend source code as `VUE_APP_BACKENDURL`

That's It!


## Licence
[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

<br><br>
<center>
    <img src="https://firebase.google.com/images/brand-guidelines/logo-built_black.png" width='200px'>
</center>




