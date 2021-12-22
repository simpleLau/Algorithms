/**
 * 优先级队列
 */
function PriorityQueue() {
  this.items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  PriorityQueue.prototype.enqueue = function (element, priority) {
    const queueElement = new QueueElement(element, priority);
    const items = this.items;
    if (
      items.length === 0 ||
      items[items.length - 1].priority < queueElement.priority
    ) {
      items.push(queueElement);
    } else {
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (element.priority > queueElement.priority) {
          items.splice(i, 0, queueElement);
          break;
        }
      }
    }
  };

  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };

  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };

  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };

  PriorityQueue.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      resultString += item.element + "-" + item.priority + " ";
    }
    return resultString;
  };
}

const pq = new PriorityQueue();
pq.enqueue("abc", 100);
pq.enqueue("nbc", 200);
pq.enqueue("cbc", 50);
pq.enqueue("bbc", 1);
console.log(pq.toString());
