export const createEmqxUser = async ({ username, password }: {
  username: string,
  password: string
}) => {
  const res = await fetch(`${process.env.EMQX_BASE_URL}/api/v5/authentication/password_based:built_in_database/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${process.env.EMQX_API_KEY}:${process.env.EMQX_API_SECRET}`)
    },
    body: JSON.stringify({
      "user_id": username,
      "password": password
    })
  })
  if (res?.ok) {
    console.log(res);
    return true;
  }
  return false;
}

export function generateBrokerId(username: string, mobile: string) {
  const usernamePart = username.slice(0, 2).toUpperCase(); // Adjusted to 2 characters
  const mobilePart = mobile.slice(-3); // Adjusted to 3 characters
  const randomNumber = Math.floor(Math.random() * 100); // Adjusted to 2 digits
  const timestampPart = Date.now().toString().slice(-3); // Adjusted to 3 digits
  return `${usernamePart}${mobilePart}${randomNumber}${timestampPart}`;
}

