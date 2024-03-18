import {useDispatch} from "react-redux";
import axios from "axios";
import { options, popular_Movies } from "../apiEndPoints/apiEndPoints";
import { getPopularMovies } from "../redux/movieSlice";
const usePopularMovies=async()=>{
    const dispatch=useDispatch();
    try{   
        const res=await axios.get(popular_Movies,options);
        console.log(res.data.results);
        dispatch(getPopularMovies(res.data.results));
    }
    catch(error)
    {
        console.log(error);
    }
}
export default usePopularMovies;