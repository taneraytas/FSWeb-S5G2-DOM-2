import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

// let headerSec = document.querySelector("header");

// headerSec.addEventListener("mouseover", (e) => {
//   e.target.style.backgroundColor = "red";
//   e.target.style.color = "white";
// });
// headerSec.addEventListener("mouseout", (e) => {
//   e.target.style.backgroundColor = "";
//   e.target.style.color = "white";
// });

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {
  item.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.color = "rgb(226,164,80)";
      setTimeout(() => {
        event.target.style.color = "";
      }, 750);
    },
    false
  );
});
