import * as twilio from "twilio";

// Define Twilio credentials (securely fetch from environment variables)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

// Create a Twilio client instance
const client = new twilio.Twilio(accountSid, authToken);

// Function to initiate the verification process

export async function initiateVerification(phoneNumber: string) {
  try {
    const verification = await client.verify.v2.services(verifySid as string).verifications.create({
      to: phoneNumber, // Replace with the actual phone number
      channel: "sms",
    });
    return true;
  } catch (error) {
    console.error("Error during verification sending:", error);
    return false;
  }
}

export async function verifyCode(phoneNumber: string, code: string) {
  try {
    const res = await client.verify.v2.services(verifySid as string).verificationChecks.create({
      to: phoneNumber, // Replace with the actual phone number
      code: code,
    });
    return true;
  } catch (error) {
    console.error("Error during verification:", error);
    return false;
  }
}

export async function verifyNumber(phoneNumber: string) {
  const res = await fetch(`https://lookups.twilio.com/v2/PhoneNumbers/${phoneNumber}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`)
    }
  });
  const data = await res.json();
  console.log(data);
  if (data.valid) {
    return true;
  }
  return false;
}
