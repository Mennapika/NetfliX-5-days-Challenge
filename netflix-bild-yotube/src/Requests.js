const API_KEY="03cf7673f21ae8c63d4097e2a8bf28df";
const requests= {
   fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`, 
   fetchNetflixOrignals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&with_networks=213`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;