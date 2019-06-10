<template>
  <div id="bmap-constainer">
    <p>bmap-boundaryData</p>
  </div>
</template>

<script>
import b from "../src/index.js";
export default {
  name: "exampleApp",
  data() {
    return {};
  },
  mounted() {
    console.log(b.changsha);
  }
};
</script>

<style>
</style>