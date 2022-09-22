<template>
  <div class="box">
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
        <h1>select</h1>
        <a-select style="width:300px" v-model="select1">
          <a-select-option :value="i + ''" v-for="i in 100" :key="i">
            选项选项1选项1选项1选项1选项{{ i }}</a-select-option
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

        <a-select
          mode="multiple"
          style="width:200px"
          :maxTagCount="1"
          choiceTransitionName=""
          :getPopupContainer="getPopupContainer"
        >
          <a-select-option v-for="i in 10" :key="i">sdsfasdf </a-select-option>
        </a-select>

        <div style="padding:20px">
          <a-checkable-tag v-model="checked1">
            Tag1
          </a-checkable-tag>
          <a-checkable-tag v-model="checked2">
            Tag2
          </a-checkable-tag>
          <a-checkable-tag v-model="checked3">
            Tag3
          </a-checkable-tag>
        </div>

        <a-slider :default-value="30" />
        <a-radio-group disabled v-model="radiovalue">
          <a-radio-button value="a">
            Hangzhou
          </a-radio-button>
          <a-radio-button value="b">
            Shanghai
          </a-radio-button>
          <a-radio-button value="c">
            Beijing
          </a-radio-button>
          <a-radio-button value="d">
            Chengdu
          </a-radio-button>
        </a-radio-group>

        <div class="less-color">
          <div class="darken">darken</div>
          <div class="titn90">titn90</div>
        </div>
      </div>
    </a-config-provider>
  </div>
</template>
<script>
import enUs from 'ant-design-vue/locale/zh_CN';
console.log('zhCN: ', enUs);

export default {
  data() {
    return {
      KeyWord: '',
      radiovalue: 'a',
      select1: '80',
      locale: enUs,
      checked1: false,
      checked2: false,
      checked3: false,
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
    };
  },
  methods: {
    onSearch(e) {
      debugger;
      console.log(this.KeyWord);
    },
    getPopupContainer(element) {
      var style = getComputedStyle(element);
      var excludeStaticParent = style.position === 'absolute';
      var overflowRegex = /(auto|scroll)/;

      if (style.position === 'fixed') return document.body;
      for (var parent = element; (parent = parent.parentElement); ) {
        style = getComputedStyle(parent);
        if (excludeStaticParent && style.position === 'static') {
          continue;
        }
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
      }

      return document.body;
    },
  },
};
</script>
<style lang="less">
.box {
  height: 90vh;
  overflow: auto;
  padding: 20px;
  padding-bottom: 400px;
  position: relative;
}
@primary: #507afe;
.less-color {
  padding: 20px;
  .darken {
    width: 200px;
    height: 100px;
    color: #fff;
    background-color: darken(@primary, 20%);
  }
  .titn90 {
    background-color: tint(#000, 90%);
  }
}
</style>
