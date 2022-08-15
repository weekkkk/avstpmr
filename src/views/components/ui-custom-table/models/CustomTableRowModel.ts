import ICustomTableRow from "../interfaces/ICustomTableRow"
import CustomTableCeilModel from "./CustomTableCeilModel"
import CustomTableModel from "./CustomTableModel"

export default class CustomTableRowModel implements ICustomTableRow {
  // Ячейки
  Ceils: CustomTableCeilModel[]

  // Подтаблица
  SubTable: CustomTableModel

  // Видимость подтаблицы
  VisibleSubTable: boolean

  constructor(obj?: Partial<CustomTableRowModel>) {
    if (obj) Object.assign(this, obj)
  }
}