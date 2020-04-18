<center>
<img src="https://wizardly-visvesvaraya-500b32.netlify.com/img/logo-trans.767adaaa.png">
</center>

## VolunteerME Overview

Sri Lanka is one of the best places to volunteer in the world. In fact Sri Lanka has the highest rate of volunteering in the world according to the <a href="https://www.unv.org/Our-stories/Facilitating-dialogue-volunteerism-and-inclusion-Sri-Lanka">UN Volunteers</a>.

> Sri Lanka has the highest rate of volunteering in the world. Each year
> an average of around seven million people volunteered their time,
> nearly half of those aged over 15 in the country.
> ---CAF World Giving Index


But finding a project to volunteer is not so easy. Mainly because different hosts publish their projects on their own websites and facebook pages and they are scattered everywhere. So I wanted to come up with a common place to list down all the volunteering opportunities in Sri Lanka so that anyone could easily find and work in projects. 


## Demo Link
 Demo Link: https://services.suvink.me/volunteer-me


## Link to Code
Github: https://github.com/Suvink/volunteer-me


## Project setup

<b>Note: You need Firebase CLI tools preconfigured</b>
<br><br>

<b>Twilio API keys:</b><br>
Head over to Twilio.com and create an account. Follow <a href="https://www.twilio.com/docs/whatsapp/api">this</a> tutorial and get Twilio account SID and an API token.
<br><br>

<b>Adding account SID and API token to Firebase</b>
<br>
Replace API_KEY and ACCOUNT_SID with your credentials and execute the following command.
```
firebase functions:config:set twilio.key="API_KEY" twilio.id="ACCOUNT_SID"
```
<br>

<b>Testing Functions</b>
```
npm install && firebase emulators:start --only functions
```
<br>

<b>Deploying Functions</b>
```
npm install && firebase deploy
```






