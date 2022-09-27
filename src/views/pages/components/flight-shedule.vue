<template>
  <ui-table-pagination
    :customTableModel="scheduleTable"
    :limit="10"
    class="align-l p is-adaptive"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import TableModel from "@/views/components/ui-custom-table/models/CustomTableModel";
import RowModel from "@/views/components/ui-custom-table/models/CustomTableRowModel";
import CeilModel from "@/views/components/ui-custom-table/models/CustomTableCeilModel";
import { Schedule } from "../vars/Schedule";

@Options({
  name: "flight-shedule",
})
export default class FlightSheduleComponent extends Vue {
  scheduleTable: TableModel = new TableModel({
    Header: new RowModel({
      Ceils: [],
    }),
    Body: [],
  });
  created() {
    window.scroll(0, 0);
    this.setScheduleTable();
  }
  setScheduleTable() {
    this.scheduleTable.Header.Ceils = Schedule["#value"].column.map(
      (col: any) => {
        return new CeilModel({
          Title: col.Title.replace(/([А-ЯЁ])/g, " $1"),
        });
      }
    );
    this.scheduleTable.Header.Ceils.unshift(
      new CeilModel({
        Title: "N",
      })
    );
    this.scheduleTable.Body = Schedule["#value"].row.map(
      (row: any, index: number) => {
        const r = new RowModel({
          Ceils: row.map((ceil: any, i: number) => {
            return new CeilModel({
              Title:
                ceil["#type"] == "jxs:dateTime"
                  ? i == 0 || i == 1
                    ? new Date(ceil["#value"]).toLocaleTimeString().slice(0, 5)
                    : new Date(ceil["#value"]).toLocaleDateString().slice(0, 5)
                  : this.getValue(ceil["#value"]),
            });
          }),
        });
        r.Ceils.unshift(
          new CeilModel({
            Title: index + 1 + "",
          })
        );
        return r;
      }
    );
  }
  getValue(value: string) {
    switch (value) {
      case "C":
        return "Срыв";
      case "P":
        return "Отправлен";
      case "S":
        return "Идет посадка";
      default:
        return value;
    }
  }
}
</script>

<style lang="less" scoped>
</style>