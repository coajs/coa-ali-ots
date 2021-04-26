import { AliOtsBin, TableStore } from '../lib/AliOtsBin'

export class AliOtsStorage {

  private readonly bin: AliOtsBin

  // 文档参考 https://help.aliyun.com/document_detail/56354.html
  constructor (bin: AliOtsBin) {
    this.bin = bin
  }

  async set<T> (key: string, value: T, ms = 1000 * 365 * 24 * 3600 * 1000) {
    const now = Date.now(), expire = TableStore.Long.fromNumber(now + ms)
    const params = {
      tableName: 'storage',
      primaryKey: [{ 'key': key }],
      condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
      attributeColumns: [{ 'value': JSON.stringify(value) }, { 'expire': expire }],
      returnContent: { returnType: TableStore.ReturnType.Primarykey }
    }
    const res = await this.bin.client.putRow(params)
    return res.row.primaryKey[0].value as string
  }

  async get<T> (key: string) {
    const now = Date.now()
    const params = {
      tableName: 'storage',
      primaryKey: [{ 'key': key }],
      columnsToGet: ['value', 'expire'],
      columnFilter: new TableStore.SingleColumnCondition('expire', TableStore.Long.fromNumber(now), TableStore.ComparatorType.GREATER_THAN)
    }
    const res = await this.bin.client.getRow(params)
    const value = res.row.attributes?.[1].columnValue || undefined
    return value && JSON.parse(value) as T
  }

}