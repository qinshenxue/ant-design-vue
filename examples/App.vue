<template>
  <div style="padding:20px 100px">
    <a-card
      title="测试"
      :tab-props="{ size: 'small' }"
      :tab-list="[
        { key: 'tab1', tab: 'tab1' },
        { key: 'tab2', tab: 'tab2' },
      ]"
    />
    <br />
    <a-card
      title="测试"
      :tab-props="{ size: 'large' }"
      :tab-list="[
        { key: 'tab1', tab: 'tab1' },
        { key: 'tab2', tab: 'tab2' },
      ]"
    />
    <br />
    <a-card
      title="测试"
      :tab-props="{}"
      :tab-list="[
        { key: 'tab1', tab: 'tab1' },
        { key: 'tab2', tab: 'tab2' },
      ]"
    />
    <br />
    <a-card
      title="测试"
      :tab-props="{ size: 'default' }"
      :tab-list="[
        { key: 'tab1', tab: 'tab1' },
        { key: 'tab2', tab: 'tab2' },
      ]"
    />
    <br />
    <a-date-picker :align="{ offset: [0, 2], targetOffset: [0, '-100%'] }"> </a-date-picker>
    <br />
    <br />
    <a-config-provider :locale="locale">
      <a-range-picker :align="{ offset: [0, 2], targetOffset: [0, '-100%'] }"> </a-range-picker>
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
