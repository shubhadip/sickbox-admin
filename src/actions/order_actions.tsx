import axios from 'axios';

import { SAVE_ORDERS } from './types';
import { API_URL } from './../services/apiUrls';
import { GetHeaders } from './../credentials/access_headers';

export function fetchOrders() {
  return (dispatch) => {
    axios
      .get(`${API_URL}/orders?fields=status`, GetHeaders())
      .then((response) => {
        dispatch({
          type: SAVE_ORDERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
}
