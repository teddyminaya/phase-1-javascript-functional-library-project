// myEach implementation
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }

  // myMap implementation

  function myMap(collection, callback) {
    const result = Array.isArray(collection) ? [] : {};
    myEach(collection, (val, key) => {
      result[key] = callback(val, key, collection);
    });
    return result;
  }

// myReduce implementation
function myReduce(collection, callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : collection[0];
    let start = initialValue !== undefined ? 0 : 1;
    myEach(collection.slice(start), (val, key) => {
      acc = callback(acc, val, key + start, collection);
    });
    return acc;
  }
  