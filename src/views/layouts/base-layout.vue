<template>
  <div class="layout">
    <div class="bg-image"></div>
    <!-- <div class="bg-color"></div> -->
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
@container-max-width: 1124px;
@container-padding-x: 32px;
@container-padding-y: 32px;
@header-height: 64px;

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;

  .bg-image,
  .bg-color {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .bg-image {
    background-image: url("~@/assets/images/pages-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.075;
    filter: blur(4px);
    z-index: -2;
  }
  .bg-color {
    background: linear-gradient(45deg, var(--avstpmr-red), var(--avstpmr-blue));
    opacity: 0.1;
    z-index: -1;
  }
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