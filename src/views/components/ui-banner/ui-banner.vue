<template>
  <div class="ui-banner f d-c sh-base br-base c-white">
    <!-- :style="cardStyles" -->
    <div class="subtitle p medium is-adaptive">
      {{ subtitle }}
    </div>
    <div class="title h3 bold is-adaptive" v-html="title"></div>
    <div class="description p regular is-adaptive">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";

@Options({
  name: "ui-banner",
})
export default class UiBannerComponent extends Vue {
  @Prop({ default: "" })
  subtitle: string;
  @Prop({ default: "" })
  image: string;
  @Prop({ default: "" })
  title: string;
  @Prop({ default: "" })
  description: string;

  get cardStyles() {
    return [{ backgroundImage: `url(${this.image})` }];
  }
}
</script>

<style lang="less" scoped>
@gap: 16px;
@padding: 16px;
@opacity: 0.75;
.ui-banner {
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/banner-photo.jpg");
  background-color: var(--avstpmr-blue);
  padding: @padding;
  gap: @gap;

  > * {
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: var(--avstpmr-black);
    opacity: @opacity;
  }
}
</style>