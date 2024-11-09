const Plus = Array.from(document.querySelectorAll(".fa-plus-circle"));
// console.log(Plus)
const Minus = Array.from(document.getElementsByClassName("fa-minus-circle"));
const Trash = Array.from(document.getElementsByClassName("fa-trash-alt"));
const Like = Array.from(document.querySelectorAll(".fa-heart"));
const Card = Array.from(document.querySelectorAll(".card"));

// process
// btn Plus
for (const incr of Plus) {
  incr.addEventListener("click", function () {
    incr.nextElementSibling.innerHTML++;
    totalprice();
  });
}
// btn Minus
for (const decr of Minus) {
  decr.addEventListener("click", function () {
    if (decr.previousElementSibling.innerHTML > 0)
      decr.previousElementSibling.innerHTML--; totalprice()
  });
}
// btn Trash
for (const i in Trash) {
  Trash[i].addEventListener("click", function () {
    Card[i].remove();
  });
}
// btn Like
for (const Love of Like) {
  Love.addEventListener("click", function () {
    if (Love.style.color === "red") {
      Love.style.color = "black";
    } else {
      Love.style.color = "red";
    }
  });
}
// le total des prix
function totalprice() {
  const Price = Array.from(document.querySelectorAll(".unit-price"));
  const Qte = Array.from(document.querySelectorAll(".quantity"));
  var total = 0;
  for (const i in Price) {
    total += Price[i].innerHTML * Qte[i].innerHTML;
  }
  document.querySelector(".total").innerHTML = total + "$";
}

