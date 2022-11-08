export const getMoviesByName = async  (movieTitle)=>  {
    try{
const result = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=`);
  const json = await result.json();
  const title = await json.Title;
  if (title === undefined) {
    console.log('Please enter a valid movie title')
  }else{
  console.log(json)
  }
    } catch(error){
        console.log(error)
    }}
getMoviesByName('spiderman');

const getMovieDetailsById = async (movieId)=> {
const result = await fetch(`http://www.omdbapi.com/?i=tt1285${movieId}&apikey=`);
const details = await result.json();
console.log(details);
}

getMovieDetailsById('563')//must enter 3 digits

