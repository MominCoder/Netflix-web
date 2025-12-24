import getSuggestedMovies from "./getSuggestedMovies";
import extractJsonArray, { pickBestMatch } from "./helper";

const askAI = async (query) => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;

  const body = {
    contents: [
      {
        parts: [{ text: query }],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            release_year: { type: "integer" },
          },
          required: ["name", "release_year"],
        },
      },
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const rawText = text.replace(/```json|```/g, "").trim();
    const AISuggestions = extractJsonArray(rawText);

    if (!AISuggestions) throw Error("Error occured while movie search");    
    
    const movies = await Promise.all(
      AISuggestions.map(async ({ name, release_year }) => {
        const results = await getSuggestedMovies(name, release_year);
        return pickBestMatch(results, name, release_year);
      })
    );

    return movies;
  } catch (error) {    
    console.log(error);    
  }
};

export default askAI;
