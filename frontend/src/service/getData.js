// import {postApi} from '../config/axiosUtils'
import * as urls from '../config/urlConsts'
import {postApi} from './mockGetData'

export const queryUserList = ( request, callback ) => {
  postApi(urls.QUERY_USER_LIST, request, callback);
};

export const createUser = (request, callback) => {
  postApi(urls.CREATE_USER, request, callback);
}

export const modifyUser = (request, callback) => {
  postApi(urls.MODIFY_USER, request, callback);
}
