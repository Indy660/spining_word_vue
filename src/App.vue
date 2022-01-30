<template>
  <div class="main"  @mouseleave="returnDefaultIndex">
    <template v-for="item in cellsAtScreen">
      <CellComponent @mouseenter.native="changeIndex(item)" :key="item"/>
    </template>


    <div class="content">
<!--      @click="$log(item)"-->
<!--      @mouseenter.native="showItem(item)"-->
      <template v-for="item in timesInscription">
        <InscriptionName :ref="'inscription_' + item" :key="item"/>
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
  mounted() {
    console.log(this.$refs.inscription_1)
    console.log(this.$refs.inscription_1.style)
  },
  methods: {
    // showItem(index) {
    //   console.log(index)
    // },
    changeIndex(cellIndex) {
      this.mousePositionX = cellIndex > this.columns ? (cellIndex % this.rows) === 0 ? this.columns : (cellIndex % this.rows) : cellIndex;
      this.mousePositionY = cellIndex > this.columns ? Math.ceil(cellIndex / this.columns) : 1;
      // console.log(this.mousePositionX,  this.mousePositionY)
      this.renderUpdate()
    },
    returnDefaultIndex() {
      this.mousePositionX = 7;
      this.mousePositionY = 7;
      // console.log(this.mousePositionX,  this.mousePositionY)
      this.renderUpdate()
    },
    renderUpdate() {
      // console.log('--')
      for (let i = 1; i <= this.timesInscription; i++) {
        // console.log('i++++', i)
        // const inscriptionName = `inscription_${i}`
        // const inscriptionName = 'inscription_' + i
        // console.log(this.$refs[inscriptionName], inscriptionName, this.$refs[inscriptionName].style)
        // let $ref = this.$refs[inscriptionName]
        // $ref.style.backgroundColor = '#66bb6a';
        // this.$refs[inscriptionName].style.backgroundColor = '#66bb6a';
        // this.$refs[inscriptionName].style.fontSize = `calc(100 + ${i * 10})px`;
        // this.$refs[inscriptionName].style.animationDelay = `calc(-0.3 + ${i})s`;
        // this.$refs[inscriptionName].$refs.name.style.fontSize = `calc(100 + ${i * 10})px`;
        // this.$refs[inscriptionName].$refs.name.style.animationDelay = `calc(-0.3 + ${i})s`;
        //        animation-delay: #{$i * -0.3}s;
        //        opacity: #{0.1 + $i * 0.1};
        //        transform:
        //            translateX(calc(-50% - (var(--positionX) - 7) * #{(7 - $i) * 3px}))
        //            translateY(calc(-50% - (var(--positionY) - 7) * #{(7 - $i) * 3px}))
        //            rotateX(calc(0deg - (var(--positionY) - 7) * 5deg))
        //            rotateY(calc((var(--positionX) - 7) * 5deg));
        //   }
      }
    },
    // @for $i from 0 to 10 {
    //  &:nth-child(#{$i + 1}) {
    //    font-size: #{100 + $i * 10}px;
    //    animation-delay: #{$i * -0.3}s;
    //    opacity: #{0.1 + $i * 0.1};
    //    transform:
    //        translateX(calc(-50% - (var(--positionX) - 7) * #{(7 - $i) * 3px}))
    //        translateY(calc(-50% - (var(--positionY) - 7) * #{(7 - $i) * 3px}))
    //        rotateX(calc(0deg - (var(--positionY) - 7) * 5deg))
    //        rotateY(calc((var(--positionX) - 7) * 5deg));
    //  }
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

/*:root {*/
/*  //начальное направление текста*/
/*  --positionX: 7;*/
/*  --positionY: 7;*/

/*  --rows: v-bind(rows);*/
/*  //--columns: v-bind(columns);*/
/*  --columns: v-bind(columns);*/
/*  //--timesInscription: v-bind(timesInscription);*/
/*  //--timesInscription: v-bind(timesInscription);*/
/*}*/

/*$timesInscription: var(--timesInscription);*/
/*$middle: 15;*/
/*$columns: 15;*/
/*$rows: 15;*/
/*@for $i from 0 to $middle {*/
/*  //каждый 15 + другой элемент*/
/*  //.cell:nth-child($columns#{$n} + #{$i + 1}):hover ~ .content {*/
/*  .cell:nth-child(15n + #{$i + 1}):hover ~ .content {*/
/*    //передвижение надписи по оси х за мышкой*/
/*    --positionX: #{$i};*/
/*  }*/
/*  //:nth-child(-n + #{$rows * ($i + 1)}) - зачем лишнее?*/
/*  .cell:nth-child(n + #{$rows * $i + 1}):hover ~ .content {*/
/*    //.cell:nth-child(n + #{15 * $i + 1}):nth-child(-n + #{15 * ($i + 1)}):hover ~ .content {*/
/*    //передвижение надписи по оси у за мышкой*/
/*    --positionY: #{$i};*/
/*  }*/
/*}*/

.main {
  background-color: black;
  height: 100vh;
  display: grid;
  /*//grid-template: repeat(v-bind(rows), 1fr) / repeat(v-bind(columns), 1fr);*/
  grid-template: repeat(15, 1fr) / repeat(15, 1fr);
  /*//grid-template: repeat(var(--rows), 1fr) / repeat(var(--columns), 1fr);*/
  overflow: hidden;
}

.content {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*//надпись, последняя $i - самая верхняя*/
/*.name {*/
/*  @for $i from 0 to 10 {*/
/*    &:nth-child(#{$i + 1}) {*/
/*      font-size: #{100 + $i * 10}px;*/
/*      animation-delay: #{$i * -0.3}s;*/
/*      opacity: #{0.1 + $i * 0.1};*/
/*      transform:*/
/*          translateX(calc(-50% - (var(--positionX) - 7) * #{(7 - $i) * 3px}))*/
/*          translateY(calc(-50% - (var(--positionY) - 7) * #{(7 - $i) * 3px}))*/
/*          rotateX(calc(0deg - (var(--positionY) - 7) * 5deg))*/
/*          rotateY(calc((var(--positionX) - 7) * 5deg));*/
/*    }*/
/*  }*/

/*   изменение цвета*/
/*  @keyframes color {*/
/*    @for $c from 0 through 10 {*/
/*      #{$c * 10%} { color: hsl(36 * $c, 75%, 75%); }*/
/*    }*/
/*  }*/
/*}*/
</style>
