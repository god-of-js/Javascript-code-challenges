
// better implementation:
  function list( names ){
    return names.reduce(function(prev, curr, i, arr){
      return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
    }, '');
  }
  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))