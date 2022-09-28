class Node {
  constructor(val = null) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
    constructor(...arr) {
        this.head = new Node();
        for (let i of arr)
            this.append(i)
        
    }
  
    append(val) {
        let node = new Node(val);
        if (this.head.value == null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    prepend(val) {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }
    size() {
        let n = 0;
        let current = this.head;
        while (current) {
            n++;
            current = current.next;
        }
        return n;
    }
    getHead() {
        return this.head.value;
    }
    getTail() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.value;
    }
    at(i) {
        if (i < this.size()) {
            let current = this.head;
            while (i--) {
                current = current.next;
            }
            return current.value;
        }
        else
            return "provide a valid index";
    }
    pop() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    contains(val) {
        let current = this.head;
        while (current) {
            if (current.value == val)
                return true;
            current = current.next;
        }
        return false;
    }
    find(val) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (current.value == val) return i;
            current = current.next;
            i++;
        }
        return null;
    }
    toString() {
        let current = this.head;
        let res = ""
        while (current) {
             
            res += `( ${current.value} ) -> `;
            current = current.next;
        }
        res += " null ";
        return res;
    }

    insertAt(val, i) {
        if (i == 0) {
            this.prepend(val);
            return;
        }
        let current = this.head;
        let node = new Node(val);
        
        while (i != 1) {                   // stop iteration 1 node before the insert index
            current = current.next;
            i--;
        }
        node.next = current.next;
        current.next = node;
        
    }

    removeAt(i) {
        if (i < 0 || i >= this.size()) {
           
            return "provide valid index";

       }
            if (i == 0) {
                this.head = this.head.next;
            }
            else {
                let current = this.head;
                while (i != 1) {
                    current = current.next;
                    i--;
                }
                current.next = current.next.next;
            }
      
        }
       
       

    
}

let list = new LinkedList(1,2,3,4,5);
console.log(list.toString())

