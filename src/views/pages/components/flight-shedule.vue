<template>
  <span class="flight-shedule">
    <div class="block sh-base f">
      <span class="f a-s fields">
        <tir-multidropdown
          label="Рейсы"
          min-width="256px"
          max-width="256px"
          size="medium"
          v-model="selectedFlights"
          :options="flights"
          :placeholder="flightsPlaceholder"
          :count-visible-options="5"
        />
        <tir-multidropdown
          label="Дата"
          min-width="256px"
          max-width="256px"
          size="medium"
          v-model="selectedDates"
          :options="dates"
          :placeholder="datesPlaceholder"
          :count-visible-options="5"
        />
      </span>
      <ui-button @click="onSearch" color="dark-blue" class="search-button"
        >Поиск</ui-button
      >
    </div>
    <ui-table-pagination
      :customTableModel="table"
      :limit="10"
      class="align-l p is-adaptive"
    />
  </span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import TableModel from "@/views/components/ui-custom-table/models/CustomTableModel";
import RowModel from "@/views/components/ui-custom-table/models/CustomTableRowModel";
import CeilModel from "@/views/components/ui-custom-table/models/CustomTableCeilModel";
import { Schedule } from "../vars/Schedule";
import { DropdownOptionModel } from "vue3-tir-dropdown/models";
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
  mounted() {
    this.onSearch();
  }
  setScheduleTable() {
    this.scheduleTable.Header.Ceils = Schedule["#value"].column.map(
      (col: { Title: string }) => {
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
      (row: Array<object>, index: number) => {
        const r = new RowModel({
          Ceils: row.map((ceil: any, i: number) => {
            return new CeilModel({
              Title:
                ceil["#type"] == "jxs:dateTime"
                  ? i == 0 || i == 1
                    ? new Date(ceil["#value"]).toLocaleTimeString().slice(0, 4)
                    : new Date(ceil["#value"]).toLocaleDateString()
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
  flightsPlaceholder: DropdownOptionModel = new DropdownOptionModel({
    Text: "Поиск рейсов...",
  });
  selectedFlights: DropdownOptionModel[] = [];
  get flights() {
    let arr: DropdownOptionModel[] = [];
    this.scheduleTable.Body.forEach((row, index) => {
      if (!arr.find((x) => x.Text == row.Ceils[5].Title)) {
        arr.push(
          new DropdownOptionModel({
            Id: index,
            Text: row.Ceils[5].Title,
          })
        );
      }
    });
    return arr;
  }
  datesPlaceholder: DropdownOptionModel = new DropdownOptionModel({
    Text: "Поиск дат...",
  });
  selectedDates: DropdownOptionModel[] = [];
  get dates() {
    let arr: DropdownOptionModel[] = [];
    this.scheduleTable.Body.forEach((row, index) => {
      if (!arr.find((x) => x.Text == row.Ceils[7].Title)) {
        arr.push(
          new DropdownOptionModel({
            Id: index,
            Text: row.Ceils[7].Title,
          })
        );
      }
    });
    return arr;
  }

  table = new TableModel({
    Header: new RowModel({
      Ceils: [],
    }),
    Body: [],
  });

  onSearch() {
    this.table = Object.assign(new TableModel(), this.scheduleTable);
    this.table.Body = this.scheduleTable.Body.filter(
      (row) =>
        (!!this.selectedFlights.find((x) => x.Text == row.Ceils[5].Title) || !this.selectedFlights.length) &&
        (!!this.selectedDates.find((x) => x.Text == row.Ceils[7].Title) || !this.selectedDates.length)
    );
    this.$forceUpdate();
  }
}
</script>

<style lang="less" scoped>
.flight-shedule {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .block {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    padding: 16px;
    gap: 16px;
    background-color: white;
    border-radius: 8px;
    .fields {
      gap: inherit;
      flex-flow: wrap;
      // width: 100%;
      // justify-content: space-between;
    }
    .search-button {
      margin-top: calc(var(--tir-label-lh) + var(--tir-control-indent));
    }
  }
}
</style>