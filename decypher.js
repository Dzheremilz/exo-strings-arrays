const str = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'

let buff
let decypher
const word = [' the ', ' be ', ' to ', ' of ', ' and ', ' in ', ' that', ' have ', ' it ', ' for ']

for (let decalage = 1; decalage < 26; decalage++) {
  decypher = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) != 32) {
      if (str[i].charCodeAt(0) > 90 - decalage) {
        buff = str[i].charCodeAt(0) - 26 + decalage
        decypher += String.fromCharCode(buff)
      } else {
        buff = str[i].charCodeAt(0) + decalage
        decypher += String.fromCharCode(buff)
      }
    } else {
      decypher += ' '
    }
  }
  //console.log(decypher)
  for (let j = 0; j < word.length; j++) {
    if (decypher.includes(word[j].toUpperCase())) {
      console.log(`La bonne solution semble être:\nPour un décalage de ${decalage} le code devient :\n${decypher}\n\n`)
      break
    }
  }
}