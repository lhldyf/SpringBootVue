import {postApi} from '../config/axiosUtils'
import * as urls from '../config/urlConsts'

export const queryUserList = ( request, callback ) => {
  console.debug("query user list param: " + JSON.stringify(request));
  postApi(urls.QUERY_USER_LIST, request, callback);
};

export const createUser = (request, callback) => {
  console.debug('create user param: ' +JSON.stringify(request) );
  postApi(urls.CREATE_USER, request, callback);
}
