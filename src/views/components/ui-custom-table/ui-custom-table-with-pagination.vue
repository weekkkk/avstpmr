<template>
  <div class="ui-custom-table-with-pagination" v-if="customTableModel">
    <div class="pagination medium mb-3" v-if="pages > 1">
      <div
        class="arrow back"
        :class="{ 'no-active': page <= 1 }"
        @click="page > 1 ? page-- : ''"
      >
        <i class="iconedv-Arrow-Left"></i>
      </div>
      <div
        class="page"
        v-for="n in pages"
        :key="n"
        @click="page = n"
        :class="{ current: page == n }"
      >
        {{ n }}
      </div>
      <div
        class="arrow next"
        :class="{ 'no-active': page >= pages }"
        @click="page < pages ? page++ : ''"
      >
        <i class="iconedv-Arrow-Right"></i>
      </div>
    </div>
    <ui-custom-table
      :customTableModel="innerCustomTableModel"
    ></ui-custom-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";
import CustomTableModel from "./models/CustomTableModel";

@Options({
  name: "ui-custom-table-with-pagination",
})
export default class UiCustomTableWithPaginationComponent extends Vue {
  @Prop({ default: () => null }) customTableModel: CustomTableModel;
  @Prop({ default: 2 }) limit: number;
  // @Prop({ default: 1 })
  page: number = 1;

  get innerCustomTableModel(): CustomTableModel {
    let innerCustomTableModel = Object.assign(
      new CustomTableModel(),
      this.customTableModel
    );
    const offset = this.page * this.limit - this.limit;
    innerCustomTableModel.Body = this.customTableModel.Body.slice(
      offset,
      offset + this.limit
    );
    return innerCustomTableModel;
  }

  get pages() {
    const countRows = this.customTableModel.Body.length;
    const offset = this.page * this.limit - this.limit;
    // this.customTableModel.Body = this.customTableModel.Body.slice(
    //   offset,
    //   offset + this.limit
    // );

    return Math.ceil(countRows / this.limit);
  }
}
</script>

<style lang="less" scoped>
@color: var(--prme-black);
@gray_1: var(--prme-gray-0);
@gray_2: var(--prme-gray-25);
@gray_3: var(--prme-gray-75);
@gray_4: var(--prme-gray-100);
@white: #fff;

.ui-custom-table-with-pagination {
  width: 100%;

  .pagination {
    display: flex;
    margin: -4px;

    .page,
    .arrow {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @gray_1;
      border-radius: 8px;
      margin: 4px;
      color: @gray_3;
      cursor: pointer;
      transition: 0.15s;

      &:not(.no-active) {
        &:hover {
          background-color: @gray_2;
        }

        &:active {
          background-color: @gray_1;
        }

        &.current {
          background-color: @gray_2;
          color: @gray_4;
        }
      }

      &.no-active {
        opacity: 0.75;
        cursor: not-allowed;
      }
    }
  }
}
</style>