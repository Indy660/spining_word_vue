<template>
  <div
      :style="mainGridStyle"
      :class="{'padding_right': showSidebar}"
      class="main"
      @mouseleave="returnDefaultIndex"
  >
    <template v-for="(item, key) in cellsAtScreen">
      <CellComponent
          @click.native="showSidebarFunc(false)"
          @mouseenter.native="changeIndex(key)"
          :key="key"
      />
    </template>

    <div class="content">
      <template v-for="(item, key) in getTimesInscription">
        <InscriptionName
            :positionX="mousePositionX"
            :positionY="mousePositionY"
            :basicPositionX="basicPositionX"
            :basicPositionY="basicPositionY"
            :order="item - 1"
            :key="key"
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
import {URLMutationsNames, mapVuexObj, returnGettersArray, projectName} from "@/helper/helper.js"
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
    ...mapGetters(
        returnGettersArray()
    ),
    cellsAtScreen() {
      return (this.getRows * this.getColumns)
    },
    mainGridStyle() {
      return {
        gridTemplate: `repeat(${this.getRows}, 1fr) / repeat(${this.getColumns}, 1fr)`
      }
    },
    basicPositionX() {
      return Math.ceil(this.getColumns / 2)
    },
    basicPositionY() {
      return Math.ceil(this.getRows / 2)
    },
  },
  mounted() {
    this.returnDefaultIndex()
    this.updateStateByUrl()
  },
  methods: {
    // ...mapMutations({
    //   name: 'setInscriptionName',
    //   time_inscription: 'setTimesInscription',
    //   time_rows: 'setRowsNumber',
    //   time_columns: 'setColumnsNumber',
    // }),
    ...mapMutations(
        mapVuexObj(URLMutationsNames, 'mutation')
    ),
    changeIndex(cellIndex) {
      this.mousePositionX = cellIndex > this.getColumns ? cellIndex % this.getColumns  === 0 ? this.getColumns : (cellIndex % this.getColumns) : cellIndex
      this.mousePositionY = cellIndex > this.getColumns ? Math.ceil(cellIndex / this.getColumns) : 1;
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
      let queryString = location.href.replace(location.origin, '').substring(1)
      console.log('queryString', queryString)
      if (queryString.indexOf(projectName) >= 0) {
        queryString = queryString.replace(projectName, '')
        queryString = queryString.substring(1)
      }
      if (queryString.length > 1) {
        const path = queryString.split('&')
        for (const itemPath of path) {
          const indexBetween = itemPath.indexOf('=')
          if (indexBetween) {
            const keyPath = itemPath.substring(0, indexBetween)
            let valuePath = itemPath.substring(indexBetween + 1)
            if (parseInt(valuePath)) {
              valuePath = parseInt(valuePath)
            }
            console.log(keyPath, valuePath)
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
