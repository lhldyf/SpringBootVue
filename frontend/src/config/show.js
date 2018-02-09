import { Message } from 'element-ui';

export const showSuccessMsg = msg => {
  Message({
    message: msg,
    type: 'success'
  });
}


export const showFailMsg = msg => {
  Message.error(msg);
}

export const validBeforeSubmit = ( _this, formName, callback ) => {
  _this.$refs[formName].validate( (valid) => {
    if(valid) {
      callback();
    } else {
      showFailMsg('请检查您输入的参数后提交');
    }
  });
}
