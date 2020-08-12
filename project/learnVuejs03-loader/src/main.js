// 1.使用commonjs的模块化规范
const {add,mul} = require('./js/mathUntil.js');

console.log(add(20,30));
console.log(mul(23,30));

// 2.使用ES6的模块化规范
import {name,age,address} from "./js/info";

console.log(name);
console.log(age);
console.log(address);

// 3.依赖css文件
require('./css/normal.css');

// 4.依赖less文件
require('./css/special.less');
document.writeln('夏目友人帐');