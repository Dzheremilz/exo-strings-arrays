const msg = 'HAVE YOU EVER HAD A DREAM NEO THAT YOU WERE SO SURE WAS REAL WHAT IF YOU WERE UNABLE TO WAKE FROM THAT DREAM HOW WOULD YOU KNOW THE DIFFERENCE BETWEEN THE DREAM WORLD AND THE REAL WORLD'

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