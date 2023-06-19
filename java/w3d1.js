/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    if (this.heap[1] !== undefined){
      return this.heap[1];
    }
    return null;
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    let index = this.heap.length;
    this.heap[this.heap.length] = num;
      while(this.heap[index] < this.heap[Math.floor(index/2)]){
        if (this.heap[index] == null || this.heap[Math.floor(index/2)] == null){
          break;
        }
        let temp = this.heap[Math.floor(index/2)];
        this.heap[Math.floor(index/2)] = this.heap[index];
        this.heap[index] = temp;
        index = Math.floor(index/2);
      }
    return this;
  }

  /**
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }
    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );
    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}

let h = new MinHeap();
h.insert(8).insert(6).insert(7).insert(5).insert(3).insert(0).insert(9);

let l = new MinHeap();
console.log(l.top());
