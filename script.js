// 1
function protect_email(email) {
    return email.slice(0, email.indexOf('@') / 2) + "..." + email.slice(email.indexOf('@'), email.length)
}
console.log(protect_email("rob@example.com"));

2
function string_parameterize(str) {
    return str.split(" ").join('-').toLowerCase()
}
console.log(string_parameterize("Robin Singh from USA."));

3
function repeat(str, n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res += str
    }
    return res
}
console.log(repeat('Ha!', 3));

4


function stringCompression(str) {
    let counter = 1;
    let result = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
        }
        else {
            result += str[i] + counter;
            counter = 1
        }
    }
    return result.length > str.length ? str : result;
}


// "aaabbbccccccab" ==> a3b3c6a1b1
console.log(stringCompression("aabcd"));
// aabcd ==> aabcd