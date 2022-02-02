<template>
 <div class="sidebar">
   <template v-for="(item, key) in sidebarSettings">
     <div class="setting" :key="key">
       <div class="name_setting">
         {{ item.text }}
       </div>
        <template v-if="item.type === 'range'">
          <Range
              :model.sync="item.model"
              :min="item.min"
              :max="item.max"
              :action="item.action"
          />
        </template>
       <template v-else>
         <SimpleInput
             :model.sync="item.model"
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
      sidebarSettings: [
        {
          type: 'input',
          model: 'inscription',
          // model: 'settingInscription.inscription',
          text: 'Надпись',
          action: 'updateInscriptionName',
        },
        {
          type: 'range',
          model: 'columns',
          // model: this.columns,
          text: 'Количество колонн',
          min: 5,
          max: 100,
          action: 'updateColumnsNumber',
        },
        {
          type: 'range',
          model: 'rows',
          // model: 'mainScreen.rows',
          text: 'Количество рядов',
          min: 5,
          max: 100,
          action: 'updateRowsNumber',
        },
        {
          type: 'range',
          model: 'timesInscription',
          // model: this.timesInscription,
          text: 'Количество надписей',
          min: 1,
          max: 80,
          action: 'updateTimesInscription',
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
  position: absolute;
  right: 0;
  /*padding: 30px 15px;*/
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