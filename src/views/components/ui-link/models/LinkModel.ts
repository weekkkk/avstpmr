import ILink from '../interfaces/ILink'

export default class LinkModel implements ILink {
  Path?= ''
  Name?= ''
  Link?= ''
  Image?= ''
  Text = ''

  constructor (obj?: Partial<LinkModel>) {
    if (obj) Object.assign(this, obj)
  }
}