const Mock = require('mockjs')
Mock.mock('/api/index.json', 'get', require('./json/index.json'))
Mock.mock('/api/city.json', 'get', require('./json/city.json'))
Mock.mock('/api/detail.json', 'get', require('./json/detail.json'))
