<template>
  <div class="ui-list-block sh-base br-base f a-s">
    <div class="number f a-c j-c c-white medium" v-if="number">{{ number }}</div>
    <div class="icon" v-else-if="icon">
      <img class="icon" :src="icon" alt="" />
    </div>
    <div class="text f d-c j-b regular align-j">
      <slot></slot>
      <div class="important bold c-dark-blue align-j" v-if="important">
        <br />
        {{ important }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";

@Options({
  name: "ui-list-block",
})
export default class UiListBlockComponent extends Vue {
  @Prop({ default: null })
  number: string;
  @Prop({ default: null })
  icon: string;
  @Prop({ default: null })
  important: string;
}
</script>

<style lang="less" scoped>
@padding: 16px;
@gap: 16px;
@icon-height: 32px;
@number-bg: var(--avstpmr-red);
@bg: var(--avstpmr-white);
.ui-list-block {
  padding: @padding;
  gap: @gap;
  background-color: @bg;
  .number,
  .icon {
    display: grid;
    min-height: @icon-height;
    max-height: @icon-height;
    min-width: @icon-height;
    max-width: @icon-height;
  }
  .number {
    border-radius: 50%;
    background-color: @number-bg;
  }
  .important {
    font-size: inherit;
    line-height: inherit;
  }
  .text {
    font-size: inherit;
    line-height: inherit;
  }
}
</style>