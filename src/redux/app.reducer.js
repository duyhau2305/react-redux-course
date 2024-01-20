import * as appActions from './app.actions';

// initial state
const initialState = {
  isLoading: false
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case appActions.APP_SET_LOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state;
  }
}