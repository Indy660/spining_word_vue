<template>
  <div class="main"  @mouseleave="returnDefaultIndex">
    <template v-for="item in cellsAtScreen">
      <CellComponent @mouseenter.native="changeIndex(item)" :key="item"/>
    </template>


    <div class="content">
<!--      @click="$log(item)"-->
<!--      :ref="'inscription_' + item"-->
      <template v-for="item in timesInscription">
        <InscriptionName :positionX.sync="mousePositionX"  :positionY.sync="mousePositionY" :order="item"  :key="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import CellComponent from "@/components/CellComponent";
import InscriptionName from "@/components/InscriptionName";
export default {
  name: 'App',
  components: {
    CellComponent,
    InscriptionName,
  },
  data() {
    return {
      rows: 15,
      columns: 15,
      timesInscription: 10,

      mousePositionX: 7,
      mousePositionY: 7,
    }
  },
  computed: {
    cellsAtScreen() {
      return (this.rows * this.columns)
    }
  },
  methods: {
    changeIndex(cellIndex) {
      this.mousePositionX = cellIndex > this.columns ? (cellIndex % this.rows) === 0 ? this.columns : (cellIndex % this.rows) : cellIndex;
      this.mousePositionY = cellIndex > this.columns ? Math.ceil(cellIndex / this.columns) : 1;
      // console.log(this.mousePositionX,  this.mousePositionY)
    },
    returnDefaultIndex() {
      this.mousePositionX = 7;
      this.mousePositionY = 7;
      // console.log(this.mousePositionX,  this.mousePositionY)
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

*, *::before, *::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

.main {
  background-color: black;
  height: 100vh;
  display: grid;
  /*//grid-template: repeat(v-bind(rows), 1fr) / repeat(v-bind(columns), 1fr);*/
  grid-template: repeat(15, 1fr) / repeat(15, 1fr);
  overflow: hidden;
}

.content {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
