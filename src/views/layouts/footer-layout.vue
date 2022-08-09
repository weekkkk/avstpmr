<template>
  <div class="footer">
    <div class="go-to-map">
      <div class="container">
        <div class="map f a-c j-c sh-base br-base f-w">
          <h3 class="bold c-black">Кассы автостанций</h3>
          <div class="arrow"></div>
          <div class="map-icon">
            <img class="icon" :src="IconGoogleMaps" alt="Map" />
          </div>
        </div>
      </div>
    </div>
    <div class="links">
      <div class="container">
        <div class="list f f-w a-c j-s">
          <ui-link
            class="link p c-dark-blue"
            v-for="(link, index) in links"
            :key="index"
            :name="link.Name"
            v-html="link.Text"
          >
          </ui-link>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="container c-white f-w">
        <p>ОАО “Автостанции Приднестровья”</p>
        <p>
          3300-MD,<br />
          г. Тирасполь ул. Ленина, 59 <br />
          тел. / факс: +373(533)95753
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import LinkModel from "../components/ui-link/models/LinkModel";
import { IconGoogleMaps } from "./vars/Icons";
import {
  ADVERTISING_AND_RENTAL_PAGE,
  RULES_ONLINE_PURCHASE_AND_RETURN_TICKETS_PAGE,
  DOCUMENTS_PAGE,
  NEWS_PAGE,
} from "../../router/routerNames";
@Options({
  name: "footer-layout",
})
export default class FooterLayoutComponent extends Vue {
  links: LinkModel[] = [];
  IconGoogleMaps = IconGoogleMaps;

  created() {
    this.initLinks();
  }

  initLinks() {
    this.links.push(
      new LinkModel({
        Text: "Правила покупки<br>и возврата билетов",
        Name: RULES_ONLINE_PURCHASE_AND_RETURN_TICKETS_PAGE,
      }),
      new LinkModel({ Text: "Новости", Name: NEWS_PAGE }),
      new LinkModel({
        Text: "Реклама и аренда",
        Name: ADVERTISING_AND_RENTAL_PAGE,
      }),
      new LinkModel({ Text: "Правила перевозок", Name: "Name" }),
      new LinkModel({ Text: "Документация", Name: DOCUMENTS_PAGE })
    );
  }
}
</script>

<style lang="less" scoped>
@padding-x: 32px;
@padding-y: 16px;
@footer-indent: 16px;
@container-padding: 16px;
@container-max-width: 1024px;
@links-indent: 16px;
@map-indent: 32px;
@map-icon-height: 104px;

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  bottom: 0;

  > * {
    display: flex;
    justify-content: center;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: @footer-indent;
    }
  }

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: @container-max-width;
    padding: 0 @padding-x;
  }

  .go-to-map {
    .map {
      width: 100%;
      background-color: var(--avstpmr-white);
      padding: @container-padding;

      * > {
        &:not(:last-child) {
          margin-right: @map-indent;
        }
      }

      .map-icon {
        display: inline-grid;
        max-height: @map-icon-height;
        min-height: @map-icon-height;
        max-width: @map-icon-height;
        min-width: @map-icon-height;
      }
    }
  }

  .links {
    .list {
      width: calc(100% + @links-indent);
      margin: calc(@links-indent / 2 * -1);
      padding: @container-padding 0;
      .link {
        display: inline-block;
        font-weight: 500;
        margin: calc(@links-indent / 2);
      }
    }
  }

  .info {
    background-color: var(--avstpmr-dark-blue);
    padding: @container-padding 0;
    .container {
      justify-content: space-between;
    }
  }
}
</style>