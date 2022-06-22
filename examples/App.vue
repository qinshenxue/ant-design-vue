<template>
  <div style="padding:20px 100px">
    <a-config-provider :locale="locale">
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
      </div>
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/locale/zh_CN';
console.log('zhCN: ', zhCN);

export default {
  data() {
    return {
      locale: zhCN,
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
    };
  },
};
</script>
