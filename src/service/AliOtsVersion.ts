import { AliOtsBin, TableStore } from '../lib/AliOtsBin'

export class AliOtsVersion {
  private readonly bin: AliOtsBin

  constructor(bin: AliOtsBin) {
    this.bin = bin
  }

  // 文档详见 https://help.aliyun.com/document_detail/147223.html
  async new(name: string) {
    const params = {
      tableName: 'version',
      condition: new TableStore.Condition(
        TableStore.RowExistenceExpectation.IGNORE,
        null
      ),
      primaryKey: [{ name: name }],
      updateOfAttributeColumns: [
        { INCREMENT: [{ version: TableStore.Long.fromNumber(1) }] },
      ],
      returnContent: {
        returnColumns: ['version'],
        returnType: TableStore.ReturnType.AfterModify,
      },
    }
    const res = await this.bin.client.updateRow(params)
    return res.row.attributes[0].columnValue.toNumber() as number
  }
}
