const fs = require('fs');
const list = JSON.parse(
  fs.readFileSync('../src/emojis.json', { encoding: 'utf8' }),
);

const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function toStr(...args) {
  return args.reduce((prev, curr) => prev + '\n' + curr);
}
void (async function () {
  for (let item of list) {
    const answer = await rl.question(toStr(item.content, item.name, item.description));
    item.represent = answer;
  }
  fs.writeFileSync('./hello.txt', JSON.stringify(list));
})();
