<template>
 <div class="sidebar" :class="classSidebar">
   <template v-for="(item, key) in sidebarSettings">
     <div class="setting" :key="key">
       <div class="name_setting">
         {{ item.text }}
       </div>
        <template v-if="item.type === 'range'">
          <Range
              :stateProp="item.stateProp"
              :min="item.min"
              :max="item.max"
              :action="item.action"
          />
        </template>
       <template v-if="item.type === 'input'">
         <Input
             :stateProp="item.stateProp"
             :action="item.action"
         />
       </template>
       <template v-if="item.type === 'copy_button'">
<!--         :stateProp="item.stateProp"-->
<!--         :action="item.action"-->
         <CopyButton/>
       </template>
       <template v-if="item.type === 'default_setting_button'">
         <!--         :stateProp="item.stateProp"-->
         <!--         :action="item.action"-->
         <DefaultSettingsButton/>
       </template>
     </div>
   </template>
 </div>
</template>

<script>
import Input from "@/components/sidebar/Input";
import Range from "@/components/sidebar/Range";
import CopyButton from "@/components/sidebar/CopyButton";
import DefaultSettingsButton from "@/components/sidebar/DefaultSettingsButton";
export default {
  name: "Sidebar",
  components: {
    Input,
    Range,
    CopyButton,
    DefaultSettingsButton,
  },
  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      // todo: Придумать еще свойства
      sidebarSettings: [
        {
          type: 'input',
          stateProp: ['settingInscription', 'inscription'],
          text: 'Надпись',
          action: 'updateInscriptionName',
        },
        {
          type: 'range',
          stateProp: ['mainScreen', 'timesInscription'],
          text: 'Количество надписей',
          min: 1,
          max: 80,
          action: 'updateTimesInscription',
        },
        {
          type: 'range',
          stateProp: ['mainScreen', 'columns'],
          text: 'Количество колонн',
          min: 5,
          max: 100,
          action: 'updateColumnsNumber',
        },
        {
          type: 'range',
          stateProp: ['mainScreen', 'rows'],
          text: 'Количество рядов',
          min: 5,
          max: 100,
          action: 'updateRowsNumber',
        },
        {
          type: 'copy_button',
          // action: this.copyMethod
        },
        {
          type: 'default_setting_button',
          // action: this.copyMethod
        }
      ]
    }
  },
  computed: {
   classSidebar() {
      return this.showSidebar ? 'show' : 'hide'
    }
  },
  methods: {
    // copyMethod() {
    //   this.$refs.button.classList.add('copied');
    //   const temp = setInterval(() => {
    //     this.$refs.button.classList.remove('copied');
    //     clearInterval(temp);
    //   }, 600);
    // },
  }
}
</script>

<style scoped>
.sidebar {
  background-color: white;
  height: 100vh;
  position: fixed;
  right: 0;
  transition: width 0.5s;
  overflow: auto;
}

.sidebar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: #ADD8E6;
}

.show {
  width: 350px;
  padding: 30px;
}

.hide {
  width: 0;
  padding: 0;
}

.setting {
  margin: 30px 0;
}

.name_setting {
  display: flex;
  justify-content: center;
  width: 80%;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>