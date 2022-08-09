<template>
  <div class="ui-card">
    <div class="sub title p is-adaptive regular">
      {{ subtitle }}
    </div>
    <div class="image" :class="ImageTypeClass" :style="ImageStyles"></div>
    <div class="title h3">{{ title }}</div>
    <div
      class="link p is-adaptive dark-blue"
      v-for="(link, index) in links"
      :key="index"
    >
      {{ link }}
    </div>
    <div class="description capture regular">{{ description }}</div>
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

  get ImageStyles(): Object[] {
    return [{ backgroundImage: `url(${this.image}})` }];
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

.ui-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: @gap;
  padding: @padding;

  
}
</style>