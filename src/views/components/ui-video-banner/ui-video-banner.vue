<template>
  <div class="ui-video-banner">
    <video
      autoplay
      loop
      src="https://s3.eu-central-1.amazonaws.com/dev.progressme.ru/files/MarketplaceTeacherVideoPresentation/982d54e0-a0c4-41aa-97f7-c52c001a8cb1.mp4"
    ></video>
    <div class="content f a-c j-c">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "ui-video-banner",
})
export default class UiVideoBannerComponent extends Vue {}
</script>

<style lang="less" scoped>
@padding: 16px;
.ui-video-banner {
  width: 100%;
  height: 300px;
  position: relative;

  video {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: @padding;
  }
}
</style>