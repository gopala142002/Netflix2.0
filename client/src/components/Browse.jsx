import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate(); 
  useEffect(()=>{
    if(!user)
    {
      navigate("/");
    }
  },[]);

  return (
    <div>
      <Header />
      <MainContainer/>
      <MovieContainer/>
    </div>
  );
};
export default Browse;
