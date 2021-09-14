<template>
  <div id="app">
    <van-nav-bar title="数字卦" />
    <div class="introduction-container">
      <div class="introduction-broder">
        <div class="introduction">
          <div class="introduction-text">不诚不占</div>
          <div class="introduction-text">不义不占</div>
          <div class="introduction-text">不信不占</div>
          <div class="introduction-text">夫大人者，与天地合其德。——《易经》</div>
        </div>
      </div>
    </div>
    <div>
      <p>请输入3个你立即想到的三位数</p>
      <Input></Input>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Input from "./Input.vue";
import { NavBar } from "vant";

export default {
  components: {
    Input,
    [NavBar.name]: NavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.introduction-container {
  display: flex;
  justify-content: center;
}
.introduction-broder {
  width: 40vw;
  height: 27vw;
  border: 1vw solid black;
}
.introduction {
  border: 0.5vw solid black;
  margin: 0.5vw;
  width: 38vw;
  height: 25vw;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.introduction-text {
  writing-mode: vertical-rl;
  padding-right: 1vw;
}
</style>