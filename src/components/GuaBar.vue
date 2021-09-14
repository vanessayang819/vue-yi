<template>
  <div>
    <div v-for="item in gua" :key="item.id">
      <Yao :isYangYao="item"></Yao>
    </div>
  </div>
</template>

<script>
import Yao from "./Yao.vue";
export default {
  components: {
    Yao,
  },
  props: ['gua'],

};
</script>

<style>
</style>