function Set() {
  this.items = {};
  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  };

  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };

  Set.prototype.remove = function (value) {
    if (!this.has(value)) {
      return false;
    }
    delete this.items[value];
    return true;
  };

  Set.prototype.clear = function () {
    this.items = {};
  };

  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  };

  Set.prototype.values = function () {
    return Object.keys(this.items);
  };

  // 交集
  Set.prototype.union = function (otherSet) {
    let unionSet = new Set();
    const addSet = (set, unionSet) => {
      set = set.values();
      let len = set.length;
      for (let i = 0; i < len; i++) {
        unionSet.add(set[i]);
      }
      return unionSet;
    };
    unionSet = addSet(this, unionSet);
    unionSet = addSet(otherSet, unionSet);
    return unionSet;
  };

  Set.prototype.intersection = function (otherSet) {
    let intersectionSet = new Set();
    let values = this.values();
    let len = values.length;
    for (let i = 0; i < len; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  Set.prototype.difference = function (otherSet) {
    const differenceSet = new Set();
    let values = this.values();
    let len = values.length;
    for (let i = 0; i < len; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  Set.prototype.subset = function (otherSet) {
    let values = this.values();
    let len = values.length;
    for (let i = 0; i < len; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  };
}

const s = new Set();
s.add(1);
s.add(2);
s.add(2);
s.add(3);
s.add(1);
console.log(s.remove(1));
console.log(s);
console.log(s.size());

const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
const s2 = new Set();
s2.add("a");
s2.add("b");
s2.add("c");
s2.add(1);
s2.add(2);
console.log(s1.union(s2));

console.log(s1.intersection(s2).values());
console.log(s2.difference(s1).values());
console.log(s1.subset(s2));
s2.add(3);
console.log(s1.subset(s2));

console.log("ab".charCodeAt());
