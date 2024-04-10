import { env } from "@/env";

export const sendUserOTP = async ({
  phoneNumber,
  otpDigits,
}: {
  phoneNumber: string;
  otpDigits: string;
}) => {
  const res = await fetch("https://api.httpsms.com/v1/messages/send", {
    method: "POST",
    headers: {
      "x-api-key": env.HTTP_SMS_API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `Your registration OTP for greensage connect is ${otpDigits}`,
      from: "+97517531019",
      to: phoneNumber,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    console.log("the data from otp", data);
    return { success: true };
  }
  return { success: false };
};
