class Stack {
  constructor(numBlocks, maxLength) {
    this.maxLength = maxLength;
    this.numBlocks = (numBlocks) ? numBlocks : 1;
    for (let i = 1; i <= this.numBlocks; i++) {
      const nameBlock = `stack${i}`;
      this[nameBlock] = [];
    }

  }

  get() {
    for (let i = this.numBlocks; i >= 1; i--) {
      const nameBlock = `stack${i}`;
      if (this[nameBlock].length) {
        return this[nameBlock][this[nameBlock].length - 1];
      }
    }

  }
  isEmpty() {
    for (let i = 1; i <= this.numBlocks; i++) {
      const nameBlock = `stack${i}`;
      if (this[nameBlock].length) return false;
    }
    return true;
  }
  add(elem) {
    for (let i = 1; i <= this.numBlocks; i++) {

      const nameBlock = `stack${i}`;
      if (this[nameBlock].length < this.maxLength) {
        return this[nameBlock].push(elem);
      }
    }
  }
  remove() {
    for (let i = this.numBlocks; i >= 1; i--) {

      const nameBlock = `stack${i}`;
      if (this[nameBlock].length) {
        return this[nameBlock].pop();
      }
    }
  }
}

function* depthTraversalTree(root) {


  let currentNode=root;
  let nextNode;

  let stack=[];
  stack.push(currentNode);
  yield currentNode;

  while(stack.length!==0){

    if (currentNode.children){

      for(let i=0;i<currentNode.children.length;i++){
        if (!currentNode.children[i].visited){
          nextNode=currentNode.children[i];
          break;
        }
      }

      if (nextNode){

        currentNode=nextNode;
        nextNode=null;
        stack.push(currentNode);
        yield currentNode;

      } else {
        currentNode.visited=true;

        stack.pop();
        currentNode=stack[stack.length-1];
        nextNode=null;
      }

    } else {
      currentNode.visited=true;

      stack.pop();
      currentNode=stack[stack.length-1];
      nextNode=null;
    }

  }
}
function* depthTraversalTree2(root) {

  const visitedNodes = {};

  let currentNode = root;
  let nextNode;
  let index;

  let stack = [];
  stack.push(currentNode);
  yield currentNode;

  while (true) {

    if (currentNode.children) {

      for (let i = 0; i < currentNode.children.length; i++) {
        if (!visitedNodes[currentNode.children[i].n + '']) {
          nextNode = currentNode.children[i];
          break;
        }
      }

      if (nextNode) {

        currentNode = nextNode;
        nextNode = null;
        stack.push(currentNode);
        yield currentNode;

      } else {
        visitedNodes[currentNode.n + ''] = 1;

        index = stack.length - 1;
        while (true) {

          if (stack[index]) {

            if (currentNode.n === stack[index].n) {
              stack[index] = null;
              index--;
              if (index < 0) return;
              continue;
            }

            currentNode = stack[index];
            break;
          }
          index--;
        }
        nextNode = null;
      }

    } else {
      visitedNodes[currentNode.n + ''] = 1;

      index = stack.length - 1;
      while (true) {

        if (stack[index]) {

          if (currentNode.n === stack[index].n) {
            stack[index] = null;
            index--;
            if (index < 0) return;
            continue;
          }

          currentNode = stack[index];
          break;
        }
        index--;
      }
      nextNode = null;
    }
  }
}
function* depthTraversalTreeFloatStack(root) {

  const visitedNodes = {};

  let currentNode = root;
  let nextNode;

  const stack = new Stack(10, 10000);
  stack.add(currentNode);

  yield currentNode;

  while (!stack.isEmpty()) {

    if (currentNode.children) {

      for (let i = 0; i < currentNode.children.length; i++) {
        if (!visitedNodes[currentNode.children[i].n + '']) {
          nextNode = currentNode.children[i];
          break;
        }
      }

      if (nextNode) {

        currentNode = nextNode;
        nextNode = null;
        stack.add(currentNode);
        yield currentNode;

      } else {
        visitedNodes[currentNode.n + ''] = 1;

        stack.remove();
        currentNode = stack.get();
        nextNode = null;
      }

    } else {
      visitedNodes[currentNode.n + ''] = 1;

      stack.remove();
      currentNode = stack.get();
      nextNode = null;
    }
  }
}

//----------------------------------
const node1 = { n: 1 };
const node2 = { n: 2 };
const node3 = { n: 3 };
const node4 = { n: 4 };
const node5 = { n: 5 };
const node6 = { n: 6 };
const node7 = { n: 7 };
const node8 = { n: 8 };
node1.children = [node2, node6, node7];
node2.children = [node3, node4];
node4.children = [node5];
node7.children = [node8];



const MAX_NODE_COUNT = 100000;
function createDeepTree() {
  let root = { n: MAX_NODE_COUNT };
  for (let i = MAX_NODE_COUNT - 1; i > 0; i--) {
    root = { n: i, children: [root] };
  }
  return root;
}
function createWideTree() {
  const root = { n: 1, children: [] };
  for (let i = 2; i <= MAX_NODE_COUNT; i++) {
    root.children.push({ n: i });
  }
  return root;
}

const root1 = createDeepTree();
const root2 = createWideTree();

function DTT(root, func) {
  for (const num of func(root)) {
    console.log(num.n)
  }
}

// for (const num of depthTraversalTree2(node1)) {
//   console.log(num.n)
// }

for (const num of depthTraversalTree2(root2)) {
  console.log(num.n)
}
