[1,2,3,4,5].at(3)
[1,2,3,4,5].at(-2)

const matchObj = /(a+)(b+)/d.exec('aaaabb');

console.log(matchObj);
/*
Output -
['aaaabb', 'aaaa', 'bb', index: 0, input: 'aaaabb', groups: undefined, indices: Array(3)]
*/

matchObj.indices[1];
/*
Output - 
[0, 4]
*/

const matchObj = /(?<as>a+)(?<bs>b+)/d.exec('aaaabb');

console.log(matchObj);
/*
Output - 
['aaaabb', 'aaaa', 'bb', index: 0, input: 'aaaabb', groups: {as: 'aaaa', bs: 'bb'}, indices: Array(3)]
*/

const proto = {
  protoProp: 'protoProp',
};

const obj = {
  __proto__: proto,
  objProp: 'objProp',
};

console.log('protoProp' in obj); // output - true.
console.log(Object.hasOwn(obj, 'protoProp')) // output - false
console.log(Object.hasOwn(proto, 'protoProp')); // output - true.

function readFiles(filePaths) {
  return filePaths.map(
    (filePath) => {
      try {
        // ···
      } catch (error) {
        throw new Error(
          `While processing ${filePath}`,
          {cause: error}
        );
      }
    });
}

const messages = await import(`./messages-${language}.mjs`);

let lodash;
try {
  lodash = await import('https://primary.example.com/lodash');
} catch {
  lodash = await import('https://secondary.example.com/lodash');
}

const resource = await Promise.any([
  fetch('http://example.com/first.txt')
    .then(response => response.text()),
  fetch('http://example.com/second.txt')
    .then(response => response.text()),
]);

class InstPublicClass {
  // Instance public field
  instancePublicField = 0; // (A)

  constructor(value) {
    // We don’t need to mention .property elsewhere!
    this.property = value; // (B)
  }
}

const inst = new InstPublicClass('constrArg');

