import shuffleArray from '../../../Helpers/shuffleArray'

function startBubbleSort(array, callback) {
  array = shuffleArray(array);
  doBubbleSort(array, callback);
}

function doBubbleSort(array, callback) {
  array = [...array];
  let changed = false;

  for(let i=0; i<array.length; i++) {
    if(array[i] > array[i+1]) {
      [array[i], array[i+1]] = [array[i+1], array[i]];
      changed = true;
    }
  }

  if(changed) {
    callback(array)
    setTimeout(() => {
      doBubbleSort(array, callback);
    }, 1000);
  }
}

export default startBubbleSort;