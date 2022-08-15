import CustomTableRowModel from "../models/CustomTableRowModel"

export default interface ICustomTable {
  // Заголовок
  Title: string
  
  // Шапка
  Header: CustomTableRowModel

  // Строки
  Body: CustomTableRowModel[]
}