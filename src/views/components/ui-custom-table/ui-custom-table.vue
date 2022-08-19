<template>
  <div class="table">
    <div class="row head medium">
      <div
        class="ceil bold"
        v-for="(ceil, index) in customTableModel.Header.Ceils"
        :key="`ceil ${index}`"
      >
        {{ ceil.Title }}
      </div>
    </div>

    <div
      class="row"
      :class="{ 'gray-row': !(index % 2) }"
      v-for="(row, index) in customTableModel.Body"
      :key="`row ${index}`"
    >
      <div
        class="ceil medium p is-adaptive"
        v-for="(ceil, index) in row.Ceils"
        :key="`ceil ${index}`"
      >
        <div
          class="arrow"
          :class="{ 'is-open': row.VisibleSubTable }"
          v-if="row.SubTable && !index"
          @click="row.VisibleSubTable = !row.VisibleSubTable"
        >
          <i class="iconedv-Arrow-More-Down"></i>
        </div>
        <span class="data-capture bold c-gray">
          {{ customTableModel.Header.Ceils[index].Title }}
        </span>
        <span class="data">
          {{ ceil.Title }}
        </span>
      </div>
      <!-- <div class="ceil button">
        <ui-button class="pay">Купить билет</ui-button>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import CustomTableModel from "./models/CustomTableModel";

@Options({
  name: "ui-custom-table",
})
export default class UiCustomTableComponent extends Vue {
  @Prop({ default: () => null }) customTableModel: CustomTableModel;
}
</script>

<style lang="less" scoped>
@color: var(--avstpmr-black);
@color-head: var(--avstpmr-gray);
@bg: var(--avstpmr-white);
@bg-gray: var(--avstpmr-light-gray);

.sub-enter-active,
.sub-leave-active {
  transition: 0.25s;
  transition-property: transform opacity;
}
.sub-enter-from,
.sub-leave-to {
  transform: scaleY(0) translateY(-100%);
  transform-origin: top;
  opacity: 0;
}

.table {
  display: table;
  width: 100%;
  // font-size: 16px;
  // line-height: 24px;
  border-radius: 8px;
  background-color: @bg;
  overflow: hidden;

  > .row {
    display: table-row;
    > .ceil {
      display: table-cell;
      // word-break: break-word;
      position: relative;

      .arrow {
        font-size: 24px;
        line-height: 1;
        display: grid;
        position: absolute;
        // color: @gray_3;
        left: 0;
        top: calc(50% - 24px / 2);
        left: calc(20px - 24px / 2);
        transition: 0.15s;
        cursor: pointer;

        &.is-open {
          transform: rotate(180deg);
        }
      }
    }
  }

  &:not(.sub, .with-sub) {
    > .row {
      // display: grid;
      width: 100%;

      &:not(.head) {
        .ceil {
          // border-bottom: 1px solid @gray_2;
          .data-capture {
            display: none;
          }
        }
      }

      &.head {
        // background-color: @gray_1;
        // color: @gray_4;
        color: @color-head;

        > .ceil {
          padding: 16px 24px;
        }
      }

      &:not(.head) {
        // color: @color;
        &.gray-row {
          background-color: @bg-gray;
        }

        > .ceil {
          color: @color;
          padding: 16px 24px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .table {
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: none;
    overflow: visible;

    .row {
      display: flex;
      flex-direction: column;
      box-shadow: var(--avstpmr-border-base-shadow);
      // overflow: hidden;
      border-radius: 8px;
      position: relative;
      // padding: 8px;
      margin-bottom: 56px;

      &.head {
        display: none;
      }

      .ceil {
        display: flex;
        width: 100%;
        padding: 0 !important;
        background-color: @bg;

        &:first-child {
          overflow: hidden;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        &:nth-last-child(-n + 2) {
          overflow: hidden;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        &.button {
          display: flex;
          justify-content: center;
          padding: 0 !important;
          padding-top: 16px !important;
          position: absolute;
          background-color: transparent;
          top: 100%;

          .pay {
            box-shadow: var(--avstpmr-border-base-shadow);
          }
        }

        .data-capture {
          display: flex !important;
          width: 100%;
          max-width: 50%;
          padding: 16px;
          font-size: 14px;
          line-height: 20px;
          word-break: break-all;
          background-color: @bg;
        }
        .data {
          width: 100%;
          max-width: 50%;
          padding: 16px;
          font-size: 14px;
          line-height: 20px;
          word-break: break-all;
          background-color: @bg-gray;
        }
      }
    }
  }
}
</style>