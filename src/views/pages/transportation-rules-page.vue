<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">
      Правила онлайн - покупки и возврата билетов
    </h2>
    <div class="block">
      <h3 class="medium is-adaptive">Информация</h3>
      <p class="is-adaptive align-j">
        Совершая покупку электронных билетов на нашем сайте, Вы соглашаетесь со
        всеми ниже перечисленными Условиями и Правилами. <br />
        <br />
        <span class="bold c-dark-blue">Внимание!</span> Оформление и оплата
        электронных билетов допускается только при принятии данных Условий.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";

@Options({
  name: "transportation-rules-page",
})
export default class TransportationRulesPageComponent extends Vue {}
</script>

<style lang="less" scoped>
</style>