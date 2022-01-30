<template>
  <div class="name" :style="computedStyle">{{ inscription }}</div>
</template>

<script>
export default {
  name: "InscriptionName",
  props: {
    order: {
      type: Number,
      default: 1,
    },
    positionX: {
      type: Number,
      default: 7,
    },
    positionY: {
      type: Number,
      default: 7,
    },
  },
  data() {
    return {
      inscription: 'CSS'
    }
  },
  computed: {
    computedStyle() {
      /*  @keyframes color {*/
      /*    @for $c from 0 through 10 {*/
      /*      #{$c * 10%} { color: hsl(36 * $c, 75%, 75%); }*/
      /*    }*/
      /*  }*/
      return {
        color:  `hsl(calc(36 * ${this.order}), 75%, 75%)`,
        fontSize: `calc(100px + ${this.order} * 10px)`,
        animationDelay: `calc(-0.3s + ${this.order}s)`,
        opacity: `calc(0.1 +  ${this.order} * 0.1)`,
        transform: `
         translateX(calc(-50% - (${this.positionX} - 7) * (7 - ${this.order}) * 3px))
         translateY(calc(-50% - (${this.positionY} - 7) * (7 - ${this.order}) * 3px))
         rotateX(calc(0deg - (${this.positionY} - 7) * 5deg))
         rotateY(calc((${this.positionX} - 7) * 5deg))
         `
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