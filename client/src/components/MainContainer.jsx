import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import {useSelector} from "react-redux";
const MainContainer = () => {
  const movies=useSelector(store => store.movie?.nowPlayingMovies);
  if(!movies)
    return;
  const {overview,id,title}=movies[3];
  console.log(movies[3]);
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
