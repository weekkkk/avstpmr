<template>
  <div class="ui-link" @click="goToPage">
    <a v-if="path || name">
      <img v-if="image" :src="image" />
      <slot></slot>
    </a>
    <a v-else-if="href" :target="target" :href="href" :download="isDownload">
      <img v-if="image" :src="image" />
      <div v-else><slot></slot></div>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from "vue-property-decorator";

@Options({
  name: "ui-link",
})
export default class UiLinkComponent extends Vue {
  @Prop({ default: "" })
  path: string;
  @Prop({ default: "" })
  name: string;
  @Prop({ default: "" })
  href: string;
  @Prop({ default: "blank" })
  target: string;
  @Prop({ default: "" })
  image: string;
  @Prop({ default: false })
  isDownload: boolean;

  goToPage() {
    if (this.name) this.$router.push({ name: this.name });
    else if (this.path) this.$router.push({ path: this.path });
  }
}
</script>

<style lang="less" scoped>
.ui-link {
  display: inline;
  cursor: pointer;
  a,
  img {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    min-height: 100%;
  }
}
</style>