/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res=head.val;
    let curr=head.next
    while(curr){
        res=res*2+curr.val
        curr=curr.next
    }
    return res
    
};
