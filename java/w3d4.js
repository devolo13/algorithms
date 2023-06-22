class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    let node = new Node(data);
    node.next = this.head;
    if (this.head !== null){
      this.head.prev = node;
    }
    if (this.tail == null){
      this.tail = node;
    }
    this.head = node;
    this.size ++;
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    let node = new Node(data);
    node.prev = this.tail;
    if (this.tail !== null){
     this.tail.next = node; 
    }
    if (this.head == null){
      this.head = node;
    }
    this.tail = node;
    this.size ++;
    return this;
  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    const middle = Math.floor(this.size/2);
    let current = this.head;
    for (let i = 0; i < middle; i++){
      current = current.next;
    }
    current.next.prev = current.prev;
    current.prev.next = current.next;
    return current.data;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();
console.log("test");
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
let unorderedList = new DoublyLinkedList().insertAtBackMany([
  -5,
  -10,
  4,
  -3,
  6,
  1,
  -7,
  -2,
]);

unorderedList.removeMiddleNode();

