<template>
  <div class="menu f d-c">
    <div class="close medium" @click="onMenu">+</div>
    <div class="container f d-c">
      <div class="top f d-c a-c">
        <div class="logo-box">
          <ui-link
            class="logo"
            @click="onMenu"
            :image="logoLink.Image"
            :name="logoLink.Name"
          />
          <ui-link
            class="h4 bold align-c"
            @click="onMenu"
            :name="logoLink.Name"
          >
            Автостанции<br />Приднестровья</ui-link
          >
        </div>
      </div>
      <div class="bottom f d-c a-c">
        <div class="socials f a-c">
          <ui-link
            class="social link"
            v-for="(link, index) in socialLinks"
            target="black"
            :key="index"
            :image="link.Image"
            :href="link.Link"
          >
          </ui-link>
        </div>
        <div class="links f d-c a-l w-100">
          <ui-link
            @click="link.Name ? onMenu() : ''"
            class="link p"
            v-for="(link, index) in links"
            :key="index"
            :name="link.Name"
            :href="link.Link"
          >
            <span class="c-dark-blue" style="text-decoration: none">
              {{ link.Text }}
            </span>
          </ui-link>
        </div>
      </div>
    </div>
    <footer-layout @onLink="onMenu" />
  </div>
</template>

<script lang="ts">
import {
  CONTACTS_PAGE,
  MAIN_PAGE,
  FLIGHT_SCHEDULE_PAGE,
} from "@/router/routerNames";
import { Options, Vue } from "vue-property-decorator";
import LinkModel from "../components/ui-link/models/LinkModel";
import footerLayout from "./footer-layout.vue";
import {
  IconFacebook,
  IconInstagram,
  IconOdnoklassniki,
  IconViber,
  IconVK,
  Logo,
} from "./vars/Icons";

@Options({
  name: "menu-layout",
  components: { footerLayout },
  emits: ["onMenu"],
})
export default class MenuLayoutComponent extends Vue {
  logoLink: LinkModel = new LinkModel({
    Image: Logo,
    Name: MAIN_PAGE,
  });
  links: LinkModel[] = [];
  socialLinks: LinkModel[] = [];

  created() {
    this.initLinks();
  }

  onMenu() {
    this.$emit("onMenu");
  }

  initLinks() {
    this.links.push(
      new LinkModel({ Text: "Расписание рейсов", Name: FLIGHT_SCHEDULE_PAGE }),
      new LinkModel({ Text: "Контакты", Name: CONTACTS_PAGE }),
      new LinkModel({
        Text: "avstpmr@gmail.scom",
        Link: "mailto:avstpmr@gmail.scom",
      })
    );
    this.socialLinks.push(
      new LinkModel({
        Text: "VK",
        Link: "https://vk.com/id610773776",
        Image: IconVK,
      }),
      new LinkModel({
        Text: "Viber",
        Link: "https://invite.viber.com/?g2=AQA2DbXPn4uinUvnx3PeP7d%2F85Xl5CmwctTj1CJOnx7i4eHNRzHYCpeK%2FS%2BJ4g%2Bu",
        Image: IconViber,
      }),
      new LinkModel({
        Text: "OK",
        Link: "https://ok.ru/profile/566846766068",
        Image: IconOdnoklassniki,
      }),
      new LinkModel({
        Text: "Instagram",
        Link: "https://www.instagram.com/avtostantsiipridnestrovia/",
        Image: IconInstagram,
      }),
      new LinkModel({
        Text: "Facebook",
        Link: "https://www.facebook.com/avstpmr/",
        Image: IconFacebook,
      })
    );
  }
}
</script>

<style lang="less" scoped>
@bg-color: var(--avstpmr-white);
@icon-height: 32px;
@icon-indent: 12px;
@logo-height: 84px;

.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @bg-color;
  display: flex;
  overflow: auto;

  .close {
    position: absolute;
    cursor: pointer;
    user-select: none;
    outline: none;
    top: 8px;
    left: 8px;
    font-size: 32px;
    line-height: 24px;
    transform: rotate(45deg);
    color: var(--avstpmr-gray);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
      filter: brightness(110%);
    }
    &:active {
      filter: brightness(90%);
    }
  }

  .container {
    gap: 16px;
    padding: 16px;
    .logo-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      .logo {
        display: grid;
        // min-height: @logo-height;
        // max-height: @logo-height;
        min-width: @logo-height;
        max-width: @logo-height;
      }

      .p {
        line-height: 20px;
      }
    }
    .bottom {
      gap: 16px;
      .socials {
        .social {
          display: grid;
          min-height: @icon-height;
          max-height: @icon-height;
          min-width: @icon-height;
          max-width: @icon-height;
          &:not(:last-child) {
            margin-right: @icon-indent;
          }
        }
      }

      .links {
        gap: 8px;

        .link {
          padding: 16px;
          &:not(:last-child) {
            border-bottom: 1px solid var(--avstpmr-light-gray);
          }
        }
      }
    }
  }
}
</style>