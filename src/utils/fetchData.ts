export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_KEY,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};


export async function fetchData(url : string, options : RequestInit ){
   const response = await fetch(url , options);
   const data = await response.json()


   return data; 
}