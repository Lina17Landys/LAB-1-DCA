import toRegexRange from "./node_modules/to-regex-range/index.js";

const source = toRegexRange('15', '95');
//=> 1[5-9]|[2-8][0-9]|9[0-5]
 
const regex = new RegExp(`^${source}$`);
console.log(regex.test('14')); //=> false
console.log(regex.test('50')); //=> true
console.log(regex.test('94')); //=> true
console.log(regex.test('96')); //=> false