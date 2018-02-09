import * as urls from '../config/urlConsts'

export const postApi = (url, req, callback) => {
  console.info("mockApi request, url:"+url+',req'+JSON.stringify(req));
  let doSomething = MOCK_OPERATION_MAP.get(url);
  doSomething && doSomething(req);
  let response = MOCK_RESPONSE_MAP.get(url);
  setTimeout(function(){
    console.info('mockApi response:' + JSON.stringify(response));
    callback(response);
  }, 100);
}


const MOCK_PAGE_DATA = {
  page : {
    count: 1,
    currentPage: 1,
    pageSize: 10
  }
};

const MOCK_USER_LIST = [
  {
    userId: '1',
    userName: 'mock',
    realName: '测试',
    sex: '男',
    age: 18
  }
]
const MOCK_SUCCESS = {
  success: true
}
const MOCK_RESPONSE_MAP = new Map();
const MOCK_OPERATION_MAP = new Map();

MOCK_RESPONSE_MAP.set(urls.QUERY_USER_LIST,{
  ...MOCK_PAGE_DATA,
  ...MOCK_SUCCESS,
  users: MOCK_USER_LIST
});

MOCK_RESPONSE_MAP.set(urls.CREATE_USER, {
  ...MOCK_SUCCESS
});

MOCK_RESPONSE_MAP.set(urls.MODIFY_USER, {
  ...MOCK_SUCCESS
});
