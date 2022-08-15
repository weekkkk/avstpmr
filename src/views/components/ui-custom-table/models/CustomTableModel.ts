import ICustomTable from "../interfaces/ICustomTable"
import CustomTableRowModel from "./CustomTableRowModel"

export default class CustomTableModel implements ICustomTable {
  // Заголовок
  Title: string
  
  // Шапка
  Header: CustomTableRowModel

  // Строки
  Body: CustomTableRowModel[]

  constructor(obj?: Partial<CustomTableModel>) {
    if (obj) Object.assign(this, obj)
  }

  get IsWithSubTable() {
    return this.Body.find(el => el.SubTable)
  }
}