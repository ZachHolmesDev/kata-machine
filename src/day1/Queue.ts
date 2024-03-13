interface INode<T> {
    value: T,
    next?: INode<T>,
}



export default class Queue<T> {
    public length: number;
    private head?: INode<T>; 
    private tail?: INode<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const nodeToInsert = {value: item} as INode<T>
        // update length as new node incomming 
        this.length++
        
        // check for tail
        if (!this.tail) {
            // if no tail then we are inserting first node 
            // with next undefined as it is the only node 
            this.tail = this.head = nodeToInsert
            return
        }

        // add new node to the current tail node 
        this.tail.next = nodeToInsert
        // now point tail to the new tail
        this.tail = nodeToInsert
}


    deque(): T | undefined {
        // check for head
        if (!this.head) {
            return undefined
        }
        // update length cause we are dropping node
        this.length--
        
        // save current head
        const headToRetun = this.head
        // update que head to next head inline
        this.head = this.head.next
        // in non garbage collected langs this is where mem would be freed
        headToRetun.next = undefined // mock free mem
        if (this.length === 0) {
            this.tail = undefined
        }

        return headToRetun.value
}


    peek(): T | undefined {
        // optional chaining operator (?.) checks if head is undefined|null 
        // and returns undefined else get value and return the value 
        return this.head?.value
}
}