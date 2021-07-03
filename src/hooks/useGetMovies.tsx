import { useEffect, useState } from "react";
import datadb from "../api/datadb";
import { Movie, MovieDBMoviesResponse } from "../interfaces/moviesInterfaces";

 interface MovieState {
     popular: Movie[];
 }
const useGetMovies = () => {

     const [isLoading, setIsLoading] = useState(true);

     const [moviesState, setMoviesState] = useState<MovieState>({
          popular:[]
     })

     const getMovie = async() => {
          const movie = await datadb.get<MovieDBMoviesResponse>('/popular');

          setMoviesState({popular:movie.data.results});
          setIsLoading(false)
     }

     useEffect(()=> {
          getMovie();
     },[])

     return {
          ...moviesState,
          isLoading
     }
}

export default useGetMovies;