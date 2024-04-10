export function getRandomDigits(): number {
  const randomDigits = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
  const formattedDigits = randomDigits.toString().padStart(6, "0"); // Ensure it's 6 digits long
  return Number(formattedDigits);
}
