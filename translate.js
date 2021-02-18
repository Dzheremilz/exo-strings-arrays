let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))
console.log('\n')

let NewStr = str.trim().toUpperCase().split(' ')
for (let i = 0; i < NewStr.length; i++) {
  console.log(`mot: ${NewStr[i]}`)
}
console.log('\n')

for (let elem of NewStr) {
  console.log(`mot: ${elem}`)
}
console.log('\n')

NewStr.forEach((elem) => {
  console.log(`mot: ${elem}`)
})