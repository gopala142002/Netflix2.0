import { Banner_url } from "../apiEndPoints/apiEndPoints";

const MovieCard = ({posterpath}) => {
  return (
    <div className="w-48 pr-2">
        <img src={`${Banner_url}/${posterpath}`} alt="Movie-banner"/>
    </div>
  )
}
export default MovieCard;
