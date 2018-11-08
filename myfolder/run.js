function encodeToRot13(str) {

  const strEng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const strRot = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  // const Alphabeth = {};
  // const reg=/[^a-z]/i;
  // let j = 0;

  // for (let char of strEng) {
  //   Alphabeth[char] = strRot[j];
  //   j++;
  // }

  // let result = '';
  // for (let char of str) {
  //   if (reg.test(char)) { 
  //     result += char;
  //   } else {
  //     result += Alphabeth[char];
  //   }
  // }
  // return result;

  return str.split('').map(elem=>{
    const item=strRot[strEng.indexOf(elem)];
    return (item)? item : elem
  }).join('');
}

console.log('a'.charCodeAt(0))