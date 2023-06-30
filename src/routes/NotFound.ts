import { Component } from "../core/core";

export default class NotFound extends Component{
  render(){
    this.el.classList.add('container' , 'not-found')
    this.el.innerHTML = /* html */`
      <h1>
        Pageがありません、、、、、、<br>
        URLを確認した後にまた接続してください
      </h1>
    `
  }
}