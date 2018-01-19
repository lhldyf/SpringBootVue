import { baseUrl } from './env'

import axios from 'axios'

export const queryApi = (url, req, callback) => {
  // console.debug("queryApi request, url:"+url+',req'+JSON.stringify(req));
  url = baseUrl + url;
  axios.post(url, req).then( (response) => {
    callback(response.data);
  }).catch((response) => {
    console.info('queryApi exception, url:'+url+', req:'+JSON.stringify(req));
    console.info('response:'+response);
  });
}
