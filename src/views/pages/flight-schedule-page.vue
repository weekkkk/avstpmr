<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Текущее расписание рейсов</h2>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Рейсы</h3>
      <flight-shedule></flight-shedule>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import TableModel from "@/views/components/ui-custom-table/models/CustomTableModel";
import RowModel from "@/views/components/ui-custom-table/models/CustomTableRowModel";
import CeilModel from "@/views/components/ui-custom-table/models/CustomTableCeilModel";
import FlightShedule from "./components/flight-shedule.vue";

@Options({
  name: "flight-schedule-page",
  components: { FlightShedule },
})
export default class FlightScheduleComponent extends Vue {
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
</style>