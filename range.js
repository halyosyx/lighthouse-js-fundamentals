const range = function(start, end , step)
{
  let initRangeArray = [];
  let rangeArray = [];

  if (step <= 0 || start > end) {
    return [];
  }
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }

  for (let i = start; start <= end; start++) {
    initRangeArray.push(start);
  }

  for (let i = 0; i < initRangeArray.length; i++) {

    if (initRangeArray[i] % step === 0) {
      rangeArray.push(initRangeArray[i]);
    }
    
  }

  return rangeArray;

}

console.log(range(-9, 3, 3));