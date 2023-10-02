function countZeroes(arr) {
    function binarySearch(low, high) {
      if (low <= high) {
        const mid = Math.floor((low + high) / 2);
  
        if (arr[mid] === 0) {
          if (mid === 0 || arr[mid - 1] === 1) {
            return arr.length - mid;
          } else {
            return binarySearch(low, mid - 1);
          }
        } else {
          return binarySearch(mid + 1, high);
        }
      }
      return 0;
    }
  
    return binarySearch(0, arr.length - 1);
  }
  
module.exports = countZeroes