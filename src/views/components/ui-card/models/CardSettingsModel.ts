import ICardSettings from "../interfaces/ICardSettings";
import CardImageType from "../enums/CardImageType";

export default class CardSettingsModel implements ICardSettings {
  Subtitle: string;
  Image: string;
  Title: string;
  Links: string[];
  Description: string;
  ImageType: CardImageType;

  constructor (obj?: Partial<CardSettingsModel>) {
    if (obj) Object.assign(this, obj)
  }
}