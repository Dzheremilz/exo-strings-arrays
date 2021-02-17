let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))

let NewStr = str.trim().toUpperCase().split(' ')
for (let i = 0; i < NewStr.length; i++) {
  console.log(`mot: ${NewStr[i]}`)
}