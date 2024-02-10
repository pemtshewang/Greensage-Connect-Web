export const getCoords = async ({
  dzongkhag,
  city
}: {
  dzongkhag: string;
  city: string;
}) => {
  const res = await fetch(`${process.env.GEOCOD_URL}?apikey=${process.env.GEOCOD_API_KEY}&postaladdress=${dzongkhag},Bhutan&city=${city}`);
  const place = await res.json();
  if (place) {
    return place;
  }
  return null;
}
