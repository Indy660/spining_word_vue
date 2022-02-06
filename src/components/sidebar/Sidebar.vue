<template>
 <div class="sidebar">
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
       <template v-else>
         <SimpleInput
             :stateProp="item.stateProp"
             :action="item.action"
         />
       </template>
     </div>
   </template>
 </div>
</template>

<script>
import SimpleInput from "@/components/sidebar/SimpleInput";
import Range from "@/components/sidebar/Range";
export default {
  name: "Sidebar",
  components: {
    SimpleInput,
    Range,
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
      ]
    }
  },
}
</script>

<style scoped>
.sidebar {
  width: 350px;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  /*position: absolute;*/
  right: 0;
  transition: width 1s;
  padding: 30px;
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