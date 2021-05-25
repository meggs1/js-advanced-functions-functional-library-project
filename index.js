const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let values = !collection.isArray ? Object.values(collection) : collection.slice(0)
      for (let i = 0; i < values.length; i++) {
        callback(values[i], i, values)
    }
    return collection
    },

    map: function(collection, callback) {
      let values = !collection.isArray ? Object.values(collection) : collection.slice(0)
      let newArray = []
      for (let i = 0; i < values.length; i++){
        newArray.push(callback(values[i], i, values))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let c = collection.slice(0)
      if(!acc) {
        acc = c[0]
        c = c.slice(1)
      }
      for (let i = 0; i < c.length; i++){
        acc = callback(acc, c[i], c)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (let e of collection) {
        if (predicate(e)) newArray.push(e)
      }
      return newArray
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n) {
      return n ? collection.slice(0, n) : collection[0]
    },

    last: function(collection, n) {
      return n ? collection.slice(-n) : collection[collection.length -1]
    },

    compact: function(collection) {
      const truthyArray = []
      for(let i = 0; i < collection.length; i++){
        if(!!collection[i]) truthyArray.push(collection[i])
      }
      return truthyArray
    },

    sortBy: function(collection, callback) {
      const newArray = [...collection]
      return newArray.sort((a, b) => callback(a) - callback(b)) 
    },

    flatten: function (array, shallow = false) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
          if (!Array.isArray(array[i])) {
              newArray.push(array[i])
          } else if (!shallow) {
              newArray = newArray.concat(this.flatten(array[i], false))
          } else {
              newArray = newArray.concat(array[i])
          }
      }
      return newArray
  },

  uniq: function(array, isSorted, callback) {
    if (!!isSorted) {
      const newArray = []
      for (let i = 0; i < array.length; i++) {
        if (i === 0 || array[i] !== array[i - 1]) {
          newArray.push(array[i])
        }
      }
      return newArray
    }
    else if (!!callback) {
      const callbackArray = array.map(callback)
      return array.filter((value, index) => {
        return callbackArray.indexOf(callback(value)) === index
      })
    }
    else {
      return array.filter((value, index) => {
        return array.indexOf(value) === index
      })
    }
  },

  keys: function(object) {
    return Object.keys(object)
  },

  values: function(object) {
    return Object.values(object)
  },


  functions: function(object) {
      const functionArray = []
      for (let key in object) {
        if (typeof object[key] === "function") functionArray.push(key)
      }
      return functionArray
    },


  }
})()

fi.libraryMethod()
