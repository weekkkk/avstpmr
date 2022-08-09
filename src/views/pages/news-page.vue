<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Новости</h2>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Новости сайта</h3>
      <ui-banner
        class="news"
        v-for="(oneNews, index) in news"
        :key="index"
        :subtitle="oneNews.Subtitle"
        :title="oneNews.Title"
        :description="oneNews.Description"
        @click="goToNews(oneNews.Id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import uiBanner from "../components/ui-banner/ui-banner.vue";
import BannerSettingsModel from "../components/ui-banner/models/BannerSettingsModel";

import { ONE_NEWS_PAGE } from "../../router/routerNames";

@Options({
  name: "news-page",
  components: { uiBanner },
})
export default class NewsPageComponent extends Vue {
  news: BannerSettingsModel[] = [];

  created() {
    this.initNews();
  }

  initNews() {
    this.news.push(
      new BannerSettingsModel({
        Id: 1,
        Subtitle: new Date().toDateString(),
        Title: "Новый сайт и онлайн-продажа билетов<br>на регулярные маршруты",
        Description: "У автостинций Приднестровья появился собственный сайт",
      })
    );
  }

  goToNews(id: number) {
    this.$router.push({ path: `${ONE_NEWS_PAGE}/${id}` });
  }
}
</script>

<style lang="less" scoped>
.news {
  cursor: pointer;
}
</style>