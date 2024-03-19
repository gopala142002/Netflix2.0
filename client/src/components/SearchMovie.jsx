import { useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { Search_Movie_URL, options } from "../apiEndPoints/apiEndPoints";
import { setSearchMovieDetail } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const dispatch=useDispatch();
  const [searchMovie, setSearchMovie] = useState("");
  const isLoading=useSelector(store => store.user.isLoading);
  const {movieName,searchedMovie}=useSelector(store => store.searchMovie);
  // console.log(movieName,searchedMovie);
  const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try{
      const res=await axios.get(`${Search_Movie_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,options);
      // console.log(res.data.results);
      const searchedMovies=res?.data?.results;
      dispatch(setSearchMovieDetail({searchMovie , searchedMovies}));
    }catch(error)
    {
      console.log(error);
    }
    finally{
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form action="" onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-between p-2 shadow-md border-2 border-gray-200 rounded-lg w-[100%]">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              type="text"
              placeholder="Search Movies....."
              className="w-full outline-none rounded-md text-lg"
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">
              {isLoading?"loading...":"Search"}
            </button>
          </div>
        </form>
      </div>
      <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>
    </>
  );
};

export default SearchMovie;
