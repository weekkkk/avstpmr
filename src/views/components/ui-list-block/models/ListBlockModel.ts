import IListBlock from "../interfaces/IListBlock";

export default class ListBlockModel implements IListBlock {
  Number: string;
  Icon: string;
  Important: string;
  Text: string;

  constructor (obj?: Partial<ListBlockModel>) {
    if (obj) Object.assign(this, obj)
  }
}