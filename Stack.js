/**
 * 手动封装栈类
 */
function Stack() {
  this.items = [];
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };

  Stack.prototype.pop = function () {
    return this.items.pop();
  };

  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  Stack.prototype.isEmpty = function() {
      return this.items.length === 0
  }

  Stack.prototype.size = function() {
      return this.items.length
  }

  Stack.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  };
}

const s = new Stack();
s.push(20);
s.push(30);
s.push(40);
console.log(s.items);
s.pop();
console.log(s.items);
console.log(s.size());
console.log(s.peek());
console.log(s.toString());