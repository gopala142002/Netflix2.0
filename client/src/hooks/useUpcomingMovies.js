import axios from "axios";
import { options, upcoming_Movies } from "../apiEndPoints/apiEndPoints";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies=async()=>{
    const dispatch=useDispatch();
    try{
        const res=await axios.get(upcoming_Movies,options);
        console.log(res.data.results);
        dispatch(getUpcomingMovies(res.data.results));
    }
    catch(error){
        console.log(error);
    }
}
export default useUpcomingMovies;