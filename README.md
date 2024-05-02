This Website BAsically based for Medical Service
The UI/UX designed by using the Tool Figma
In Frontend used React,Redux-saga ,Material-ui
In Backend used Nodejs,Expressjs
DataBase-MongoDB
Payment Gateway-Razorpay
Video call Gateway- Tiwlio
For Mail Facilities used Nodemailer

For Running Frontend ->
1) clone the project in your local 
2) npm install
3) npm start

For Running backend->
1) Create a mongodb database url 
2) create Razorpay account and get the api keys
3) for twilio again create account and get the apis for video calling
4) create .env file and paste these environment variables 
    PORT=3003
    MONGODB_URI=
    JWT_SECRET=
    EMAIL_USER=
    EMAIL_PASS=
    RAZORPAY_KEY_ID=
    RAZORPAY_KEY_SECRET=
    TWILIO_ACCOUNT_SID=
    TWILIO_AUTH_TOKEN=
    TWILIO_API_KEY_SID=
    TWILIO_API_KEY_SECRET=
5) npm install
6) nodemon server.js
