// Your code here

function mapToNegativize(items) {
  return items.map( item => -item )
}
// mapToNoChange(sourceArray)

function mapToNoChange(items) {
  return items.map(item => item)
}
// mapToDouble(sourceArray)

function mapToDouble(items) {
  return items.map( item => item * 2)
}
// mapToSquare(sourceArray)

function mapToSquare(items) {
  return items.map( item => item * item)
}



// reduceToTotal(sourceArray, startingPoint)

function reduceToTotal(items, memo = 0) {
  return items.reduce((memo, item) => memo += item)
}

// reduceToAllTrue(sourceArray)

function reduceToTrue(items) {
  for (const item of items) {
    if (!item) {
      return false
    }
  }
  return true
}
// reduceToAnyTrue(sourceArray)

function reduceToAnyTrue (items) {
  for (const item of items) {
    if (item) {
      return true
    }
  }
  return false
}