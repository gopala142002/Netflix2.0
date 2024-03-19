import {createSlice} from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name:"search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
        setSearchMovieDetail:(state,action)=>{
            const {searchMovie , searchedMovies}=action.payload;
            state.movieName=searchMovie;
            state.searchedMovie=searchedMovies;
        }
    }
});
export const {setSearchMovieDetail}=searchSlice.actions;
export default searchSlice.reducer;