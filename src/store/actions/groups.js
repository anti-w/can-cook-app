import { SELECT_GROUP } from './actionTypes'

/*
  Actions são utilizadas para lidar com as mudanças do estado global criado utilizando o redux. Temos então uma arrow function que lida com o estado do objeto group contido no reducer. Ela espera um objeto, informa para o reducer qual o tipo de ação deverá ser feita e então gera o que eles chamam de payload, contendo o objeto criado através da chamada da função em qualquer que seja o componente que vá utiliza-lá. Nessa aplicação eu utilizei parar disparar uma ação para um componente irmão do component Filter, o component AlimentosList que realiza a requisição de acordo com o que o usuário escolhe de grupo alimentar no app. 
*/

export const filter = group => {
  return {
    type: SELECT_GROUP,
    payload: group
  }
}