# coa-ali-ots

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/coa-ali-ots.svg?style=flat-square)](https://www.npmjs.org/package/coa-ali-ots)
[![npm downloads](https://img.shields.io/npm/dm/coa-ali-ots.svg?style=flat-square)](http://npm-stat.com/charts.html?package=coa-ali-ots)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/coajs/coa-ali-ots/pulls)

轻量的阿里云 TableStore 封装 for Node.js。基于 [tablestore](https://www.npmjs.com/package/tablestore) 做简单处理。

根据日常实际项目使用情况，封装了一些个人常用的的方法。此方法在特殊场景下使用，不具有普遍性。

## 快速开始

### 安装

```shell
yarn add coa-ali-ots
```

### 使用

```typescript
import { AliOtsBin, AliOtsStorage, AliOtsVersion } from 'coa-ali-ots'

// TableStore配置
const config = {
  accessKeyId: 'LTAI4XXXXXXXXX1DNpZDk',
  accessKeySecret: 'TxqDw89E3wXXXXXXXXXXXXoWZy2hXvZ',
  instance: 'instance-name',
  endpoint: 'https://instance-name.cn-shanghai.ots.aliyuncs.com',
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
```

更多的使用可以参考阿里云表格储存 Tablestore [官方文档](https://help.aliyun.com/document_detail/56350.html) 原文。
