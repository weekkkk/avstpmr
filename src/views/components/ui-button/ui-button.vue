<template>
  <div class="ui-button" :class="colorClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";
import ButtonColorEnum from "./enums/ButtuonColorEnum";
@Options({
  name: "ui-button",
})
export default class UiButtonComponent extends Vue {
  @Prop({ default: ButtonColorEnum.DarkBlue })
  color: ButtonColorEnum;

  get colorClass() {
    switch (this.color) {
      case ButtonColorEnum.Red:
        return "red-bg";
      case ButtonColorEnum.DarkBlue:
        return "dark-blue-bg";
      default:
        return "red-bg";
    }
  }
}
</script>

<style lang="less" scoped>
@boreder-radius: var(--avstpmr-border-radius);
@red: var(--avstpmr-red);
@dark-blue: var(--avstpmr-dark-blue);
@color: var(--avstpmr-white);
@padding-x: 16px;  
@padding-y: 8px;  
.ui-button {
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: @boreder-radius;
  color: @color;
  padding: @padding-y @padding-x;
  white-space: nowrap;
  &.red-bg {
    background-color: @red;
  }
  &.dark-blue-bg {
    background-color: @dark-blue;
  }
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(90%);
  }
}
</style>