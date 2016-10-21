import * as actionTypes from './actionTypes';

export function registerModule(modDescription) {
  return { type: actionTypes.REGISTER_MODULE, modDescription };
}
