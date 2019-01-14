function map(array,transform) {
  var mapped = [];
  for (let i = 0; i < array.length;i++)
    mapped.push(transform(array[i]));
  return mapped;
}