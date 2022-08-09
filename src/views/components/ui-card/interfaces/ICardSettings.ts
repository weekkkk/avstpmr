import CardImageType from "../enums/CardImageType";

export default interface ICardSettings {
  Subtitle: string;
  Image: string;
  Title: string;
  Links: string[];
  Description: string;
  ImageType: CardImageType;
}