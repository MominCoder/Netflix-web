function extractJsonArray(text) {
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("JSON parse failed:", e);
    return null;
  }
}

export const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

export const pickBestMatch = (results, title, year) => {
  if(!results) return;
  
  const normalizedTitle = normalize(title);

  const filtered = results.filter((movie) => {
    if (!movie) return;
    if (!movie.release_date) return false;

    const movieYear = Number(movie.release_date.split("-")[0]);

    return (
      Math.abs(movieYear - year) <= 1 &&
      !movie.genre_ids.includes(99) && // documentary
      (normalize(movie.title) === normalizedTitle ||
        normalize(movie.original_title) === normalizedTitle)
    );
  });

  return filtered[0] || null;
};

export default extractJsonArray;
