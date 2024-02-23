<template>
  <div class="content">
    <div class="header">
      <h5>色彩规范</h5>
    </div>
    <div class="colors">
      <div class="color-type" v-for="item in options" :key="item.key">
        <h5 class="color-label">{{ item.label }}</h5>
        <div class="color-list">
          <div class="color-item" v-for="color in item.children" :key="color.value">
            <div class="color-box" :style="`background:${color.value}`">{{ color.value }}</div>
            <p class="color-desc" v-html="color.desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const options = [
  {
    key: 'brand-color',
    label: '品牌色',
    children: [
      {
        title: '',
        value: '#B48E5F',
        desc: '全局品牌色</br>强调的功能操作 文字 按钮等'
      },
      {
        title: '',
        value: '#DDB887',
        desc: '全局延展色</br>用于卡片、优惠券等'
      },
      {
        title: '',
        value: '#F1EAD8',
        desc: '卡片背景色'
      },
      {
        title: '',
        value: '#BC192B',
        desc: '重点强调、删除、警告等'
      }

    ]
  },
  {
    key: 'subsidiary-color',
    label: '辅助色',
    children: [
      {
        title: '',
        value: '#E97977',
        desc: '辅助色1</br>用于飘新、气泡标签等'
      },
      {
        title: '',
        value: '#85C05D',
        desc: '辅助色2</br>用于商品标签和文字色等'
      }
    ]
  },
  {
    key: 'text-color',
    label: '文字色',
    children: [
      {
        value: '#000000',
        desc: '重要信息</br>一级标题、重要文本'
      },
      {
        value: '#333333',
        desc: '二级标题</br>全局正文文本'
      },
      {
        value: '#999999',
        desc: '辅助信息</br>辅助文本、标签等'
      },
      {
        value: '#DBDBDB',
        desc: '分割线色、卡片背景色'
      },
      {
        value: '#F6F6F6',
        desc: '商品主题色等'
      }
    ]
  }
]
</script>

<style lang="less" scoped>
.header {
  font-size: 24px;
  margin: 30px 0;
}
.colors {
  .color-type {
    margin: 20px 0;
    .color-label {
      font-size: 16px;
      font-weight: bold;
      margin: 10px 0;
    }
    .color-list {
      display: flex;
      gap: 30px;
      .color-item {
        width: 100px;
        .color-box {
          width: 100px;
          height: 100px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          line-height: 100px;
        }
        .color-desc {
          font-size: 12px;
          margin-top: 10px;
          line-height: 16px;
          color: #585757;
        }
      }
    }
  }
}
</style>