import { baseUrl } from './env'

import axios from 'axios'

export const postApi = (url, req, callback) => {
  // console.debug("postApi request, url:"+url+',req'+JSON.stringify(req));
  url = baseUrl + url;
  axios.post(url, req).then( (response) => {
    callback(response.data);
  }).catch((response) => {
    console.info('postApi exception, url:'+url+', req:'+JSON.stringify(req));
    console.info('response:'+response);
  });
}
