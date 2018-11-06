class Stack{
    constructor(){
        this.stack1=[];
        this.stack2=[];
        this.stack3=[];
    }

    getLast(){
        if (this.stack3.length!==0) return this.stack3[this.stack3.length-1];
        if (this.stack2.length!==0) return this.stack2[this.stack2.length-1];
        if (this.stack1.length!==0) return this.stack1[this.stack1.length-1];
        return null;
    }

    Push(elem){
        if (this.stack1.length<10000) this.stack1.push(elem);
        if (this.stack2.length<20000) this.stack2.push(elem);
        if (this.stack3.length<30000) this.stack3.push(elem);
    };

    Pop(){
        if (this.stack1.length<10000) this.stack1.pop();
        if (this.stack2.length<20000) this.stack2.pop();
        if (this.stack3.length<30000) this.stack3.pop();
    };
}


function* depthTraversalTree(root) {
 
    let currentNode=root;
    let nextNode;
    // let stack=[];
    const stack=new Stack();

    let visitedNodes={};//obj with names of the visited nodes

    stack.Push(currentNode);

    yield currentNode;

    while (stack.length!==0){    
        
        if (currentNode.children){
            
            for (let i=0;i<currentNode.children.length;i++){
                const node=currentNode.children[i];
                if (!visitedNodes[node.n+""]){
                    nextNode=node;
                    break;
                }
            }

            if (nextNode){
                currentNode=nextNode;
                nextNode=null;
                yield currentNode;
            } else {
                stack.Pop();

                visitedNodes[currentNode.n+""]=1;
                // currentNode=stack[stack.length-1]
                currentNode=stack.getLast();
                continue;
            }
            stack.Push(currentNode);

        } else {
            stack.Pop();
            
            visitedNodes[currentNode.n+""]=1;
            // currentNode=stack[stack.length-1]
            currentNode=stack.getLast();
        }
    }
}




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


const MAX_NODE_COUNT = 1000;

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



for (const num of depthTraversalTree(node1)) {
    console.log(num.n);
}

// for (const num of depthTraversalTree_ver2(root2)) {
//     console.log(num.n);
// }



