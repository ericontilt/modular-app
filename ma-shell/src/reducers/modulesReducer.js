import * as actionTypes from '../actions/actionTypes';

export default function modulesReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.REGISTER_MODULE:
      return [
        ...state,
        action.modDescription
      ];

    default:
      return state;
  }
}
