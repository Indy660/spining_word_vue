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
    timesInscription: {
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
      inscription: 'CSS',
      colorInscription: 0,
    }
  },
  computed: {
    computedStyle() {
      return {
        // color:  `hsl(calc(36 * ${this.order}), 75%, 75%)`,
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
    },
    stepColor() {
      return Math.ceil(360  / this.timesInscription);
    },
    startColor() {
      return this.stepColor * this.order;
    }
  },
  mounted() {
    this.colorInscription = this.startColor;
    this.updateColor()
    setInterval(() => this.updateColor(), 2000)
  },
  methods: {
    updateColor() {
      this.colorInscription = this.colorInscription + this.stepColor
      if (this.colorInscription / 360 >= 1) {
        this.colorInscription = 0
      }
      this.$refs.inscription.style.color = `hsl(${this.colorInscription}, 100%, 50%)`
      // console.log(1)
    }
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