<template>
  <div>
    <query-condition></query-condition>
    <result-data></result-data>
    <modify-form></modify-form>
    <create-form></create-form>
  </div>
</template>

<script>

// @是在webpack.base.conf.js定义的src路径的别名
import QueryCondition from './QueryCondition'
import ResultData from './ResultData'
import ModifyForm from './ModifyForm'
import CreateForm from './CreateForm'



export default {
  data() {
    return {

    }
  },

  components: {
    QueryCondition,
    ResultData,
    ModifyForm,
    CreateForm
  },
  methods: {

  }
}
</script>
