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
@header-height: 64px;

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    max-width: @container-max-width;
    padding: @container-padding-y @container-padding-x;

    @media (max-width: 768px) {
      padding: calc(@container-padding-y * 0.75) calc(@container-padding-x / 2);
    }
  }
}
</style>