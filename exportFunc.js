var list = [];

function addToList(num) {
  list.push(num)
  return list
}

function sortList() {
  return list.sort((a,b) => { return a - b })
}

module.exports = {
  addToList: addToList,
  sortList: sortList
}

// module.exports = { addToList }