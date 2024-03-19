import useMovieById from "../hooks/useMovieById"
import {useSelector} from "react-redux";
const VideoBackground = ({movieId,popUp=false}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovies);
  // console.log(trailerMovie);
  useMovieById({movieId});
  return (
    <div className="w-screen">
        <iframe 
            className={`${popUp ? "w-[100%]":"w-screen aspect-video"}`}
            src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=U-c14QoseWiJt3NT&autoplay=1&mute=1`} 
            title="YouTube video player" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground;
