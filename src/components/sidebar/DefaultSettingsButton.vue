<template>
  <button ref="button" @click="setDefaultStateFunc" type="button">Вернуть начальные настройки
    <span class="done" aria-hidden="true">Настройки возвращены</span>
  </button>
</template>

<script>
import { mapMutations} from "vuex"
export default {
  name: "CopyButton",
  // props: {
  //   action: {
  //     type: Function,
  //     default: () => {}
  //   }
  // },
  computed: {
  },
  methods: {
    ...mapMutations([
        'setDefaultState'
    ]),
    setDefaultStateFunc() {
      this.$refs.button.classList.add( 'copied' );
      const temp = setInterval(() => {
        this.$refs.button.classList.remove( 'copied' );
        clearInterval(temp);
      }, 600 );
      this.setDefaultState()
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
  background: #f87878;
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