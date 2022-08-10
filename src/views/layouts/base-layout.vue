<template>
  <div class="layout">
    <header-layout v-if="!menuVisible" @onMenu="onMenu" />
    <div class="container" v-if="!menuVisible">
      <router-view />
    </div>
    <footer-layout v-if="!menuVisible" />
    <menu-layout v-if="menuVisible" @onMenu="onMenu" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import headerLayout from "./header-layout.vue";
import footerLayout from "./footer-layout.vue";
import menuLayout from "./menu-layout.vue";

@Options({
  components: { headerLayout, footerLayout, menuLayout },
  name: "base-layout",
  emits: ["onMenu"],
})
export default class BaseLayoutComponent extends Vue {
  menuVisible = false;
  onMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
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
  min-height: 100vh;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-grow: 1;
    width: 100%;
    max-width: @container-max-width;
    padding: @container-padding-y @container-padding-x;

    @media (max-width: 768px) {
      padding: calc(@container-padding-y * 0.75) calc(@container-padding-x / 2);
    }
  }
}
</style>