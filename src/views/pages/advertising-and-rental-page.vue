<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Реклама и аренда</h2>
    <div class="block">
      <h3 class="medium is-adaptive">Информация</h3>
      <p class="is-adaptive align-l">
        Сдаются в аренду торговые и офисные площади, замощения для размещения
        передвижного оборудования, парковочные места, а также рассматриваются
        заявки на размещение рекламы во всех автостанциях республики.
      </p>
    </div>
    <div class="block">
      <h3 class="medium is-adaptive">
        Свободные торговые площади и офисные помещения
      </h3>
      <div class="list f f-w">
        <ui-list-block
          v-for="block in listBlocks"
          :key="block.Number"
          class="item p is-adaptive"
          :number="block.Number"
          :important="block.Important"
        >
          {{ block.Text }}
        </ui-list-block>
      </div>
    </div>
    <div class="block">
      <h3 class="medium is-adaptive">За справками обращаться по телефону</h3>
      <h2 class="bold c-dark-blue is-adaptive">+373/533/9-57-53</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import ListBlockModel from "../components/ui-list-block/models/ListBlockModel";
@Options({
  name: "advertising-and-rental-page",
})
export default class AdvertisingAndRentalPageComponent extends Vue {
  listBlocks: ListBlockModel[] = [];

  created() {
    this.initListBlocks();
  }

  initListBlocks() {
    this.listBlocks.push(
      new ListBlockModel({
        Number: "1",
        Text: "г. Тирасполь, ул. Синёва,2 (бывшее здание ДКП «Пригородная»).",
        Important: "Возможна продажа!",
      })
    );
    this.listBlocks.push(
      new ListBlockModel({
        Number: "2",
        Text: "Автостанция г.Дубоссары, ул.Свердлова,68 (торговые павильоны и помещение для отделения банка).",
      })
    );
    this.listBlocks.push(
      new ListBlockModel({
        Number: "3",
        Text: "ДКП г.Днестровск,  ул. Котовского, 4.",
      })
    );
    this.listBlocks.push(
      new ListBlockModel({
        Number: "4",
        Text: "ДКП п.Первомайск, ул. Ленина,105 «а».",
      })
    );
  }
}
</script>

<style lang="less" scoped>
@gap: 16px;
.list {
  gap: @gap;
  .item {
    width: calc(50% - @gap / 2);
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>