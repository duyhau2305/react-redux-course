// CONSTANT
export const APP_SET_LOADING = 'APP/SET_LOADING';

// actions
export const setLoading = (payload) => {
  return {
    type: APP_SET_LOADING,
    payload
  }
}
