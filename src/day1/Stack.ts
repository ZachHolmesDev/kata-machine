interface INode<T> {
    value:T,
    previous?:INode<T>,
}


export default class Stack<T> {
    public length: number;
    private head?:INode<T>;

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const newNode = {value: item} as INode<T>;
        this.length++
        
        // if head undefined add new node to head 
        if (!this.head) {
            this.head = newNode
            return
        }
        // link new node to current head 
        newNode.previous = this.head
        // change head to point to the new head 
        this.head = newNode
    }
    
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)
        const head = this.head as INode<T>

        if (this.length === 0) {
            this.head = undefined
            return head?.value
        }
        
        // point head to previous element
        this.head = head.previous

        // free mem in other lang here 

        return head.value
    }

    peek(): T | undefined {
        // if head return head if not return undefined 
        return this.head?.value
    }
}