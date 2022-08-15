import ICustomTableCeil from "../interfaces/ICustomTableCeil"

export default class CustomTableCeilModel implements ICustomTableCeil {
  // Заголовок
  Title: string

  // Иконка
  Icon: string

  constructor(obj?: Partial<CustomTableCeilModel>) {
    if (obj) Object.assign(this, obj)
  }
}