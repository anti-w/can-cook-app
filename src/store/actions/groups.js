import { SELECT_GROUP } from './actionTypes'

export const filter = group => {
  return {
    type: SELECT_GROUP,
    payload: group
  }
}