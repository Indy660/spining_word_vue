<template>
  <div  ref="name" class="name" :style="computedStyle">{{ inscription }}</div>
</template>

<script>
export default {
  name: "InscriptionName",
  data() {
    return {
      inscription: 'CSS'
    }
  },
  computed: {
    computedStyle() {
      return {
        color: 'red',
        fontSize: '13px'
      }
    }
  }
}
</script>

<style scoped>
.name {
  font-family: 'Fredoka One', cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: color 3s infinite linear;
  text-shadow: 0 0 10px #000a;
  transition: all 0.5s;
  color: wheat;
}
</style>