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

    const inputEl = this.el.querySelector('input') as HTMLInputElement
    // 아까랑 같은 타입단언을 하던가 아니면 가드를 진행하던가

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

    const btnEl = this.el.querySelector('.btn') //as HTMLButtonElement // 타입 단언
   
      btnEl?.addEventListener('click' , () => { // 옵셔널 체이닝도 가능하네
        //검색
        if(movieStore.state.searchText.trim()){
          searchMovies(1)
        }
      })
      // 지금까지 확인했을때 as Type 단언이나 if() 타입가드 or ? 옵셔널 체이닝으로 Null 가능성만 배제하면 다 될듯
  }
}