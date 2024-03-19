import { useDispatch } from "react-redux";
import { Banner_url } from "../apiEndPoints/apiEndPoints";
import {getId, setOpen} from "../redux/movieSlice"
const MovieCard = ({movieId,posterpath}) => {
  const dispatch=useDispatch();
  // alert(movieId);
  if(posterpath===null)
    return null;
  const handleOpen=()=>{
    dispatch(setOpen(true));
    dispatch(getId(movieId));
  }
  return (
    <div className="w-48 pr-2" onClick={handleOpen}>
        <img src={`${Banner_url}/${posterpath}`} alt="Movie-banner"/>
    </div>
  )
}
export default MovieCard;
