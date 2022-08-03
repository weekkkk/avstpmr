<template>
  <div class="layout">
    <header-layout />
    <div class="container">
      <router-view />
    </div>
    <footer-layout />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import headerLayout from "./header-layout.vue";
import footerLayout from "./footer-layout.vue";

@Options({
  components: { headerLayout, footerLayout },
  name: "base-layout",
})
export default class BaseLayoutComponent extends Vue {}
</script>

<style lang="less" scoped>
@container-max-width: 1024px;
@container-padding-x: 32px;
@container-padding-y: 32px;

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .container {
    width: 100%;
    height: 100%;
    text-align: center;
    max-width: @container-max-width;
    padding: @container-padding-y @container-padding-x;
  }
}
</style>