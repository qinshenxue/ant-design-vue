<template>
  <div style="padding:20px 100px;">
    <a-config-provider :locale="locale">
      <div>
        <h1>按钮</h1>
        <div>
          <a-button type="primary">按钮</a-button>
          <a-button>普通按钮</a-button>

          <a-button type="primary" loading></a-button>

          <a-button type="primary" disabled>禁用</a-button>

          <a-button type="danger">禁用</a-button>

          <a-button type="link">link 按钮</a-button>
        </div>

        <h1>下拉</h1>

        <div>
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              Hover me
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>

          <a-dropdown-button @click="onClick">
            Dropdown
            <a-menu slot="overlay" @click="onClick">
              <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
              <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
              <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
            </a-menu>
          </a-dropdown-button>
        </div>

        <h1>分页</h1>
        <div>
          <a-pagination
            show-quick-jumper
            showSizeChanger
            :default-current="2"
            :total="500"
            @change="onChange"
          />
        </div>
        <hr />

        <div>
          <a-pagination simple :default-current="2" :total="500" @change="onChange" />
        </div>
        <hr />

        <div>
          <a-pagination
            size="small"
            show-quick-jumper
            showSizeChanger
            :default-current="2"
            :total="500"
            @change="onChange"
            :show-total="total => `总共 ${total} 条`"
          />
        </div>

        <h1>多选框 checkbox</h1>
        <div>
          <a-checkbox-group
            v-model="value"
            name="checkboxgroup"
            :options="plainOptions"
            @change="onChange"
          />
          <br />
          <a-checkbox-group :options="plainOptions" :default-value="['Apple']" @change="onChange" />
          <br />
          <a-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
          <br />
          <a-checkbox-group
            :options="optionsWithDisabled"
            disabled
            :default-value="['Apple']"
            @change="onChange"
          >
            <span slot="label" slot-scope="{ value }" style="color: red">{{ value }}</span>
          </a-checkbox-group>
        </div>

        <h1>日期选择</h1>
        <a-date-picker> </a-date-picker>
        <h2>show time</h2>
        <a-date-picker show-time> </a-date-picker>
        <h2>
          range picker show time
        </h2>
        <a-range-picker show-time> </a-range-picker>
        <h2>time picker</h2>
        <a-time-picker> </a-time-picker>
        <h2>week picker</h2>
        <a-week-picker> </a-week-picker>
        <h2>month picker</h2>
        <a-month-picker> </a-month-picker>
        <h2>range picker</h2>

        <a-range-picker> </a-range-picker>

        <h1>输入框</h1>
        <a-input></a-input>

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

        <h1>数字输入</h1>

        <a-input-number v-model="number1" :min="1" :max="10" @change="onChange" />

        <h1>单选</h1>

        <a-radio-group :options="plainOptions" default-value="Apple" @change="onChange" />

        <a-radio-group v-model="valuec" @change="onChange">
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

        <h1>下拉</h1>
        <a-select style="width:300px" v-model="select1">
          <a-select-option :value="i + ''" v-for="i in 100" :key="i">
            选项选项1选项1选项1选项1选项{{ i }}</a-select-option
          >
        </a-select>

        <a-select default-value="lucy" style="width: 120px">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
          <a-select-option value="disabled" disabled>
            Disabled
          </a-select-option>
          <a-select-option value="Yiminghe">
            yiminghe
          </a-select-option>
        </a-select>
        <h2>大数据</h2>
        <a-select style="width:300px" v-model="select1">
          <a-select-option :value="i + ''" v-for="i in 100" :key="i">
            选项选项1选项1选项1选项1选项{{ i }}</a-select-option
          >
        </a-select>

        <h1>开关</h1>
        <div>
          <a-switch default-checked @change="onChange" />
        </div>
        <h1>时间选择</h1>

        <div>
          <a-time-picker use12-hours @change="onChange" />

          <a-time-picker @change="onChange" />
        </div>

        <h1>树选择</h1>

        <div>
          <a-tree-select
            v-model="tree_select1"
            show-search
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="Please select"
            allow-clear
            tree-default-expand-all
          >
            <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
              <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
                <a-tree-select-node
                  key="random"
                  :selectable="false"
                  value="leaf1"
                  title="my leaf"
                />
                <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
              </a-tree-select-node>
              <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
                <a-tree-select-node key="random3" value="sss">
                  <b slot="title" style="color: #08c">sss</b>
                </a-tree-select-node>
              </a-tree-select-node>
            </a-tree-select-node>
          </a-tree-select>
        </div>

        <h1>上传</h1>
        <div>
          <a-upload
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="onChange"
          >
            <a-button> <a-icon type="upload" /> Click to Upload </a-button>
          </a-upload>
        </div>
      </div>
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/locale/zh_CN';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default {
  data() {
    return {
      str1: '',
      number1: 0,
      valuec: 'c',
      tree_select1: '',
      plainOptions,
      options,
      optionsWithDisabled,
      value: [],
      KeyWord: '',
      select1: '80',
      locale: zhCN,
      text: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
    };
  },
  methods: {
    onSearch(e) {
      console.log(this.KeyWord);
    },
    onClick() {
      console.log(...arguments);
    },
    onChange() {
      console.log('on change');
      console.log(...arguments);
    },
  },
};
</script>

<style lang="less">
body {
  zoom: 2;
}
h1 {
  margin-top: 1em !important;
}
</style>
