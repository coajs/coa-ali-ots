// @ts-nocheck
import { AliOtsBin, AliOtsStorage, AliOtsVersion } from '..'

// TableStore配置
const config = {
  accessKeyId: 'LTAI4XXXXXXXXX1DNpZDk',
  accessKeySecret: 'TxqDw89E3wXXXXXXXXXXXXoWZy2hXvZ',
  instance: 'instance-name',
  endpoint: 'https://instance-name.cn-shanghai.ots.aliyuncs.com'
}

// 初始化bin实例
const bin = new AliOtsBin(config)

// 创建Version实例
const otsVersion = new AliOtsVersion(bin)

// 根据项目名称返回一个新的版本号
await otsVersion.new('name') // 1

// 创建存储实例
const otsStorage = new AliOtsStorage(bin)

// 设置存储
await otsStorage.set('key1', 'data1')
// 读取存储
await otsStorage.get('key1') // "data1"