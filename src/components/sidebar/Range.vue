<template>
 <div class="range">
    <input
        type="range"
        :min="min" :max="max"
        step="1"
        v-model="inputModel"
    >
    <div>
      <div class="data">Slider value: {{ inputModel }}/ {{ max }}</div>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'Range',
   props: {
     model: {
       type: Number,
       default: 20,
     },
     min: {
       type: Number,
       default: 0,
     },
     max: {
       type: Number,
       default: 100,
     },
   },
   computed: {
     inputModel: {
       get: function () {
         return this.model
       },
       set: function (newValue) {
         this.$emit('update:model', newValue)
       }
     }
   },
 }
</script>

<style scoped>
  input[type=range] {
    -webkit-appearance: none;
    display: block;
    width: 100%;
    margin: 16px 0;
    background: #3e3e3f;
    background-image: -webkit-gradient(linear, 20% 0%, 20% 100%, color-stop(0%, #ADD8E6), color-stop(100%, #ADD8E6));
    background-image: -webkit-linear-gradient(left, #ADD8E6 0%,#ADD8E6 100%);
    background-image: -moz-linear-gradient(left, #ADD8E6 0%, #ADD8E6 100%);
    background-image: -o-linear-gradient(to right, #ADD8E6 0%,#ADD8E6 100%);
    background-image: linear-gradient(to right, #ADD8E6 0%,#ADD8E6 100%);
    background-repeat: no-repeat;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: transparent;
    border: none;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: none;
    border: 4px solid #ADD8E6;
    height: 16px;
    width: 16px;
    border-radius: 2px;
    background: #3e3e3f;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: transparent;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: transparent;
    border: none;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: none;
    border: 4px solid #ADD8E6;
    height: 16px;
    width: 16px;
    border-radius: 2px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: transparent;
    border: none;
    box-shadow: none;
  }
  input[type=range]::-ms-fill-upper {
    background: transparent;
    border: none;
    box-shadow: none;
  }
  input[type=range]::-ms-thumb {
    box-shadow: none;
    border: 4px solid #ADD8E6;
    height: 16px;
    width: 16px;
    border-radius: 2px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: transparent;
  }
</style>