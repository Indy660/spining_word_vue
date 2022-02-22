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

    <transition name="fade">
      <ButtonShowSidebar
          class="sidebar_button"
          @click.native.stop="showSidebarFunc(true)"
          v-if="!showSidebar"
      />
    </transition>
    <Sidebar
        :showSidebar="showSidebar"
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
import { mapMutations, mapGetters } from "vuex"
import { URLMutationsNames, mapVuexObj } from  "@/helper/helper.js"
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
    ...mapGetters([
      'timesInscription',
      'rows',
      'columns',
      'inscription',
    ]),
    // ...mapGetters(
    //     mapVuexObj(URLMutationsNames, 'getter')
    // ),
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
    this.updateStateByUrl()
  },
  methods: {
    // ...mapMutations({
    //   name: 'updateInscriptionName',
    //   time_inscription: 'updateTimesInscription',
    //   time_rows: 'updateRowsNumber',
    //   time_columns: 'updateColumnsNumber',
    // }),
    ...mapMutations(
        mapVuexObj(URLMutationsNames, 'mutation')
    ),
    changeIndex(cellIndex) {
      this.mousePositionX = cellIndex > this.columns ? cellIndex % this.columns  === 0 ? this.columns : (cellIndex % this.columns) : cellIndex
      this.mousePositionY = cellIndex > this.columns ? Math.ceil(cellIndex / this.columns) : 1;
      // console.log(URLMutationsNames.map(item => ({[item.name]: item.mutation})),)
      // console.log(this.mousePositionX,  this.mousePositionY)
    },
    returnDefaultIndex() {
      this.mousePositionX = this.basicPositionX;
      this.mousePositionY = this.basicPositionY;
    },
    showSidebarFunc(bool) {
      this.showSidebar = bool;
    },
    updateStateByUrl() {
      console.log(location.href.replace(location.origin, ''))
      if (location.href.replace(location.origin, '').length > 1) {
        const queryString = location.href.replace(location.origin, '').substring(1)
        const path = queryString.split('&')
        for (const itemPath of path) {
          const indexBetween = itemPath.indexOf('=')
          if (indexBetween) {
            const keyPath = itemPath.substring(0, indexBetween)
            let valuePath = itemPath.substring(indexBetween + 1)
            if (parseInt(valuePath)) {
              valuePath = parseInt(valuePath)
            }
            // console.log(keyPath, valuePath)
            // for (const item of URLMutationsNames) {
              if (this[keyPath]) {
                this[keyPath](valuePath)
              }
            // }

          }
        }
      }
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
  transition: padding 0.5s;
}

.content {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.sidebar_button {
  position: absolute;
  right: 30px;
  top: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
