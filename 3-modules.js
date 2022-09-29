//CommonJS - every file is module(by default)
//Modules-- Encapsulated code (only share minimum)
const {john,peter} = require('./4-namesModules')
const sayHi = require('./5-utils')

//printing sum
require('./6-mind-grenade')

sayHi(peter)
sayHi(john)
