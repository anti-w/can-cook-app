import { ADD_ALIMENTO } from './actionTypes'

export const addAlimento = alimento => {
  return {
    type: ADD_ALIMENTO,
    payload: alimento
  }
}