<template>
<!--  :value="model"-->
<!--  @input="inputEmit"-->
  <input
    v-model="inputModel"
  />
</template>
<script>
export default {
  name: 'simpleInput',
  props: {
    stateProp: {
      type: Array,
      default: () => [],
    },
    action: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputModel: {
      get () {
        let path = this.$store.state
        return this.stateProp.reduce((current, key) => current?.[key], path)
      },
      set (value) {
        //todo: некоторые буквы пропадают
        setTimeout(() => this.$store.commit(this.action, value), 100);
      }
    }
  },
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
