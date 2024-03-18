import MovieCard from "./MovieCard";
const MovieList = ({title,movies}) => {
  console.log(title);
  console.log(movies);
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {
            movies?.map((movie)=>{
              return (
                <MovieCard key={movie.id} posterpath={movie.poster_path}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
