class LinkedList {
    start = null

    append(value) {
        if (this.start === null) {
            this.start = new Node();
            this.start.value = value;
        } else {
            let tmp = this.start;
            while (tmp.next !== null) {tmp = tmp.next}
            tmp.next = new Node();
            tmp.next.value = value;
        }
    }

    prepend(value) {
        let storeList = this.start;
        this.start = new Node();
        this.start.value = value;
        this.start.next = storeList;
    }
    
    size() {
        let count = 0;
        let tmp = this.start;
        tmp === null ? count : count++
        while (tmp.next !== null) {
            count++;
            tmp = tmp.next
        }
        return count;
    }

    head() {
        return this.start;
    }

    tail() {
        let tmp = this.start;
        while (tmp.next !== null) {
            tmp = tmp.next;
            if(tmp.next === null) {return tmp}
        }
    }

    at(index) {
        let i = 0;
        let tmp = this.start;
        while (tmp.next !== 0) {
            if (i === index) {
                return tmp;
            }
            i++
            tmp = tmp.next;
        }
    }

    pop() {
        let cur = this.start;
        let prev = null;
        while (cur.next !== null) {
            prev = cur;
            cur = cur.next;
            if (cur.next === null) {
                prev.next = null;
            }
        }
    }

    contains(val) {
        let tmp = this.start;
        if (tmp.value === val) {return true}
        while (tmp.next !== null) {
            tmp = tmp.next
            if (tmp.value === val) { return true; }
            if (tmp.next === null && tmp.value !== val) { return false; }
        }
    }

    find(val) {
        let tmp = this.start;
        let i = 0;
        if (tmp.value === val) {return i};
        while (tmp.next !== null) {
            i++;
            tmp = tmp.next;
            if (tmp.value === val) { return i };
            if (tmp.next === null && tmp.value !== val) { return null; };
        }
    }

    toString() {
        let tmp = this.start;
        let output = '';
        output = output + `( ${tmp.value} ) -> `
        while (tmp.next !== null) {
            tmp = tmp.next;
            output = output + `( ${tmp.value} ) -> `
        }
        output = output + 'null'
        return output;
    }

    insertAt(value, index) {
        let i = 0;
        let cur = this.start;
        if (index === 0) {
            this.start = new Node();
            this.start.value = value;
            this.start.next = cur;
            return
        }
        while (cur.next !== null) {
            i++
            if (i === index) {
                let storeList = cur.next;
                cur.next = new Node();
                cur.next.value = value;
                cur.next.next = storeList;
                return
            }
            cur = cur.next;
        }
        let storeList = cur.next;
        cur.next = new Node();
        cur.next.value = value;
        cur.next.next = storeList;
    }

    removeAt(index) {
        if (index === 0) {
            this.start = this.start.next; return;
        }
        let i = 0;
        let cur = this.start;
        let prev = null;
        while(cur.next !== null) {
            if (i === index) {
                prev.next = cur.next;
                return;
            }
            i++;
            prev = cur;
            cur = cur.next;
        }
        prev.next = cur.next;
    }
}

class Node {
    value = null
    next = null
}

let list = new LinkedList()
