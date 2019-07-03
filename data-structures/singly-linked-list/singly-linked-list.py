

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def Node(self, value):
        class NODE:
            def __init__(self, value):
                self.value = value;
                self.next = None;

        return NODE(value)
    

    def push(self, value):
        new_node = self.Node(value)
        # case if list is empty
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

        self.length = self.length + 1
        return self
        

    def pop(self):
        old_tail = self.tail
        if not self.head:
            return None
        elif self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            node = self.head
            while node.next != self.tail:
                node = node.next
            
            self.tail = node
            self.tail.next = None

        self.length = self.length - 1
        return old_tail

    def unshift(self, value):
        new_node = self.Node(value)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        
        self.length = self.length + 1
        return self;

    def shift(self):
        old_head = self.head
        if not self.head:
            return None
        elif self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
        
        self.length = self.length - 1
        return old_head



new_list = SinglyLinkedList()

new_list.push("h")
new_list.push("ha")
new_list.push("hah")
new_list.push("haha")
new_list.pop()
new_list.pop()
new_list.unshift("a")
new_list.shift()

print(new_list.head.next.value)
