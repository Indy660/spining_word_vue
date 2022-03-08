<template>
  <div class="name" :style="computedStyle">{{ inscription }}</div>
</template>

<script>
import { mapGetters } from "vuex"
import { returnGettersArray} from "@/helper/helper.js"
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
    }
  },
  computed: {
    ...mapGetters(
        returnGettersArray()
    ),
    computedStyle() {
      return {
        color: `hsl(${this.colorInscription}, ${this.saturationState}%, ${this.lightnessState}%)`,
        fontSize: `calc(100px + ${this.order} * 10px)`,
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
      return Math.ceil(360  / this.timesInscription);
    },
    startColor() {
      return this.stepColor * this.order;
    },
    //todo: Сделать ещё свойств
    opacity() {
      return (this.order + 1)/this.timesInscription
    },
  },
  mounted() {
    this.colorInscription = this.startColor;
    this.updateColor()
    setInterval(() => this.updateColor(), 200)
  },
  methods: {
    updateColor() {
      this.colorInscription = this.colorInscription + this.stepColor
      if (this.colorInscription / 360 >= 1) {
        this.colorInscription = 0
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