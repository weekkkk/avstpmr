<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Кассы овтостанций</h2>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A89241564d0ccf291263788a387e915ae96d0fd59b46953b892d86441202c18f7&amp;source=constructor"
      width="100%"
      height="500"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "map-page",
})
export default class MapPageComponent extends Vue {}
</script>

<style lang="less" scoped>
</style>