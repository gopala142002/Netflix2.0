import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovies:null,
        open:false
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        getPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovies=action.payload;
        },
        setOpen:(state,action)=>{
            state.open=action.payload;
        }
    }
});
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,setToggle,getTrailerMovie,setOpen}=movieSlice.actions;
export default movieSlice.reducer;