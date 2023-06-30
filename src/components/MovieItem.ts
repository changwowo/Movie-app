import { Component } from "../core/core";
import { SimpleMovie } from "../store/movie";

interface Props {
  [key : string] : unknown
  movie : SimpleMovie
}

export default class MovieItem extends Component{
  public props!: Props
  // 이니셜라이저 이슈 - > props! 에 느낌표 붙여서 할당 연산자를 전달
  constructor(props : Props){ 
    super({
      props,
      tagName : 'a'
    })
  }
  render(){
    const {movie} = this.props

    this.el.setAttribute('href',`#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = /* html */`
      <div class='info'>
        <div class='year'>
          ${movie.Year}
        </div>
        <div class='title'>
          ${movie.Title}
        </div>
      </div>
    `
  }
}