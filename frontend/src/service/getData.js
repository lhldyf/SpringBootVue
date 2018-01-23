import {postApi} from '../config/axiosUtils'

export const queryUserList = ( request, callback ) => {
  console.debug("query user list param: " + JSON.stringify(request));
  postApi('/users', request, callback);
};

export const createUser = (request, callback) => {
  console.debug('create user param: ' +JSON.stringify(request) );
  postApi('/clearUsers', request, callback);
}
