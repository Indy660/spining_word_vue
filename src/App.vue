<template>
  <div
      :style="mainGridStyle"
      :class="{'padding_right': showSidebar}"
      class="main"
      @mouseleave="returnDefaultIndex"
  >
    <template v-for="item in cellsAtScreen">
      <CellComponent
          @click.native="showSidebarFunc(false)"
          @mouseenter.native="changeIndex(item)"
          :key="item"
      />
    </template>

    <div class="content">
<!--      @click="$log(item)"-->
<!--      :ref="'inscription_' + item"-->
      <template v-for="item in timesInscription">
        <InscriptionName
            :positionX="mousePositionX"
            :positionY="mousePositionY"
            :basicPositionX="basicPositionX"
            :basicPositionY="basicPositionY"
            :order="item - 1"
            :timesInscription="timesInscription"
            :key="item"
        />
      </template>
    </div>

    <ButtonShowSidebar
        class="sidebar_button"
        @click.native.stop="showSidebarFunc(true)"
        v-if="!showSidebar"
    />
<!--    v-if="showSidebar"-->
<!--    :class="{'sidebar': showSidebar}"-->
<!--    todo: Сделать плавный переход по ширине-->
    <Sidebar
        v-if="showSidebar"
        @click.stop
        @mouseleave="returnDefaultIndex"
    />

  </div>
</template>

<script>
import CellComponent from "@/components/CellComponent";
import InscriptionName from "@/components/InscriptionName";
import Sidebar from "@/components/sidebar/Sidebar";
import ButtonShowSidebar from "@/components/ButtonShowSidebar";
export default {
  name: 'App',
  components: {
    CellComponent,
    InscriptionName,
    Sidebar,
    ButtonShowSidebar,
  },
  data() {
    return {
      mousePositionX: 0,
      mousePositionY: 0,

      showSidebar: false,
    }
  },
  computed: {
    rows() {
      return this.$store.state.mainScreen.rows;
    },
    columns() {
      return this.$store.state.mainScreen.columns;
    },
    timesInscription() {
      return this.$store.state.mainScreen.timesInscription;
    },
    cellsAtScreen() {
      return (this.rows * this.columns)
    },
    mainGridStyle() {
      return {
        gridTemplate: `repeat(${this.rows}, 1fr) / repeat(${this.columns}, 1fr)`
      }
    },
    basicPositionX() {
      return Math.ceil(this.columns / 2)
    },
    basicPositionY() {
      return Math.ceil(this.rows / 2)
    },
  },
  mounted() {
    this.returnDefaultIndex()
  },
  methods: {
    changeIndex(cellIndex) {
      this.mousePositionX = cellIndex > this.columns ? cellIndex % this.columns  === 0 ? this.columns : (cellIndex % this.columns) : cellIndex
      this.mousePositionY = cellIndex > this.columns ? Math.ceil(cellIndex / this.columns) : 1;
      // console.log(this.mousePositionX,  this.mousePositionY)
    },
    returnDefaultIndex() {
      this.mousePositionX = this.basicPositionX;
      this.mousePositionY = this.basicPositionY;
    },
    showSidebarFunc(bool) {
      this.showSidebar = bool;
    }
  },
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
  overflow: hidden;
}

.padding_right {
  padding-right: 350px;
  /*transition-duration: 0.5s;*/
  transition: padding 0.6s;
  /*transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);*/
}

.content {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/*.sidebar {*/
/*  width: 350px;*/
/*}*/

.sidebar_button {
  position: absolute;
  right: 30px;
  top: 10px;
}
</style>
