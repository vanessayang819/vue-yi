<template>
  <div>
    <van-nav-bar left-arrow title="卦象" left-text="返回" @click-left="onClickLeft" />
    <div class="gua-container">
      <Gua></Gua>
    </div>
    <div>{{guaInfo.index}}-{{ guaInfo.name }}卦</div>
    <div>变爻：{{bianYao}}</div>
  </div>
</template>

<script>
import Gua from "../components/Gua.vue";
import { NavBar } from "vant";
export default {
  components: {
    Gua,
    [NavBar.name]: NavBar,
  },

  methods: {
    onClickLeft() {
      return this.$router.push("/");
    },
  },
computed: {
  guaInfo() {
    return  this.$store.state.guaInfo 
  },
  bianYao(){
    return this.$store.state.bianYao
  }
},
};
</script>

<style>
.gua-container {
  display: flex;
  justify-content: center;
}
</style>