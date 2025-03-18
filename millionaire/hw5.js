// Lesson 5 H/A 1

class BaseStorage {
    constructor(maxSize = 10) {
        if (typeof maxSize !== 'number' || maxSize <= 0) {
            throw new Error('Please, enter a valid number');
        }

        this.storage = [];
        this.maxSize = maxSize;
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    toArray() {
        return this.storage.slice();
    }
}

// part 2

class Stack extends BaseStorage {
    constructor(maxSize = 10) {
        super(maxSize);
    }

    push(item) {
        if (this.storage.length >= this.maxSize) {
            throw new Error('Storage is full');
        }
        this.storage.push(item);
    }

    pop() {
        if (this.storage.length === 0) {
            throw new Error('Stack is empty');
        }
        return this.storage.pop();
    }

    peek() {
        if (this.storage.length === 0) {
            return null;
        }
        return this.storage[this.storage.length - 1];

    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Not an iterable');
        }
        const stack = new Stack(iterable.length);
        for (const item of iterable) {
            stack.push(item);
        }
        return stack;
    }
}

// part 3

class Queue extends BaseStorage {
    constructor(maxSize) {
        super(maxSize);
    }

    push(item) {
        if (this.storage.length >= this.maxSize) {
            throw new Error('Storage is full');
        }
        return this.storage.push(item);
    }

    shift() {
        if (this.storage.length === 0) {
            throw new Error('Queue is empty');
        }
        return this.storage.shift();
    }

    peek() {
        if (this.storage.length === 0) {
            return null;
        }
        return this.storage[0];

    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Not an iterable');
        }
        const queue = new Queue(iterable.length);
        for (const item of iterable) {
            queue.push(item);
        }
        return queue;
    }
}