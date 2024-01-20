import axios from 'axios';

// actions
import * as appActions from '../redux/app.actions';

const requestConfig = {
  baseURL: 'https://tony-auth-express.vercel.app',
  showSpinner: false
}

export const request = axios.create(requestConfig);

export function initRequest(store) {
  // Add a request interceptor
  request.interceptors.request.use(
    config => {
      console.log('request interceptor: ', config); // show spinner

      // show loading
      if(config.showSpinner){
        store.dispatch(appActions.setLoading(true));
      }
      return config
    },
    error => {
      console.log('error interceptor: ', error); // show spinner
      Promise.reject(error)
    }
  )

  request.interceptors.response.use(
    response => {
      console.log('response interceptor: ', response) ;

      // hide spinner
      if(response.config.showSpinner){
        store.dispatch(appActions.setLoading(false));
      }
      // hide loading
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
}