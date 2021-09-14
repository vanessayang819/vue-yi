<template>
  <div id="gua">
    <GuaBar :gua='getgua(1)'></GuaBar>
    <GuaBar :gua='getgua(0)'></GuaBar>
  </div>
</template>

<script>
import GuaBar from "./GuaBar.vue";
export default {
  components: {
    GuaBar,
  },
  methods: {
      getgua(i) {
        return this.$store.state.gua[i]
      },

  },
};
</script>

<style>
#gua{
    height:40vh;
    width: 50vw;

}
</style>