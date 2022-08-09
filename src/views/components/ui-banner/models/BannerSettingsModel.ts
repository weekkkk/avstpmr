import IBannerSettings from "../interfaces/IBannerSettings";

export default class BannerSettingsModel implements IBannerSettings {
  Id: number
  Subtitle: string;
  Image: string;
  Title: string;
  Description: string;

  constructor (obj?: Partial<BannerSettingsModel>) {
    if (obj) Object.assign(this, obj)
  }
}