export default function hasValuesFromArray(set, array) {
  const setFromArray = new Set(array);
  for (const item of setFromArray) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}