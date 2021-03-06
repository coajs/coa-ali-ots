import { AliOts } from '../typings'

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const TableStore = require('tablestore')

export class AliOtsBin {
  public readonly client: any
  public readonly config: AliOts.Config

  constructor(config: AliOts.Config) {
    this.config = config
    this.client = new TableStore.Client({
      accessKeyId: config.accessKeyId,
      accessKeySecret: config.accessKeySecret,
      instancename: config.instance,
      endpoint: config.endpoint,
    })
  }
}
