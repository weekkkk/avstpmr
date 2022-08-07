import ListBlockModel from '../../components/ui-list-block/models/ListBlockModel'

export default class BlockModel {
  Title: string
  List: ListBlockModel[]

  constructor (obj?: Partial<BlockModel>) {
    if (obj) Object.assign(this, obj)
  }
}