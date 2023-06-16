import { Component } from "../core/core";
import movieStore,{ searchMovies }from '../store/movie'

export default class Search extends Component{
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /* html */`
      <input value='${movieStore.state.searchText}' placeholder='Enter the movie title to search!'/>
      <button class='btn btn-primary'>
        Search!
      </button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input' ,()=>{
      // input안에 있는 value를 store부분의 searchText에 값이 들어가서 같이 공유가 된다
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown' , event => {
      if(event.key === 'Enter' && movieStore.state.searchText.trim()){
        //검색
        searchMovies(1)
      }
    })

    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click' , () => {
      //검색
      if(movieStore.state.searchText.trim()){
        searchMovies(1)
      }
    })
  }
}