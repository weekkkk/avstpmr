<template>
  <div class="ui-card">
    <div class="sub title p is-adaptive regula c-gray">
      {{ subtitle }}
    </div>
    <div class="image br-base" v-if="image" :class="ImageTypeClass" :style="ImageStyles"></div>
    <div class="title h3 medium is-adaptive c-black">{{ title }}</div>
    <div class="links f f-w">
      <div
        class="link p is-adaptive c-dark-blue medium"
        v-for="(link, index) in links"
        :key="index"
      >
        {{ link }}
      </div>
    </div>
    <div class="description capture regular c-gray" v-html="description"></div>
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import CardImageType from "./enums/CardImageType";
@Options({
  name: "ui-card",
})
export default class UiCardComponent extends Vue {
  @Prop({ default: "" })
  subtitle: string;
  @Prop({ default: "" })
  image: string;
  @Prop({ default: "" })
  title: string;
  @Prop({ default: [] })
  links: string[];
  @Prop({ default: "" })
  description: string;
  @Prop({ default: CardImageType.Rectangle })
  imageType: CardImageType;

  get ImageStyles() {
    return [{ backgroundImage: `url(${this.image})` }];
  }

  get ImageTypeClass(): string {
    switch (this.imageType) {
      case CardImageType.Circle:
        return "circle-type";
      case CardImageType.Rectangle:
        return "rectangle-type";
      default:
        return "rectangle-type";
    }
  }
}
</script>

<style lang="less" scoped>
@gap: 8px;
@padding: 16px 24px;
@bg-color: var(--avstpmr-white);
@image-height: 88px;

.ui-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: @gap;
  padding: @padding;
  background-color: @bg-color;
  .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--avstpmr-blue);
    min-height: @image-height;
    max-height: @image-height;
    &.circle-type {
      border-radius: 50%;
      min-width: @image-height;
      max-width: @image-height;
    }
    &.rectangle-type {
      width: 100%;
    }
  }
  .links {
    gap: @gap;
  }
}
</style>