<template>
  <div v-if="isYangYao === true">
    <div id="yangyao"></div>
  </div>
  <div v-else id="yinyao">
    <div id="yinyaopart"></div>
    <div id="yinyaopart"></div>
  </div>
</template>

<script>
export default {
  props: ["isYangYao"],
  data() {
    return {};
  },
};
</script>

<style>
#yangyao {
  display: inline-block;
  width: 46vw;
  height: 4vh;
  background-color: #000;
  margin: 2vw 2vw;
}

#yinyao {
  display: flex;
}
#yinyaopart {
  height: 4vh;
  width: 21vw;
  background-color: #000;
  margin: 2vw;
}
</style>