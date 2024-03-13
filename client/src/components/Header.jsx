import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../apiEndPoints/apiEndPoints";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((store) => store.user.user);
  // console.log(user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const logoutHandler=async ()=>{
    try
    {
      const res=await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success)
      {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    }
    catch(error)
    {
      console.log(error);
    }
  }
  return (
    <div className="absolute z-10 flex w-[100%] justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://saasradar.net/wp-content/uploads/2022/07/netflix-2048x634.png"
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex items-center">
          <ArrowDropDownCircleOutlinedIcon className="w-24 h-24 text-white" />
          <h1 className="text-lg font-medium text-white">{user.name}</h1>
          <div className="ml-4">
            <button onClick={logoutHandler} className="bg-red-800 text-white px-4 py-2">Log Out</button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
