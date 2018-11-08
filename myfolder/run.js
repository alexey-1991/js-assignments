

function* getPermutations(chars){
  const n=fact(chars.length);
  const array=chars.split('');

  for (let j=0;j<n;j++ ){
    yield nth_permutation(array,j);
  }
}


function nth_permutation(array, index) {
  let result='';
  let workArray=[].concat(array);
  const length=workArray.length;
  for (let i = 0; i < length; i++) {
      let item = index % workArray.length;
      index = Math.floor(index / workArray.length);
      result+=workArray[item];
      workArray.splice(item, 1);
  }
  return result;
}


function fact(n) {
  if (n===0 || n===1) return 1;
  return n * fact(n - 1);
}

for (let comb of getPermutations('abc')){
    console.log(comb);
}


