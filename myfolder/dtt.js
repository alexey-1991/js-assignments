function* depthTraversalTree(root) {

  let chain=[root];
  let current=chain[0];
  let index=0;
  yield current;

  while(current.children){

    current=current.children[index];
    chain.push(current);

    yield current;



    //moving up to find node with childrens
    let j=0;//index for iterate childrens
    while(!current.children){
      chain=chain.slice(0,-1);

      current=chain[chain.length-1];
      current.children=null;

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
