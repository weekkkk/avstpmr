<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Документация</h2>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Информация</h3>
      <p class="is-adaptive align-j">
        По ссылке вы можете скачать и ознакомиться с документом.
      </p>
    </div>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Ссылки на документы</h3>
      <ui-list-block
        v-for="(link, index) in documentLinks"
        :key="index"
        :icon="ShareIcon"
        class="a-c"
      >
        <ui-link :href="link.Link" :isDownload="true">
          <span class="c-dark-blue p is-adaptive align-l">{{ link.Text }}</span>
        </ui-link>
      </ui-list-block>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import LinkModel from "../components/ui-link/models/LinkModel";

import { Share } from "./vars/Icons";
// import {
//   TransportLaw,
//   ConventionOnInternationalCarriage,
//   RegulationsOnBusStations,
// } from "./vars/Documents";

@Options({
  name: "documents-page",
})
export default class DocumentsPageComponent extends Vue {
  documentLinks: LinkModel[] = [];
  ShareIcon = Share;

  created() {
    this.initDocumentLinks();
  }

  initDocumentLinks() {
    this.documentLinks.push(
      new LinkModel({
        Text: "Конвенция о международных автомобильных перевозках пассажиров и багажа.",
        Link: "TransportLaw",
      }),
      new LinkModel({
        Text: "Закон Приднестровской Молдавской Республики 13.10.1997 г. № 67-З «О транспорте».",
        Link: "ConventionOnInternationalCarriage",
      }),
      new LinkModel({
        Text: "Постановление Правительства  Приднестровской Молдавской Республики от  16 сентября 2014 г. № 232 «Об утверждении Положения об автовокзалах, автостанциях и диспетчерско-кассовых пунктах».",
        Link: "RegulationsOnBusStations",
      })
    );
  }
}
</script>

<style lang="less" scoped>
</style>