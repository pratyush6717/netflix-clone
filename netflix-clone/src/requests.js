const API_KEY= "e4cd4ef014365db372ea643e883bbd85";

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language-en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;