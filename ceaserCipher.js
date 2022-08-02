const caesarCipher = (str) => {
    const plainArr = "abcdefghijklmnopqrstuvwxyz,.".split('');
    const cypherArr = "bcdefghijklmnopqrstuvwxyza,.".split('');
    
    let strArr = str.toLowerCase().split('')
    let newArr = [];

    for(let i in strArr){
        for(let j in plainArr){
            if(strArr[i]===plainArr[j]){
                newArr.push(cypherArr[j])
            }
        }
    }
    return newArr.join('');
};

caesarCipher('abc');

export default caesarCipher;