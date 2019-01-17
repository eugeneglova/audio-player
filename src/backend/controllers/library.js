import rp from "request-promise";

export const songs = async (req, res) => {
  const result = await rp(
    "https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=song&limit=5&sort=recent"
  );
  res.json(JSON.parse(result));
};
