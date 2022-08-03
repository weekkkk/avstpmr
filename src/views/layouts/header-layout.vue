<template>
  <div class="header">
    <div class="container">
      <div class="left f a-c">
        <img src="" alt="logo" class="logo" />
      </div>
      <div class="right f a-c">
        <div class="links f a-c">
          <ui-link
            class="link p c-dark-blue"
            v-for="(link, index) in links"
            :key="index"
            :name="link.Name"
          >
            {{ link.Text }}
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
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import LinkModel from "../components/ui-link/models/LinkModel";

import {
  IconVK,
  IconViber,
  IconOdnoklassniki,
  IconInstagram,
  IconFacebook,
} from "./vars/Icons";

@Options({
  name: "header-layout",
})
export default class HeaderLayoutComponent extends Vue {
  links: LinkModel[] = [];
  socialLinks: LinkModel[] = [];

  created() {
    this.initLinks();
  }

  initLinks() {
    this.links.push(
      new LinkModel({ Text: "Расписание рейсов", Name: "Name" }),
      new LinkModel({ Text: "Контакты", Name: "Name" }),
      new LinkModel({ Text: "avstpmr@gmail.scom", Name: "Name" })
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
@padding-x: 32px;
@padding-y: 16px;
@box-shadow: 0px 8px 8px rgba(219, 219, 219, 0.5);
@font-size: 16px;
@links-indent: 16px;
@icon-height: 32px;
@icon-indent: 12px;
@container-max-width: 1024px;

.header {
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: @box-shadow;
  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: @container-max-width;
    padding: @padding-y @padding-x;
    .left {
      color: var(--avstpmr-black);
    }
    .right {
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
  }
}
</style>