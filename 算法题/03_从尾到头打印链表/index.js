function printListFromTailToHead(head) {

  let arrResult = []
  while (head) {
    arrResult.push(head.val)
    head = head.next
  }

  return arrResult.reverse()

}
var listNode = {
  val : 1,
  next: {
    val : 2,
    next : {
      val : 3,
      next: null
    }
  }
}
console.log(printListFromTailToHead(listNode))
