<template>
  <!-- <div class="app"> -->
  <router-view />
  <!-- </div> -->
</template>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

@import "@/assets/styles/vars.less";
@import "@/assets/styles/font.less";
@import "@/assets/styles/flex.less";
@import "@/assets/styles/icon.less";
@import "@/assets/styles/border-radius.less";
@import "@/assets/styles/shadow.less";
@import "@/assets/styles/color.less";
@import "@/assets/styles/indent.less";
@import "@/assets/fonts/edvibe/style.css";
@import "@/assets/styles/vars/index.less";
html {
  color: var(--avstpmr-black);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  font-family: "Montserrat", sans-serif;
}

/* html,
body,
#app {
  min-height: fit-content;
  height: 100%;
  width: 100%;
} */
</style>
