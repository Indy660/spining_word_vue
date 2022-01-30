<template>
  <div ref="inscription" class="name" :style="computedStyle">{{ inscription }}</div>
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
      default: 1,
    },
    positionY: {
      type: Number,
      default: 1,
    },
    basicPositionX: {
      type: Number,
      default: 1,
    },
    basicPositionY: {
      type: Number,
      default: 1,
    }
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
        // color:  changeColors(50, 500),
        fontSize: `calc(100px + ${this.order} * 10px)`,
        animationDelay: `calc(-0.3s + ${this.order}s)`,
        opacity: `calc(0.1 +  ${this.order} * 0.1)`,
        transform: `
         translateX(calc(-50% - (${this.positionX} - ${this.basicPositionX}) * (${this.basicPositionX} - ${this.order}) * 3px))
         translateY(calc(-50% - (${this.positionY} - ${this.basicPositionY}) * (${this.basicPositionY} - ${this.order}) * 3px))
         rotateX(calc(0deg - (${this.positionY} - ${this.basicPositionY}) * 5deg))
         rotateY(calc((${this.positionX} - ${this.basicPositionX}) * 5deg))
         `
      }
    }
  },
  mounted() {
    // setInterval(() => {
    //   console.log(this.$refs.inscription.style)
    //   this.$refs.inscription.style.color = `hsl(++50% 360}, 100%, 50%)`,
    //       500
    // })
  },
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
}
</style>