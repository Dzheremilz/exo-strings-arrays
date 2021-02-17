const str = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'

const check = 'Javascript'

if (str.includes(check)) {
  console.log(`${check} est bien présent dans la phrase`)
} else {
  console.log(`${check} n'est pas présent.`)
}

console.log(str.includes(check) ? `${check} est bien présent dans la phrase` : `${check} n'est pas présent.`)