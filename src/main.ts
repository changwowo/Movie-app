import App from './App'
import router from './routes/index'

const root = document.querySelector('#root') as HTMLDivElement

root.append(new App().el)
// 여기도 가드할때 알아두면 꿀팁인거 결국 이 El 의 값이 Null 아니면 HTMLElement인데
// 이게 Null일수도 있잖아요~ ㅠㅜ 라고 지랄하는것이기 때문에
// 타입 가능 if() 를 써서 막거나
// ? 옵셔널체이닝 써서 이건 Null 일수도 있습니다~ 라고 관대하거나
// as Type 를 붙여서 타입을 지정해주면 되는일이다


router()