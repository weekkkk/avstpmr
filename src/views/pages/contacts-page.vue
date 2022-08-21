<template>
  <div class="page">
    <h2 class="align-l medium is-adaptive">Контакты</h2>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Администрация</h3>
      <div class="cards">
        <ui-card
          class="card br-base sh-base"
          v-for="(card, index) in employeesСards"
          :key="index"
          :subtitle="card.Subtitle"
          :image="card.Image"
          :title="card.Title"
          :links="card.Links"
          :description="card.Description"
          :imageType="card.ImageType"
        />
      </div>
    </div>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Автовокзалы</h3>
      <div class="cards">
        <ui-card
          class="card br-base sh-base"
          v-for="(card, index) in busStationsСards"
          :key="index"
          :subtitle="card.Subtitle"
          :image="card.Image"
          :title="card.Title"
          :links="card.Links"
          :description="card.Description"
          :imageType="card.ImageType"
        />
      </div>
    </div>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Автостанции</h3>
      <div class="cards">
        <ui-card
          class="card br-base sh-base"
          v-for="(card, index) in stationsСards"
          :key="index"
          :subtitle="card.Subtitle"
          :image="card.Image"
          :title="card.Title"
          :links="card.Links"
          :description="card.Description"
          :imageType="card.ImageType"
        />
      </div>
    </div>
    <div class="block">
      <h3 class="medium is-adaptive align-c">Диспетчерско-кассовые пункты</h3>
      <div class="cards">
        <ui-card
          class="card br-base sh-base"
          v-for="(card, index) in dispatchСards"
          :key="index"
          :subtitle="card.Subtitle"
          :image="card.Image"
          :title="card.Title"
          :links="card.Links"
          :description="card.Description"
          :imageType="card.ImageType"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import uiCard from "../components/ui-card/ui-card.vue";
import CardSettingsModel from "../components/ui-card/models/CardSettingsModel";
import CardImageType from "../components/ui-card/enums/CardImageType";

@Options({
  name: "contacts-page",
  components: { uiCard },
})
export default class ContactsPageComponent extends Vue {
  employeesСards: CardSettingsModel[] = [];
  busStationsСards: CardSettingsModel[] = [];
  stationsСards: CardSettingsModel[] = [];
  dispatchСards: CardSettingsModel[] = [];

  created() {
    this.initEmployeesСards();
    this.initBusStationsСards();
    this.initStationsСards();
    this.initDispatchСards();
    window.scroll(0, 0);
  }

  initEmployeesСards() {
    this.employeesСards.push(
      new CardSettingsModel({
        Description: "Директор",
        Image: "",
        Subtitle: "Урсул Олеся Петровна",
        Links: ["+373/533/9-57-53"],
        Title: "Управление",
      }),
      new CardSettingsModel({
        Description: "Главный бухгалтер-начальник ФЭО",
        Image: "",
        Subtitle: "Неделько Кристина Анатольевна",
        Links: ["+373/533/8-15-03", "+373/533/9-45-11"],
        Title: "Финансово-экономический отдел",
      }),
      new CardSettingsModel({
        Description: "Начальник ООП",
        Image: "",
        Subtitle: "Евдокимова Валерия Ивановна",
        Links: ["+373/533/9-55-60"],
        Title: "Отдел организации перевозок",
      }),
      new CardSettingsModel({
        Description: "Начальник ОКиДО",
        Image: "",
        Subtitle: "Федотова Ольга Викторовна",
        Links: ["+373/533/8-01-18"],
        Title: "Отдел кадрового и документационного обеспечения",
      })
    );
    this.employeesСards = this.employeesСards.map((card) => {
      card.ImageType = CardImageType.Circle;
      return card;
    });
  }

