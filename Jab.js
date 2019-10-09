var a = document.getElementById("id1")
var b = document.getElementById("id5")
var c = document.getElementById("id3")
var d = document.getElementById("id4")
var e = document.getElementById("id2")


a.addEventListener("input", function myfun(){
   b.style.padding = a.value+"%"
   
})

c.addEventListener("change", function myfun(){
   d.style.background = c.value
})

e.addEventListener("input", function myfun(){
  b.style.opacity = 1-e.value
  console.log(e.value);
  
})