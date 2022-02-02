<template>
  <input
      :value="model"
      @input="inputEmit"
  />
</template>
<script>
export default {
  name: 'simpleInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    },
  },
  methods: {
    inputEmit(newValue) {
      setTimeout(() => this.$emit('update:model', newValue.target.value), 300);
    }
  }
}
</script>
<style scoped>
  input {
    width: 100%;
    -webkit-appearance: none;
    height: 38px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 0 16px;
    border-radius: 0;
    font-size: 14px;
    outline: none;
  }
  input::placeholder {
    color: rgba(0,0,0,0.2);
  }
  input:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  input:focus {
    border: 1px solid #81f878;
  }
</style>
