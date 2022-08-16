<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Новость</h2>
    <div class="block">
      <h3 class="medium is-adaptive align-c">{{ news.Title }}</h3>
      <p class="is-adaptive align-j" v-html="news.Text"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

import { NewsId_1 } from "./vars/News";

@Options({
  name: "one-news-page",
})
export default class OneNewsPageComponent extends Vue {
  newsId: string | string[] = "";

  created() {
    this.initNewsNumber();
    window.scroll(0, 0);
  }

  initNewsNumber() {
    this.newsId = this.$route.params.id;
  }

  get news() {
    switch (this.newsId) {
      case "1":
        return NewsId_1;
    }
    return "";
  }
}
</script>

<style lang="less" scoped>
</style>