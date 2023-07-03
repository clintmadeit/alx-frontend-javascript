/* Complete the function cleanSet that takes a Set and a string 
as arguments and returns a string.*/
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const result = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return result.join('-');
}