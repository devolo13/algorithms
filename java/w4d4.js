
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

  /**
   * Class to represent a queue using an array to store the queued items.
   * Follows a FIFO (First In First Out) order where new items are added to the
   * back and items are removed from the front.
   */
  class Queue {
  
    constructor() {
      this.head = null;
    }
  
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(n) constant.
     * - Space: O(n) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
      const addNode = new Node(item)
  
      if(this.isEmpty()) {
        this.head = addNode
        return 1
      }
  
      let runner = this.head
      
      while(runner.next) {
        runner = runner.next
      }
  
      runner.next = addNode
  
      return this.size()
    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
      if(this.isEmpty()) {
        return null
      }
      
      const oldHead = this.head
      this.head = this.head.next
      return oldHead.data
    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
      if(this.isEmpty()) {
        return this.head
      }
  
      return this.head.data
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
      if(this.head === null) {
        return true
      } else {
        return false
      }
    }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(n) constant.
     * - Space: O(n) constant.
     * @returns {number} The length.
     */
    size() {
      let runner = this.head
      let count = 1
      while (runner.next) {
        runner = runner.next
        count++
      }
      return count
    }
  
  
    // Print
    print() {
      let runner = this.head;
      let vals = "";
  
      while (runner) {
        vals += `${runner.data}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(`Head: ${this.head.data}`)
      console.log(vals);
      return vals;
    }
  
    arrToQueue(arr){
      for(const item of arr){
        this.enqueue(item);
      }
    }
    
  }

/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
  constructor(data) {
    this.data = data;
    this.left = null; // a BSTNode with a smaller value
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * @param {Node} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
  toArrLevelorder(current = this.root) {
    if (current == null) {
      return [];
    }

    const queue = new Queue();
    const values = [];

    queue.enqueue(current);

    while (queue.isEmpty() === false) {
      const node = queue.dequeue();

      values.push(node.data);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    return values;
  }


  // HELPER METHOD
  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }

  insert(newVal) {
    const node = new BSTNode(newVal);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (newVal <= current.data) {
        if (current.left === null) {
          current.left = node;
          return this;
        }

        current = current.left;
      } else {
        // newVal is greater than current.data
        if (current.right === null) {
          current.right = node;
          return this;
        }

        current = current.right;
      }
    }
  }



}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree
  .insert(10)
  .insert(5)
  .insert(2)
  .insert(8)
  .insert(15)
  .insert(20)
  .insert(13)

threeLevelTree.print()
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

console.log(threeLevelTree.toArrLevelorder())
const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);

