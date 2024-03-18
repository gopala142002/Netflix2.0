import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";
const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const toggle=useSelector(store => store.movie.toggle);
  const navigate = useNavigate(); 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useEffect(()=>{
    if(!user)
    {
      navigate("/");
    }
  },[]);

  return (
    <div>
      <Header />
      {
        toggle ? <SearchMovie/>:(
          <>
            <MainContainer/>
            <MovieContainer/>
          </>
        )
      }
    </div>
  );
};
export default Browse;
