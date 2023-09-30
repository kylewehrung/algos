class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current !== null) {
      // Store the next node.
      next = current.next;
  
      // Reverse the current node's next pointer.
      current.next = prev;
  
      // Move pointers one step forward.
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  // Sample linked list
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  // Reverse the linked list.
  const reversedHead = reverseLinkedList(head);
  
  // Log the reversed linked list.
  let current = reversedHead;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  
  