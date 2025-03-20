function myEach(collection, callback) {
  if (Array.isArray(collection)) {
      collection.forEach(callback);
  } else {
      Object.values(collection).forEach(callback);
  }
  return collection;
}

function myMap(collection, callback) {
  if (Array.isArray(collection)) {
      return collection.map(callback);
  } else {
      return Object.values(collection).map(callback);
  }
}

function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  if (acc === undefined) {
      acc = values[0];
      values.slice(1).forEach(val => acc = callback(acc, val, collection));
  } else {
      values.forEach(val => acc = callback(acc, val, collection));
  }
  return acc;
}

function myFind(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  return values.find(predicate);
}

function myFilter(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  return values.filter(predicate);
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
  return n ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
  return n ? array.slice(-n) : array[array.length - 1];
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

module.exports = { myEach, myMap, myReduce, myFind, myFilter, mySize, myFirst, myLast, myKeys, myValues };
