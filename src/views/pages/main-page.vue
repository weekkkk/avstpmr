<template>
  <div class="main-page page w-100 f d-c">
    <ui-video-banner class="banner absolute">
      <div class="f a-c j-c d-c content-box w-100">
        <h1 class="bold c-white align-l mb-4 mt-4 align-c">
          Билеты на автобусы всех автостанций ПМР
        </h1>
        <ui-button color="red" class="medium sh-base">Онлайн продажи</ui-button>
      </div>
    </ui-video-banner>
    <div class="banner"></div>
    <div class="block">
      <h3 class="medium is-adaptive align-l">Текущее расписание рейсов</h3>
      <flight-shedule></flight-shedule>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import uiVideoBanner from "../components/ui-video-banner/ui-video-banner.vue";
import FlightShedule from "./components/flight-shedule.vue";
@Options({
  name: "main-page",
  components: { uiVideoBanner, FlightShedule },
})
export default class MainPageComponent extends Vue {
 

}
</script>

<style lang="less" scoped>
.main-page {
  .content-box {
    max-width: 1124px;
    padding: 32px;

    @media (max-width: 768px) {
      padding: 16px;
    }
  }
  .banner {
    min-height: 300px;
    margin-top: -32px;

    &.absolute {
      position: absolute;
      // max-width: 1920px;
      width: 100%;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: translateY(-32px);
    }

    @media (max-width: 768px) {
      margin-top: -24px;
      &.absolute {
        transform: translateY(-24px);
      }
    }
  }
}
</style>