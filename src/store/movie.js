import { Store } from "../core/core";

const store = new Store({
  searchText : '',
  page : 1,
  pageMax : 1,
  movies : [],
  movie :  {},
  loading : false,
  message : 'Search for the movie title!!!'
})

export default store

export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if(page === 1){
    store.state.movies = []
    store.state.message = ''
  }
  try{
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
    const { Search , totalResults , Response , Error} = await res.json()
    if(Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
    }else{
      store.state.message = Error
    }
    store.state.pageMax =  Math.ceil(Number(totalResults) / 10)
  }catch(error){
    console.log('서치에서 에러 발생', error)
  }finally{
    store.state.loading = false
  }
}

export const getMovieDetails = async id => {
  try{
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`)
    store.state.movie =  await res.json()
  }catch(e){
    console.log('겟무비 에러 발생',e)
  }
}