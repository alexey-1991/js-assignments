function nth_permutation(array, index, size) {
  let result=[]
  for (let i = 0; i < size; i++) {
      let item = index % array.length;
      index = Math.floor(index / array.length);
      result+=array[item];
      array.splice(item, 1);
  }
  return result;
}