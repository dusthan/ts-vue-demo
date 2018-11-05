<template>
  <div id="app">
    {{ msg }}
    <hello-component />
  </div>
</template>

<script>
  import HelloComponent from "./components/hello.vue";

  export default {
    name: "App",
    components: { HelloComponent },
    data() {
      return {
        msg: "Hello World!"
      };
    }
  };
</script>


<style lang="scss" src="./assets/style/public.scss" scoped>
  // @import url('assets/style/public.scss');
</style>