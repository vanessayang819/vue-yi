<template>
  <van-cell-group>
    <van-field
      label="数字1"
      placeholder="请输入三位数"
      type="number"
      @blur="checkNum"
      v-model="num[0]"
    />
    <van-field
      label="数字2"
      placeholder="请输入三位数"
      type="number"
      @blur="checkNum"
      v-model="num[1]"
    />
    <van-field
      label="数字3"
      placeholder="请输入三位数"
      type="number"
      @blur="checkNum"
      v-model="num[2]"
    />
    <van-button round type="info" @click="getGua">得卦</van-button>
  </van-cell-group>
</template>

<script>
import { Button, Field, CellGroup, Toast } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },
  data() {
    return {
      num: [],
    };
  },
  methods: {
    getGua() {
      let flag = true;
      this.num.forEach((num) => {
        if (num < 100 || num > 999 || num % 1 !== 0) {
          flag = false;
        }
      });
      if (flag === true) {
        this.$store.dispatch("getGua", this.num);
        this.$router.push("/result");
        Toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
      } else {
        Toast.fail("请检查输入");
      }
    },
    checkNum(e) {
      let value = Number(e.target.value);
      if (value % 1 === 0) {
        if (value > 999 || value < 100) {
          Toast.fail("请输入三位数");
        }
      } else {
        Toast.fail("非整数");
      }
    },
  },
};
</script>

<style>
</style>