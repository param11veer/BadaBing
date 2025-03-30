import axios from "axios";

const instance = axios.create({
  // baseUrl is the domain url and this is common base url which is same for everything
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTIzNTdmODRkZjliNzk0ODFjZTgwMDQ3ZDNlNzY0NyIsIm5iZiI6MTc0MTg2NjA5MC41MjQsInN1YiI6IjY3ZDJjNDZhNDM0Yzk4YzhlYzgxYmNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8npUTMUc8hQnoNVelmTRQFrwSKrrYEqP7ZlIQikv0s",
  },
});

export default instance;
