import { Store } from "../core/core";

interface State{
  photo : string,
  name : string,
  email : string,
  github : string,
  repository : string
}

export default new Store<State>({
  photo : 'https://i.pinimg.com/564x/e5/f0/08/e5f008748d476d98957025e67968f20d.jpg',
  name : 'Changwowo / LEECHANGWOO',
  email : 'ckddn1324@gmail.com',
  github : 'https://github.com/changwowo',
  repository : 'https://github.com/changwowo/Movie-app'
})