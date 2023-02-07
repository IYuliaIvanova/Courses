const items = document.querySelectorAll(".sidebar__item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const sublist = e.currentTarget.querySelector(".sidebar__sublist");
    const link = item.querySelector(".sidebar__item-link");

    if (sublist && sublist.classList.contains("show")) {
      sublist.classList.remove("show");
      link.classList.remove("active");
    } else if (sublist) {
      sublist.classList.add("show");
      link.classList.add("active");
    }
  });
});

const closeBtn = document.querySelectorAll(".cards__icon-plus");
closeBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("plus");
  });
});

const titleMobile = document.querySelector(".title-mobile");
const menu = document.querySelector(".menu");
const textMobile = document.querySelector(".text-mobile");

titleMobile.addEventListener("click", () => {
  const menuDisplay = getComputedStyle(menu).display;
  if (menuDisplay === "none") {
    menu.style.display = "block";
    titleMobile.classList.add("active");
  } else {
    menu.style.display = "none";
    titleMobile.classList.remove("active");
  }
});
