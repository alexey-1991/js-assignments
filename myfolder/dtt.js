function* depthTraversalTree_ver2(root) {
 
  let currentNode=root;
  let nextNode;

  let visitedNodes={};//obj with names of the visited nodes
  let yielded={};//obj with obj when they are yielded;

  yield currentNode;

  while (!visitedNodes["1"]){    
      
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

              if (!yielded[currentNode.n+""]){
                  yield currentNode;
                  yielded[currentNode.n+""]=1;
              }
              
          } else {
              visitedNodes[currentNode.n+""]=1;
              currentNode=root;
              continue;
          }

      } else {
          visitedNodes[currentNode.n+""]=1;
          currentNode=root;
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
node3.children = [node7];
node4.children = [node5];
node7.children = [node8];



for (let node of depthTraversalTree(node2)){
  console.log(node);
}

//
// for (let i=0;i<chain[0].children.length;i++){
//   chain.push(chain[0].children[i])
// }
