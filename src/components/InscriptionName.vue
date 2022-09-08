<template>
  <div class="name" :style="computedStyle">{{ getInscription }}</div>
</template>

<script>
import { mapGetters } from "vuex"
import { returnGettersArray } from "@/helper/helper.js"
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
      colorInscription: 0,
      timerId: null,
    }
  },
  computed: {
    ...mapGetters(
        returnGettersArray()
    ),
    computedStyle() {
      return {
        color: `hsl(${this.colorInscription}, ${this.getSaturation}%, ${this.getLightness}%)`,
        fontSize: `calc(${this.getInitialFontSize}px + ${this.order} * 10px)`,
        animationDelay: `calc(-0.3s + ${this.order}s)`,
        opacity: `${this.opacity}`,
        transform: `
         translateX(calc(-50% - (${this.positionX} - ${this.basicPositionX}) * (${this.basicPositionX} - ${this.order}) * 3px))
         translateY(calc(-50% - (${this.positionY} - ${this.basicPositionY}) * (${this.basicPositionY} - ${this.order}) * 3px))
         rotateX(calc(0deg - (${this.positionY} - ${this.basicPositionY}) * 5deg))
         rotateY(calc((${this.positionX} - ${this.basicPositionX}) * 5deg))
         `
      }
    },
    stepColor() {
      return Math.ceil((this.getHue.end - this.getHue.start) / this.getTimesInscription);
    },
    startColor() {
      return this.stepColor * this.order;
    },
    opacity() {
      return (this.order + 1) / this.getTimesInscription
    },
  },
  mounted() {
    this.colorInscription = this.startColor;
    this.updateColorStartFunc()
  },
  methods: {
    updateColor() {
      this.timerId = setInterval(() => {
      this.colorInscription = this.colorInscription + this.stepColor
      if (this.colorInscription / this.getHue.end >= 1) {
        this.colorInscription = this.getHue.start
      }
      }, this.getSpeedUpdateColor)
    },
    updateColorStartFunc() {
      clearInterval(this.timerId)
      this.updateColor()
    },
  },
  watch: {
    getSpeedUpdateColor: {
      handler() {
        this.updateColorStartFunc()
      }
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