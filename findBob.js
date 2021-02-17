const str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

const check = 'bob'

console.log(str.toLowerCase().includes(check) ? `${check} est présent` : `${check} n\'est pas présent`)