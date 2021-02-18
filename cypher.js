const msg = 'PEOPLE SHOULD NOT BE AFRAID OF THEIR GOVERNMENT GOVERNMENTS SHOULD BE AFRAID OF THEIR PEOPLE'

const shift = 17
let cypher = ''
let buff

for (let i = 0; i < msg.length; i++) {
  if (msg.charCodeAt(i) !== 32) {
    if (msg.charCodeAt(i) + shift > 90) {
      buff = msg.charCodeAt(i) - 26 + shift
      cypher += String.fromCharCode(buff)
    } else {
      buff = msg.charCodeAt(i) + shift
      cypher += String.fromCharCode(buff)
    }
  } else {
    cypher += ' '
  }
}
console.log(cypher)