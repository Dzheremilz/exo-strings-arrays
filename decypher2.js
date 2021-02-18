let msg = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'

// E : 69
let array = []
let MostOccurence
let shift
let buff
let decypher = ''

for (let x = 0; x < 26; x++) {
  array.push(0)
}
for (let j = 0; j < msg.length; j++) {
  if (msg[j].charCodeAt(0) !== 32) {
    array[msg[j].charCodeAt(0) - 65] += 1
  }
}
console.log(array)
console.log('Index de la lettre avec le plus d\'occurence: ' + Math.max(...array))
MostOccurence = array.findIndex(x => x === 25) + 65
console.log('Code UTF-16 de la lettre: ' + MostOccurence)
console.log('Lettre: ' + String.fromCharCode(86))

if (MostOccurence < 69) {
  shift = 69 - MostOccurence
} else if (MostOccurence > 69) {
  shift = MostOccurence - 69
  shift = 26 - shift
}
console.log(`Décalage de : ${shift}`)

for (let i = 0; i < msg.length; i++) {
  if (msg.charCodeAt(i) != 32) {
    if (msg.charCodeAt(i) > 90 - shift) {
      buff = msg.charCodeAt(i) - 26 + shift
      decypher += String.fromCharCode(buff)
    } else {
      buff = msg.charCodeAt(i) + shift
      decypher += String.fromCharCode(buff)
    }
  } else {
    decypher += ' '
  }
}
console.log(`La solution, avec un décalage de ${shift}:\n${decypher}`)