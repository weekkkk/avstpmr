<template>
  <div class="footer">
    <div class="go-to-map">
      <div class="container">
        <div class="map f a-c j-c sh-base br-base f-w">
          <h3 class="bold c-black align-c">Кассы автостанций</h3>
          <div class="arrow">
            <svg
              width="64"
              height="60"
              viewBox="0 0 64 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 26C1.79086 26 0 27.7909 0 30C0 32.2091 1.79086 34 4 34V26ZM62.8284 32.8284C64.3905 31.2663 64.3905 28.7337 62.8284 27.1716L37.3726 1.71573C35.8105 0.153632 33.2778 0.153632 31.7157 1.71573C30.1536 3.27783 30.1536 5.81049 31.7157 7.37258L54.3431 30L31.7157 52.6274C30.1536 54.1895 30.1536 56.7222 31.7157 58.2843C33.2778 59.8464 35.8105 59.8464 37.3726 58.2843L62.8284 32.8284ZM4 34H60V26H4V34Z"
                fill="#A0D8F1"
              />
            </svg>
          </div>
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
            @click="$emit('onLink')"
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
  TRANSPORTATION_RULES_PAGE,
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
      new LinkModel({
        Text: "Правила перевозок",
        Name: TRANSPORTATION_RULES_PAGE,
      }),
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
@container-max-width: 1124px;
@links-indent: 16px;
@map-indent: 32px;
@map-icon-height: 104px;

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  .go-to-map {
    .map {
      width: 100%;
      background-color: var(--avstpmr-white);
      padding: @container-padding;
      gap: @map-indent;

      .arrow {
        display: grid;
      }

      .map-icon {
        display: inline-grid;
        max-height: @map-icon-height;
        min-height: @map-icon-height;
        max-width: @map-icon-height;
        min-width: @map-icon-height;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        .arrow {
          transform: rotate(90deg);
        }
      }
    }
  }

  .links {
    .list {
      width: calc(100% + @links-indent);
      margin: calc(@links-indent / 2 * -1);
      padding: @container-padding 0;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
      }
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