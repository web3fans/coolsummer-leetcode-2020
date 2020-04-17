/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if(l1 && !l2) return l1;
  if(l2 && !l1) return l2;

  var temp = new ListNode(0);
  var cnt = 0, sum = 0;
  var res = temp;
  var x = 0;
  var y = 0;
  while(l1 || l2){
      x = 0;
      y = 0;
      if(l1){
          x = l1.val;
      }
      if(l2){
          y = l2.val;
      }
      sum = x + y + cnt;
      if(sum > 9){
          cnt = parseInt(sum / 10);
          sum = sum - 10;
      }else{
          cnt = 0;
      }
      temp.next = new ListNode(sum);
      temp = temp.next;
      l1 = l1 ? l1.next : l1;
      l2 = l2 ? l2.next : l2;
  }
   if(cnt > 0){
        temp.next = new ListNode(cnt);
   }
   return res.next;
};