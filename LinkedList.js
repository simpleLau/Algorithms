function LinkedList() {
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  // 属性
  this.head = null;
  this.length = 0;

  // 追加元素
  LinkedList.prototype.append = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  };

  LinkedList.prototype.toString = function () {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    return str;
  };

  // 插入
  LinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let prevNode = null;
      while (index < position) {
        prevNode = current;
        current = current.next;
        index += 1;
      }
      prevNode.next = newNode;
      newNode.next = current;

      this.length += 1;
    }
    return true;
  };

  /**
   * 下标获取
   */
  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let index = 0;
    let current = this.head;
    // index++ : index在下一行赋值
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  };

  // 下标搜索
  LinkedList.prototype.indexOf = function (data) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (data === current.data) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  };

  // 修改data
  LinkedList.prototype.update = function (position, data) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  };

  // 根据位置删除元素
  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let current = this.head;
      let prevNode = null;
      while (index++ < position) {
        prevNode = current;
        current = current.next;
      }
      prevNode.next = current.next;
    }
    this.length -= 1;
    return true;
  };

  // 删除元素
  LinkedList.prototype.remove = function (data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length -= 1;
      return true;
    }
    let current = this.head;
    let prevNode = null;
    while (current) {
      if (current.data === data) {
        prevNode.next = current.next;
        this.length -= 1;
        return true;
      }
      prevNode = current;
      current = current.next;
    }
    return false;
  };

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  LinkedList.prototype.size = function () {
    return this.length
  };
}

const linkList = new LinkedList();
linkList.append(0);
linkList.append(20);
linkList.append(30);
linkList.append(40);

linkList.insert(1, 10);
linkList.insert(5, 50);

// console.log(linkList.toString());

// console.log(linkList.get(0));
// console.log(linkList.get(3));
// console.log(linkList.get(5));

// console.log(linkList.indexOf(10));
// console.log(linkList.indexOf(20));
// console.log(linkList.indexOf(60));

// linkList.update(0, "update");
// linkList.update(5, "test");
// console.log(linkList.get(5));

// linkList.removeAt(3);
// linkList.removeAt(4);
// console.log(linkList.toString());

// linkList.remove(20);
// linkList.remove(0);
// console.log(linkList.toString());

// console.log(linkList.size());
// console.log(linkList.isEmpty());