  initStationsСards() {
    this.stationsСards.push(
      new CardSettingsModel({
        Subtitle: "г. Тирасполь",
        Image: "",
        Title: "Автостанция г. Тирасполь, ул. Ленина 59 «б»",
        Links: ["+373/533/9-43-31"],
        Description: "Начальник подразделения<br>Кристева Елена Александровна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Григориополь",
        Image: "",
        Title: "Автостанция г. Григориополь, ул. Кирова, 2",
        Links: ["+373/210/3-22-33"],
        Description: "Начальник подразделения<br>Куксанова Инна Михайловна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Дубоссары",
        Image: "",
        Title: "Автостанция г. Дубоссары, ул. Свердлова, 68",
        Links: ["+373/215/3-45-60"],
        Description: "Начальник подразделения<br>Руссу Яна Яковлевнаs",
      }),
      new CardSettingsModel({
        Subtitle: "г. Рыбница",
        Image: "",
        Title: "Автостанция г. Рыбница, ул.Вальченко 12/1",
        Links: ["+373/555/4-14-09"],
        Description: "Начальник подразделения<br>Тащилина Светлана Петровна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Каменка",
        Image: "",
        Title: "Автостанция г. Каменка ул. Кирова, 157",
        Links: ["+373/216/2-23-05"],
        Description: "Начальник подразделения<br>Мазур Николай Васильевич",
      })
    );
  }

  initBusStationsСards() {
    this.busStationsСards.push(
      new CardSettingsModel({
        Subtitle: "г. Бендеры",
        Image: "",
        Title: "Автовокзал г. Бендеры, ул.Советская, 1",
        Links: ["+373/552/2-65-96"],
        Description: "Начальник подразделения<br>Черная Евгения Сергеевна",
      })
    );
  }

  initDispatchСards() {
    this.dispatchСards.push(
      new CardSettingsModel({
        Subtitle: "г. Тирасполь",
        Image: "",
        Title:
          'Диспетчерско-кассовый пункт "Центральный рынок" г. Тирасполь ул.Карла Маркса, 42',
        Links: ["+373/533/5-00-40"],
        Description: "Начальник подразделения<br>Кристева Елена Александровна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Тирасполь",
        Image: "",
        Title:
          'Диспетчерско-кассовый пункт "Кицканы" г. Тирасполь, на правом берегу р. Днестр в районе моста',
        Links: ["0/775/1-64-31"],
        Description: "Начальник подразделения<br>Кристева Елена Александровна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Слободзея",
        Image: "",
        Title:
          'Диспетчерско-кассовый пункт "Слободзея", г. Слободзея ул.Ленина 99',
        Links: ["+373/557/2-49-90"],
        Description: "Начальник подразделения<br>Кристева Елена Александровна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Днестровск",
        Image: "",
        Title:
          'Диспетчерско-кассовый пункт "Днестровск" г. Днестровск, ул.Котовского, 4',
        Links: ["+373/219/3-13-35"],
        Description: "Кристева Елена Александровна",
      }),
      new CardSettingsModel({
        Subtitle: "пос. Первомайск",
        Image: "",
        Title:
          'Диспетчерско-кассовый пункт "Первомайск" пос. Первомайск ул.Ленина, 105 «а»',
        Links: ["+373/557/3-50-39"],
        Description: "Кристева Елена Александровна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Григориополь",
        Image: "",
        Title: "Диспетчерско-кассовый пункт г. Григориополь ул. Кирова,б/н",
        Links: ["+373/210/3-57-36"],
        Description: "Куксанова Инна Михайловна",
      }),
      new CardSettingsModel({
        Subtitle: "г. Дубоссары",
        Image: "",
        Title: "Диспетчерско-кассовый пункт г. Дубоссары, ул. Ленина, 80 «б»",
        Links: ["0/779/5-84-28"],
        Description: "Руссу Яна Яковлевна",
      })
    );
  }
}
</script>

<style lang="less" scoped>
@gap-cards: 16px;
.cards {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: @gap-cards;
  .card {
    width: calc(50% - @gap-cards);
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>