import { Component } from "../core/core";
import movieStore from '../store/movie'
import MovieItem from "./MovieItem";

export default class MovieList extends Component{
  constructor(){
    super()
    movieStore.subscribe('movies', () => {
      this.render()
    })
    movieStore.subscribe('loading', () => {
      this.render()
    })
    movieStore.subscribe('message', () => {
      this.render()
    })
  }
  render(){
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */`
      ${movieStore.state.message 
        ? `<div class='message'>${movieStore.state.message}</div>` 
        : '<div class="movies"></div>'}
      <div class='the-loader hide'></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => {
        return new MovieItem({movie}).el
      })
    )
    const loaderEl = this.el.querySelector('.the-loader') as HTMLDivElement 
    // 아니면 이렇게 타입단언 해주는것도 나쁘지않을듯

    if(loaderEl){ /// 이건 타입 가드 ! 난 천재인듯;
      movieStore.state.loading ? loaderEl.classList.remove('hide') : loaderEl.classList.add('hide')
    }
  }
}