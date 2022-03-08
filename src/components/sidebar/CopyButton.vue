<template>
  <button ref="button" @click="copyMethod" type="button">Скопировать настройки
    <span class="done" aria-hidden="true">Ссылка скопирована</span>
  </button>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
import {mapVuexObj, URLMutationsNames, } from "@/helper/helper.js"
export default {
  name: "CopyButton",
  computed: {
    ...mapGetters(
        mapVuexObj(URLMutationsNames, 'getter')
    ),
  },
  methods: {
    ...mapMutations([
        'setDefaultState'
    ]),
    copyMethod() {
      this.$refs.button.classList.add( 'copied' );
      const temp = setInterval(() => {
        this.$refs.button.classList.remove( 'copied' );
        clearInterval(temp);
      }, 600 );
      let newUrl = `${location.origin}/`;
      //todo: придумать проверку сравнения со стандартным условиями, убрать глупую проверку
      // todo: копирование начала и конца цвета
      // eslint-disable-next-line no-constant-condition
      if (1 === 1) {
        for (const item of URLMutationsNames) {
          const newPath = `${item.name}=${this[item.name]}&`
          newUrl += newPath
        }
        newUrl = newUrl.slice(0, -1);
      }
      // eslint-enable-next-line no-constant-condition
      navigator.clipboard.writeText(newUrl)
    },
  }
}
</script>

<style scoped>
button {
  font-size: 15px;
  position: relative;
  padding: 8px 20px;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  font-weight: bold;
  background: #81f878;
  transition: background .275s;
}

button.copied {
  background: #212121;
  color: #FFF;
}
.copied .done {
  opacity: 1;
  transform: translateY(-2em);
}
.done {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  text-align: center;
  opacity: 0;
  transform: translateY(-1em);
  color: #000;
  transition: all .500s;
}
</style>