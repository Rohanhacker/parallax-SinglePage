//"use strict";
function foo(x) {
  return function(){
    return x;
  };
}
function add2(f1,f2) {
  return f1()+f2()
}
function addl(l) {
  var n = 0
  for(var i=0;i<l.length;i++) {
    n = add2(foo(n),foo(l[i]))
  }
  return n
}
console.log(addl([10,20,30]))
function a() {
  var aa = 5;
  b = 10;
}
a();
console.log(b)
//console.log(aa);
