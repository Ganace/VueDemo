// 1.使用commonjs的模块化规范
const {add,mul} = require('./mathUntil.js');

console.log(add(20,30));
console.log(mul(23,30));

// 使用ES6的模块化规范
import {name,age,address} from "./info";

console.log(name);
console.log(age);
console.log(address);