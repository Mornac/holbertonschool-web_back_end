export default function appendToEachArrayValue(array, appendString) {
    const value = array[idx];
    let appendString = "";
    for (let idx of value) {    
        appendString += idx;
    }

  return array;
}
