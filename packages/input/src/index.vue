<template>
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="handleInput"
      @keyup="handleKeyUp"
    />
</template>

<script>
function getVal (re, val) {
  val = !val.match(re) ? '' : val.match(re)[0]
  return val
}
export default {
  name: 'DfInput',
  data () {
    return {}
  },
  props: {
    value: {
      default: '',
      type: String
    },
    positiveNumber: {
      default: false,
      type: Boolean
    }
  },
  inheritAttrs: false,
  methods: {
    /**
     * @description input 事件
     */
    handleInput (e) {
      if (!this.positiveNumber) {
        this.$emit('input', e.target.value)
      }
    },
    /**
     * @description keyup 事件
     */
    handleKeyUp (e) {
      if (this.positiveNumber) {
        this.getPositiveNumber(e)
      }
    },
    /**
     * @description 获得正数
     * @param {Object/event} e
     */
    getPositiveNumber (e) {
      e = e || window.event
      let originVal = e.target.value
      const codeKey = e.key
      originVal = e.target.value = getVal(/^[0-9]\d*\.*\d*/g, originVal)
      if (codeKey === '.') {
        originVal.split('.').length > 2 && (e.target.value = getVal(/^[0-9]\d*\./g, originVal))
      }
      this.$emit('input', e.target.value)
    }
  }
}
</script>
