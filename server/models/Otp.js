const mongoose = require('mongoose');
const { mailSender } = require('../utils/mailSender');

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 300, 
    },
    used: {
        type: Boolean,
        default: false,
    },
});


async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email,"otp for veriication",otp);
        console.log("Email sent successfully :",mailResponse);
    }catch(error){
        console.log("error occured while sending mails:",error);
        throw error;
        
    }
}

OTPSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports = mongoose.model("OTP",OTPSchema);
