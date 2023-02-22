import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

// let headerSec = document.querySelector("header");

const navItems = document.querySelectorAll(".nav-link");
const imgSelec = document.getElementsByTagName("img");

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

const allImg = document.querySelectorAll("img");
allImg.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    item.style.cursor = "pointer";
  });
  item.addEventListener("load", () => {
    item.style.filter = "blur(10px)";
  });
});

allImg.forEach((item) => {
  item.addEventListener("dblclick", () => {
    item.style.filter = "unset";
  });
});
