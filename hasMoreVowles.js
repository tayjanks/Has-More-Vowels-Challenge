const hasMoreVowels = (word) => {
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelnum =0
    let needed = word.length /2
    let wordSplit = word.toLowerCase().split('')
    for (let i=0; i <wordSplit.length; i++) {
    let letter = wordSplit[i]
    if (vowels.includes(letter)){vowelnum++}
    if (vowelnum > needed){return true}
    }
    return false
}

console.log (hasMoreVowels("tay"));