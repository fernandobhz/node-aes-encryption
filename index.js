const crypto = require('crypto');
const base64data = 'eF/6x1oEU5LsFbDRC1/23fZnMaPLHU+1vfxU/twEuUPFQmFnX5UPNJaJ3EkftWkL';
const buff = Buffer.from(base64data, 'base64');
const iv = buff.slice(0, 16);
const data = buff.slice(16);
const decipher = crypto.createDecipheriv('aes-256-cbc', '12345678'.padEnd(32, '\0') , iv);
let result = decipher.update(data, 'binary');
result += decipher.final();
console.log({ buff, result });
