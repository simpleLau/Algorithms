/**
 * 正常情况下用二维数组就可以实现hash表了，但是由于存在hash冲突的情况，所以需要实现三维数组这样才能完成
 * hash表结构： [[[key,value],[key,value]]]
 */
function HashTable() {
  this.storage = [];
  this.count = 0;
  this.limit = 7;

  const isPrime = (num) => {
    const temp = parseInt(Math.sqrt(num));
    for (let i = 2; i <= temp; i++) {
      if (num % i === 0) {
        return true;
      }
    }
    return false;
  };

  const getTuple = (index, key) => {
    let bucket = this.storage[index];
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple;
      }
    }
    return [];
  };

  // 重新生成大小
  const resize = (newLimit) => {
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;
    const len = oldStorage.length;
    for (let i = 0; i < len; i++) {
      const bucket = oldStorage[i];
      if (bucket == null) {
        continue;
      }
      let len = bucket.length;
      for (let j = 0; j < len; j++) {
        const tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  };

  // 获取哈希值
  HashTable.prototype.hushFunc = function (str, size) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    let index = hashCode % size;
    return index;
  };

  // 添加或修改
  HashTable.prototype.put = function (key, value) {
    if (this.limit * 0.75 < this.count) {
      const newSize = this.getPrime(this.limit * 2);
      resize(newSize);
    }
    let index = this.hushFunc(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // hash表修改数据
    const tuple = getTuple(index, key);
    if (tuple.length) {
      tuple[1] = value;
      return;
    }

    // hash表添加数据
    bucket.push([key, value]);
    this.count += 1;
  };

  // 获取哈希值
  HashTable.prototype.get = function (key) {
    let index = this.hushFunc(key, this.limit);
    const bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }

    const tuple = getTuple(index, key);
    return tuple[1];
  };

  // 移除
  HashTable.prototype.remove = function (key) {
    let index = this.hushFunc(key, this.limit);
    const bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }
    for (var i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i);
        this.count -= 1;
        if (this.limit > 7 && this.limit / 4 > this.count) {
          const newSize = this.getPrime(Math.floor(this.limit / 2));
          resize(newSize);
        }
        return tuple[1];
      }
    }
    return null;
  };

  // 获取质数
  HashTable.prototype.getPrime = function (num) {
    while (isPrime(num)) {
      num++;
    }
    return num;
  };
}

let ht = new HashTable();
ht.put("abc", 123);
ht.put("nba", 321);
ht.put("mba", 521);
ht.put("cba", 520);
ht.put("cba1", 520);
ht.put("cba2", 520);
ht.put("cba3", 520);
ht.put("cba4", 520);
ht.put("cba5", 520);
ht.put("cba6", 520);
ht.put("cba7", 520);
ht.put("cba8", 520);
ht.put("cba9", 520);
ht.put("cba19", 520);
ht.put("cba29", 520);
ht.put("cba39", 520);
ht.put("cba49", 520);
ht.put("cba59", 520);
console.log(ht.get("mba"));
ht.put("mba", 666);
console.log(ht.get("mba"));
ht.remove("mba");
ht.remove("cba1");
ht.remove("cba2");
// ht.remove("cba3");
// ht.remove("cba4");
// ht.remove("cba5");
// ht.remove("cba6");
// ht.remove("cba7");
// ht.remove("cba8");
// ht.remove("cba9");
console.log(ht.get("mba"));
console.log(ht.storage);
console.log(ht.count);
console.log(ht.limit);
