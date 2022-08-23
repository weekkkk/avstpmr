<template>
  <div class="footer">
    <div class="go-to-map">
      <div class="container">
        <div class="map f a-c j-c sh-base br-base f-w">
          <h3
            class="bold c-black align-c"
            style="cursor: pointer"
            @click="onMap"
          >
            Кассы автостанций
          </h3>
          <div class="arrow" style="cursor: pointer" @click="onMap">
            <svg
              width="94"
              height="118"
              viewBox="0 0 136 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 51C3.58172 51 0 54.5817 0 59C0 63.4183 3.58172 67 8 67L8 51ZM133.657 64.6569C136.781 61.5327 136.781 56.4673 133.657 53.3431L82.7452 2.43146C79.621 -0.692737 74.5557 -0.692737 71.4315 2.43146C68.3073 5.55565 68.3073 10.621 71.4315 13.7452L116.686 59L71.4315 104.255C68.3073 107.379 68.3073 112.444 71.4315 115.569C74.5557 118.693 79.621 118.693 82.7452 115.569L133.657 64.6569ZM8 67L128 67V51L8 51L8 67Z"
                fill="#E17628"
              />
            </svg>
          </div>
          <div class="map-icon" @click="onMap">
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
            :key="'link' + index"
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
          <ui-link class="link p" href="mailto:avstpmr@gmail.com">
            <span class="c-white" style="text-decoration: none">
              avstpmr@gmail.com
            </span>
          </ui-link>
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
  MAP_PAGE,
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

  onMap() {
    this.$router.push({ name: MAP_PAGE });
    this.$emit("onLink");
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
        cursor: pointer;
        max-height: @map-icon-height;
        min-height: @map-icon-height;
        max-width: @map-icon-height;
        min-width: @map-icon-height;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
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