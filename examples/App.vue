<template>
  <div style="padding:20px 100px">
    <!-- <a-config-provider :locale="locale"> -->
    <div>
      <h1>输入框</h1>
      <a-input></a-input>
      <h1>默认</h1>
      <a-date-picker> </a-date-picker>
      <h1>show time</h1>
      <a-date-picker show-time> </a-date-picker>
      <h1>
        range picker show time
      </h1>
      <a-range-picker show-time> </a-range-picker>
      <h1>time picker</h1>
      <a-time-picker> </a-time-picker>
      <h1>week picker</h1>
      <a-week-picker> </a-week-picker>
      <h1>month picker</h1>
      <a-month-picker> </a-month-picker>
      <h1>range picker</h1>

      <a-range-picker> </a-range-picker>
      <h1>select</h1>
      <a-select style="width:300px" v-model="select1">
        <a-select-option :value="i + ''" v-for="i in 100" :key="i"
          >选项选项1选项1选项1选项1选项{{ i }}</a-select-option
        >
      </a-select>

      <a-input placeholder="搜索" v-model="KeyWord" @change="onSearch" allowClear> </a-input>

      <a-input-search
        type="search"
        placeholder="搜索"
        v-model="KeyWord"
        @search="onSearch"
        allowClear
      >
        <a-button slot="enterButton" style="padding:0 10px">
          <a-icon type="search" />
        </a-button>
      </a-input-search>
    </div>
    <!-- </a-config-provider> -->
  </div>
</template>
<script>
import enUs from 'ant-design-vue/locale/en_US';
console.log('zhCN: ', enUs);

export default {
  data() {
    return {
      KeyWord: '',
      select1: '80',
      locale: enUs,
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
    };
  },
  methods: {
    onSearch(e) {
      debugger;
      console.log(this.KeyWord);
    },
  },
};
</script>
