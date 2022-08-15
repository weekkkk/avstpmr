<template>
  <div class="pseudo-header" :style="pseudoHeaderStyles"></div>
  <div class="header" ref="header">
    <div class="container">
      <div class="left f a-c">
        <ui-link class="logo" :image="logoLink.Image" :name="logoLink.Name" />
      </div>
      <div class="right f a-c">
        <div class="links f a-c">
          <ui-link
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
      </div>
      <div class="burger" @click="onMenu">
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="2" rx="1" fill="#C4BDBD" />
          <rect y="6" width="24" height="2" rx="1" fill="#C4BDBD" />
          <rect y="12" width="24" height="2" rx="1" fill="#C4BDBD" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import LinkModel from "../components/ui-link/models/LinkModel";

import {
  Logo,
  IconVK,
  IconViber,
  IconOdnoklassniki,
  IconInstagram,
  IconFacebook,
} from "./vars/Icons";

import {
  MAIN_PAGE,
  CONTACTS_PAGE,
  FLIGHT_SCHEDULE_PAGE,
} from "../../router/routerNames";

@Options({
  name: "header-layout",
  emits: ["onMenu"],
})
export default class HeaderLayoutComponent extends Vue {
  logoLink: LinkModel = new LinkModel({
    Image: Logo,
    Name: MAIN_PAGE,
  });
  links: LinkModel[] = [];
  socialLinks: LinkModel[] = [];

  headerHeight = 0;

  $refs: {
    header: HTMLElement;
  };

  created() {
    this.initLinks();
  }
  mounted() {
    this.setHeaderHeight();
    window.addEventListener("resize", this.setHeaderHeight);
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

  setHeaderHeight() {
    this.headerHeight = this.$refs.header.clientHeight;
  }
  get pseudoHeaderStyles() {
    return [
      { minHeight: `${this.headerHeight}px` },
      { maxHeight: `${this.headerHeight}px` },
    ];
  }

  beforeUnmount() {
    window.removeEventListener("resize", this.setHeaderHeight);
  }
}
</script>

<style lang="less" scoped>
@padding-x: 32px;
@padding-y: 16px;
@box-shadow: 0px 8px 8px rgba(219, 219, 219, 0.5);
@font-size: 16px;
@links-indent: 16px;
@icon-height: 32px;
@icon-indent: 12px;
@container-max-width: 1024px;
@bg-color: var(--avstpmr-white);

.header {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: @box-shadow;
  background-color: @bg-color;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: @container-max-width;
    padding: @padding-y @padding-x;
    .left {
      color: var(--avstpmr-black);

      .logo {
        height: 32px;
        width: 32px;
      }
    }
    .right {
      @media (max-width: 768px) {
        display: none;
      }

      .links {
        padding: 0 @links-indent;
        .link {
          display: inline-block;
          font-weight: 500;
          color: var(--avstpmr-dark-blue);
        }
        .link:not(:last-child) {
          margin-right: @links-indent;
        }
      }
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
    }
    .burger {
      display: grid;
      cursor: pointer;

      &:hover {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(90%);
      }
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
}
</style>