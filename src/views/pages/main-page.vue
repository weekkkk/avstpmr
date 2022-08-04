<template>
  <div class="main-page">
    <ui-video-banner class="banner">
      <div class="f a-s d-c">
        <h1 class="bold c-white align-l mb-4">
          Билеты на автобусы <br />
          всех автостанций ПМР
        </h1>
        <ui-button color="red" class="medium sh-base">Купить билет</ui-button>
      </div>  
    </ui-video-banner>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import uiVideoBanner from "../components/ui-video-banner/ui-video-banner.vue";

@Options({
  name: "main-page",
  components: { uiVideoBanner },
})
export default class MainPageComponent extends Vue {}
</script>

<style lang="less" scoped>
.main-page {
  .banner {
    margin-top: -32px;
  }
}
</style>