function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

function getLast() {
  return ' is okay';
}

function taskNext() {
  let combination = 'I prefer let when I must.';
  combination += getLast();

  return combination;
}