<template>
  <div>
    <query-condition></query-condition>
    <result-data :sex="sex"></result-data>

  </div>
</template>

<script>

// @是在webpack.base.conf.js定义的src路径的别名
import QueryCondition from './QueryCondition'
import ResultData from './ResultData'



export default {
  data() {
    return {
      sex: 'female'
    }
  },

  components: {
    QueryCondition, ResultData
  },
  methods: {

  }
}
</script>
