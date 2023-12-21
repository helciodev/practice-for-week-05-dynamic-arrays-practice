class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    const newArr = [val];
    for (let i = 0; i < this.data.length; i++) {
      newArr[i + 1] = this.data[i];
    }
    this.length++;
    this.data = newArr;
  }
}

module.exports = DynamicArray;
