<template>
  <div class='range-slider'>
    <input type="range" :min="minNum" :max="maxNum" step="1" v-model="sliderMin">
    <input type="number" :min="minNum" :max="maxNum" step="1" v-model="sliderMin">
    <input type="range" :min="minNum" :max="maxNum" v-model="sliderMax">
    <input type="number" :min="minNum" :max="maxNum" step="1" v-model="sliderMax">
    <div class="colors">
      <div style="background-color: red" class="half-width"></div>
      <div style="background-color: yellow" class="full-width"></div>
      <div style="background-color: green" class="full-width"></div>
      <div style="background-color: aqua" class="full-width"></div>
      <div style="background-color: blue" class="full-width"></div>
      <div style="background-color: purple" class="full-width"></div>
      <div style="background-color: red" class="half-width"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    minNum: {
      type: Number,
      default: 1,
    },
    maxNum: {
      type: Number,
      default: 360,
    },
    stateProp: {
      type: Array,
      default: () => [],
    },
    action: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      minAngle: null,
      maxAngle: null,
    }
  },
  computed: {
    sliderMin: {
      get() {
        let path = this.$store.state
        return this.stateProp.reduce((current, key) => current?.[key], path).start
      },
      set(val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
        this.$store.commit(this.action,
            {start: this.minAngle, end: this.maxAngle}
        );
      }
    },
    sliderMax: {
      get() {
        let path = this.$store.state
        return this.stateProp.reduce((current, key) => current?.[key], path).end
      },
      set(val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
        this.$store.commit(this.action,
            {start: this.minAngle, end: this.maxAngle}
        );
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

.range-slider .colors {
  height: 30px;
  width: 100%;
  display: flex;
  margin-top: 15px;
}

.range-slider .colors .full-width {
  flex: 1 1 0;
}

.range-slider .colors .half-width {
  flex: 0.5 1 0;
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