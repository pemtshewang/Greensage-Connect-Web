export function generateBrokerId(username: string, mobile: string) {
  const usernamePart = username.slice(0, 2).toUpperCase(); // Adjusted to 2 characters
  const mobilePart = mobile.slice(-3); // Adjusted to 3 characters
  const randomNumber = Math.floor(Math.random() * 100); // Adjusted to 2 digits
  const timestampPart = Date.now().toString().slice(-3); // Adjusted to 3 digits
  return `${usernamePart}${mobilePart}${randomNumber}${timestampPart}`;
}
