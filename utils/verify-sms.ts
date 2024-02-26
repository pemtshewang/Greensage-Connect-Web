import * as twilio from "twilio";

// Define Twilio credentials (securely fetch from environment variables)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create a Twilio client instance
const client = new twilio.Twilio(accountSid, authToken);

// Function to initiate the verification process

export async function verifyNumber(phoneNumber: string) {
  try {
    const res = await client.lookups.v2.phoneNumbers(`+975${phoneNumber}`).fetch();
    const isValid = res.valid;
    if (isValid) {
      return true;
    }
  } catch (err) {
    console.log(err)
    return null;
  }
}
