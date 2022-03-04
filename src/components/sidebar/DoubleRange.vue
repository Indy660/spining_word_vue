<template>
  <div class='range-slider'>
    <input type="range" :min="minNum" :max="maxNum" step="1" v-model="sliderMin">
    <input type="number" :min="minNum" :max="maxNum" step="1" v-model="sliderMin">
    <input type="range" :min="minNum" :max="maxNum" v-model="sliderMax">
    <input type="number" :min="minNum" :max="maxNum" step="1" v-model="sliderMax">
  </div>
</template>

<script>

export default {
  props: {
    minNum: {
      type: Number,
      default: 0,
    },
    maxNum: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      minAngle: 10,
      maxAngle: 30,
    }
  },
  computed: {
    sliderMin: {
      get() {
        return parseInt(this.minAngle);
      },
      set(val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
      }
    },
    sliderMax: {
      get() {
        return parseInt(this.maxAngle);
      },
      set(val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
      }
    }
  },
  mounted() {
    this.minAngle = this.minNum;
    this.maxAngle = this.maxNum;
  }
}
</script>

<style scoped>

.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 60px;
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=number] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 20px;
  -moz-appearance: textfield;
}

input[type=range] {
  width: 100%;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background-image: linear-gradient(to right, #ADD8E6 0%,#00c0ff 100%);
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

/* todo: перенести этот код выше (квадратные ползунки)
/*input[type=range]::-webkit-slider-thumb {*/
/*  box-shadow: none;*/
/*  border: 4px solid #ADD8E6;*/
/*  height: 16px;*/
/*  width: 16px;*/
/*  border-radius: 2px;*/
/*  background: #3e3e3f;*/
/*  cursor: pointer;*/
/*  -webkit-appearance: none;*/
/*  margin-top: -6px;*/
/*}*/

</style>