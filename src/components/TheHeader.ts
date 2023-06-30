import { Component } from "../core/core";

interface State {
  [key : string] : unknown,
  menus : {
    name : string,
    href : string
  }[]
}

export default class TheHeader extends Component{
  public state!  : State 
  // 'state'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다. 
  // 시발 이니셜라이저 =( 값을 할당해주세요 ) 라는 뜻임
  // state!  할당 연산자인 ! 를 붙여서 이 값은 뭐가 됬던간에 일단 값이 할당되어있습니다 라고 속이는 방법을 사용
  constructor(){
    super({
      tagName : 'header',
      state : {
        menus : [
          {
            name : 'Search',
            href : '#/',
          },
          {
            name : 'Movie',
            href : '#/movie?id=tt4520988',
          },
          {
            name : 'About',
            href : '#/about',
          }
        ]
      }
    })
    window.addEventListener('popstate' , () => {
      this.render()
    })
  }
  render(){
    this.el.innerHTML = /* html */`
      <a href='#/' class='logo'><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */(`
              <li>
                <a class='${isActive ? 'active' : ''}' href='${menu.href}'>${menu.name}</a>
              </li>
            `)
          }).join('')}
        </ul>
      </nav>
      <a href='#/about' class='user'>
        <img src='https://i.pinimg.com/564x/e5/f0/08/e5f008748d476d98957025e67968f20d.jpg' 
        alt='User'/>
      </a>
    `
  }
}