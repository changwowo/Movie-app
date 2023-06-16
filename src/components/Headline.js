import { Component } from "../core/core";

export default class Headline extends Component{
  render(){
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */`
      <h1>
        <span>OMDb API</span> <br>
        THE OPEN <br>
        MOVIE DATEBASE
      </h1>
      <p>
        このサイトはOMDB APIを使って作ったサイトですいろんな映画を検索することができます,<br>
        このサイトのCODEが気になる方は僕のgitに入って見ることができます,Java ScriptとType Scriptのバージョンがあります.<br>
        誰でも見ることができるからJava Scriptに興味がある人、あるいはJSだけでPage遷移をしたい人は僕のCODEを見てください！.<br>
        <a href='https://github.com/changwowo/Movie-app' target='_blank'>https://github.com/changwowo</a>
      </p>
    `
  }
}