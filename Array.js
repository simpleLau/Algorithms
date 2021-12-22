function CustomArray() {
  this.data = new Array(10);
  this.capacity = 10; // 动态数组数组真实长度
  this.length = 0; // 数组已存长度

  const resize = () => {
    const newValue = new Array(this.capacity);
    const len = this.length;
    for (let i = 0; i < len; i++) {
      newValue[i] = this.data[i];
    }
    this.data = newValue;
  };

  CustomArray.prototype.getCapacity = function () {
    return this.capacity;
  };

  CustomArray.prototype.isEmpty = function () {
    return this.length === 0;
  };

  CustomArray.prototype.get = function (index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Get failed. Index is illegal.");
    }

    return this.data[index];
  };

  CustomArray.prototype.push = function (item) {
    if (this.capacity <= this.length) {
      this.capacity = 2 * this.capacity;
      resize();
    }
    this.data[this.length] = item;
    this.length++;
  };

  CustomArray.prototype.insert = function (index, value) {
    if(index > this.length) {
        throw new Error("index is illegal");
    }

    if (this.capacity <= this.length) {
      this.capacity = 2 * this.capacity;
      resize();
    }
    const len = this.capacity;
    for (let i = len - 1; i >= index; i--) {
      if (i > index) {
        this.data[i] = this.data[i - 1];
      } else {
        this.data[i] = value;
      }
    }
    this.length++;
  };

  CustomArray.prototype.set = function (index, value) {
    this.data[index] = value;
  };

  CustomArray.prototype.contains = function (item) {
    const len = this.length;
    for (let i = 0; i < len; i++) {
      if (this.data[i] === item) return true;
    }
    return false;
  };

  CustomArray.prototype.remove = function (index) {
    if (this.length <= index || index < 0) {
      throw new Error("index is error");
    }
    const len = this.length;
    for (let i = index; i < len; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1] = undefined;
    this.length--;
    if (this.capacity / 4 >= this.length) {
      this.capacity = parseInt(this.capacity / 2);
      resize();
    }
  };
}

const arr = new CustomArray();
arr.push("a");
arr.push("c");
arr.push("d");
console.log("arrpush", arr);
arr.remove(0);
arr.remove(0);
console.log("arrremove", arr);
arr.insert(1, "b");
arr.insert(1, "e");
console.log("arrinsert", arr);
