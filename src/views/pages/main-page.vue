<template>
  <div class="main-page page w-100 f d-c">
    <ui-video-banner class="banner">
      <div class="f a-s d-c">
        <h1 class="bold c-white align-l mb-4">
          Билеты на автобусы <br />
          всех автостанций ПМР
        </h1>
        <ui-button color="red" class="medium sh-base">Купить билет</ui-button>
      </div>
    </ui-video-banner>
    <div class="block">
      <h3 class="medium is-adaptive align-l">Близжайшие рейсы</h3>
      <ui-table
        :customTableModel="scheduleTable"
        class="align-l sh-base p is-adaptive"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import uiVideoBanner from "../components/ui-video-banner/ui-video-banner.vue";
import TableModel from "@/views/components/ui-custom-table/models/CustomTableModel";
import RowModel from "@/views/components/ui-custom-table/models/CustomTableRowModel";
import CeilModel from "@/views/components/ui-custom-table/models/CustomTableCeilModel";

@Options({
  name: "main-page",
  components: { uiVideoBanner },
})
export default class MainPageComponent extends Vue {
  scheduleTable: TableModel = new TableModel({
    Header: new RowModel({
      Ceils: [
        new CeilModel({
          Title: "Рейс",
        }),
        new CeilModel({
          Title: "Отправление",
        }),
        new CeilModel({
          Title: "Прибытие",
        }),
        new CeilModel({
          Title: "Билетов",
        }),
        new CeilModel({
          Title: "Цена",
        }),
      ],
    }),
    Body: [
      new RowModel({
        Ceils: [
          new CeilModel({
            Title: "Москва",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "10/20",
          }),
          new CeilModel({
            Title: "1000 руб.",
          }),
        ],
      }),
      new RowModel({
        Ceils: [
          new CeilModel({
            Title: "Москва",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "10/20",
          }),
          new CeilModel({
            Title: "1000 руб.",
          }),
        ],
      }),
      new RowModel({
        Ceils: [
          new CeilModel({
            Title: "Москва",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "10/20",
          }),
          new CeilModel({
            Title: "1000 руб.",
          }),
        ],
      }),
      new RowModel({
        Ceils: [
          new CeilModel({
            Title: "Москва",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "11:00",
          }),
          new CeilModel({
            Title: "10/20",
          }),
          new CeilModel({
            Title: "1000 руб.",
          }),
        ],
      }),
    ],
  });
  created() {
    window.scroll(0, 0);
  }
}
</script>

<style lang="less" scoped>
.main-page {
  .banner {
    margin-top: -32px;
    margin-left: -32px;
    margin-right: -32px;
    width: calc(100% + 64px);
    @media (max-width: 768px) {
      width: calc(100% + 32px);
      margin-left: -16px;
      margin-right: -16px;
    }
  }
}
</style>