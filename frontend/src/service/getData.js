import {queryApi} from '../config/axiosUtils'

export const queryUserList = ( request, callback ) => {
  console.debug("query user list param: " + JSON.stringify(request));
  queryApi('/users', request, callback);
};
