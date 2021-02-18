let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

const check = 'bob'

console.log(str.toLowerCase().includes(check) ? `${check} est présent` : `${check} n\'est pas présent`)

// correction officiel:

str = str.trim()
str = str.toLowerCase()

if (str.includes('bob')) {
  console.log('bob existe')
} else {
  console.log('biob n\'est pas là')
}
