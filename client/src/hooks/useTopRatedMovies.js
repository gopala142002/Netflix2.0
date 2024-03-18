import axios from "axios";
import { options, topRated_Movies } from "../apiEndPoints/apiEndPoints";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies=async()=>{
    const dispatch=useDispatch();
    try{
        const res=await axios.get(topRated_Movies,options);
        console.log(res.data.results);
        dispatch(getTopRatedMovies(res.data.results));
    }catch(error){
        console.log(error);
    }
}
export default useTopRatedMovies;