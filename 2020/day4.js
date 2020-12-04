document.body.innerText.split`\n\n`.filter(d=>d.match(/(?!cid)...:/g).length>6).length // p1
// document.body.innerText.split`\n\n`.map(d=>d.match(/byr:(19[2-9]\d|200[0-2])|iyr:(201\d|2020)|eyr:(202\d|2030)|hcl:#[0-9a-f]{6}|ecl:(amb|blu|brn|gry|grn|hzl|oth)|pid:\d{9}|hgt:((59|6\d|7[0-6])in|(1[5-8]\d|19[0-3])cm)/g))
--document.body.innerText.split`\n\n`.filter(d=>new Set(d.match(/byr:(19[2-9]\d|200[0-2])|iyr:(201\d|2020)|eyr:(202\d|2030)|hcl:#[0-9a-f]{6}|ecl:(amb|blu|brn|gry|grn|hzl|oth)|pid:\d{9}|hgt:((59|6\d|7[0-6])in|(1[5-8]\d|19[0-3])cm)/g)?.map(d=>d.slice(0,2))).size>6).length
