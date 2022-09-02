// stack 
// last in first out
let arr = []
let arrSize = arr.length
let max = 5
const push = (newValue) =>{
    if(arrSize<=max){
        arr[arrSize] = newValue
        arrSize++
    }else{
        console.log('stack overflow')
    }
}

const pop = () =>{
    if(arrSize>0){
        arrSize--
        arr.length = arrSize
    }else{
        console.log('stack already empty')
    }
}

push(1)
push(2)
push(3)
push(4)
push(5)
push(6)
// push(4)
// push(5)
pop()
pop()
//console.log(arr)

// reverse string with stack

let stringArray = []
let stringArraySize = stringArray.length
const push1 = (newValue) =>{
    stringArray[stringArraySize] = newValue
    stringArraySize++
}
const pop1 = () =>{
    let lastRemoveItem = stringArray[stringArraySize-1]
    stringArraySize--
    stringArray.length =stringArraySize
    return lastRemoveItem
}

let string = 'hello'
let newStringArray = string.split('')

const reverseString = (arr) =>{
    for(let i = 0 ; i<arr.length; i++){
        push1(arr[i])
    }
    for(let i=0 ; i<arr.length; i++){
        arr[i] = pop1()
    }
}
reverseString(newStringArray)
// console.log(newStringArray)
// console.log(stringArray)



// queue
// fast in fast out

let queueArray = []
let queueArrayLength = queueArray.length
let maxSize = 5

const queuePush = (newValue) =>{
    if(queueArrayLength<=maxSize){
        queueArray[queueArrayLength] = newValue
        queueArrayLength++
    }else{
        console.log('stack overflow')
    }
}
const queuePop = () =>{
    if(queueArrayLength>0){
        for(let i = 0; i<queueArray.length; i++){
            queueArray[i] = queueArray[i+1]
            queueArrayLength--
            queueArray.length = queueArrayLength
        }

    }else{
        console.log('queue already empty')
    }
}

const front = ()=>{
    if(queueArrayLength>0){
        console.log(queueArray[0])
    }else{
        console.log('queue already empty')
    }
}
const rear = ()=>{

    if(queueArrayLength>0){
        console.log(queueArray[queueArray.length-1])
       
    }else{
        console.log('queue already empty')
    }
    
}


queuePush(1)
queuePush(2)
queuePush(3)
queuePush(4)
queuePush(5)
queuePush(6)
// queuePush(4)
// queuePush(5)
queuePop()
// front()
// rear()
// console.log(queueArray)


// linklist 
class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }

}

class Linklist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
       return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend (value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append (value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }

    insert (value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            let node = new Node(value) //
            let prev = this.head
            for(let i= 0 ; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
        

    }

    removeFrom (index){
        if(index<0 || index>this.size){
            return null
        }
        let removeNode ;
        if(index===0){
            removeNode= this.head
            this.head = this.head.next

        }else{
            let prev = this.head
            for(let i = 0 ; i<index-1 ; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head= this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !==value){
                prev=prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                removeNode.next = prev.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0 ;
        let current = this.head
        while(current){
            if(current.value==value){
                return i
            }
            current = current.next
            i++
        }
        return -1
    }
    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    print (){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let current = this.head
            let listValue = ''
            while(current){
                listValue += ` ${current.value}`
                current = current.next

            }
            console.log(listValue)
           
        }
    }
}

//const list = new Linklist()
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.prepend(20)
// list.prepend(10)
// list.prepend(30)
// list.append(40)
// list.append(50)
// list.append(60)
// list.insert(10,0)
// list.insert(20,1)
// list.insert(30,2)
// list.insert(40,3)

// list.print()

// list.removeFrom(0)
// console.log(list.removeValue(10))
// list.print()
// console.log(list.removeValue(20))
// console.log(list.search(20))
//console.log(list.search(40))
//console.log(list.search(60))
//list.reverse()
//list.print()




// hashtable

class HashTable{
    constructor(size){
        this.table= new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let i = 0 ; i<key.length; i++){
            total+= key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }
    result(){
       for(let i= 0 ;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
       }

    }
}

// let hashTable = new HashTable(20)
// hashTable.set('name','Rahim')
// hashTable.set('age',30)
//hashTable.result()
//console.log(hashTable.get('name'))
// hashTable.remove('age')
// hashTable.result()

// hashTable collisions

class HashTableCollision{

    constructor(size){
        this.table= new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let i = 0 ; i<key.length; i++){
            total+= key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = bucket.find((item)=> item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = value

            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)

            }
        }
    }

    result(){
        for(let i= 0 ;i<this.table.length;i++){
         if(this.table[i]){
             console.log(i,this.table[i])
         }
        }
 
     }

}


// let table = new HashTableCollision(50)
// table.set('name','Rahim')
// table.set('age',30)
// table.set('mane','hello')
//console.log(table.get('name'))
// table.remove('mane')
// table.result()

// binary search tree

class Node1{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        let newNode = new Node1(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left = newNode
            }else{
               this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        if(value===root.value){
            return true
        }else if(value<root.value){
          return  this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
// dfs
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    // bfs
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }if(current.right){
                queue.push(current.right)
            }
        }

    }

    // min&max value
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)

        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    // delete

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
           root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left&& !root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}

let bst = new BinarySearchTree()
//console.log('tree is empty?',bst.isEmpty())
bst.insert(20)
bst.insert(10)
bst.insert(30)
bst.insert(25)
bst.insert(40)
// console.log(bst.root)
// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,50))
// console.log(bst.search(bst.root,30))
// console.log(bst.search(bst.root,40))
//bst.preOrder(bst.root)
//bst.inOrder(bst.root)
//bst.postOrder(bst.root)
//bst.levelOrder()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.delete(10)
// bst.levelOrder()

// set method

const set = new Set([1,2,3])
set.add(4)
//console.log(set.has(5))

for(let item of set){
   // console.log(item)
}




// graph

class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) && 
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }

        for(let adjacentVertex in this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    removeEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].delete(vertex2) && 
            this.adjacencyList[vertex2].delete(vertex1)
        )
    }

    result(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->' + [...this.adjacencyList[vertex]])
        }
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
//graph.result()
// console.log(graph.hasEdge('A','B'))
// console.log(graph.hasEdge('A','C'))
//graph.removeEdge('A','B')
//graph.removeVertex('B')
//graph.result()













