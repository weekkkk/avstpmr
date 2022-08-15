import CustomTableCeilModel from "../models/CustomTableCeilModel"
import CustomTableModel from "../models/CustomTableModel"

export default interface ICustomTableRow {
  // Ячейки
  Ceils: CustomTableCeilModel[]

  // Подтаблица
  SubTable: CustomTableModel

  // Видимость подтаблицы
  VisibleSubTable: boolean
}