const markAsRead = document.querySelector(".hero__top-mark");
const heroUser = document.querySelectorAll(".hero__user");
const heroUserRed = document.querySelectorAll(".hero__user-red");
const notificationNum = document.querySelector(".hero__top-message");

markAsRead.addEventListener("click", () => {
  heroUser.forEach((user) => {
    user.style.background = "white";
  });
  heroUserRed.forEach((red) => {
    red.style.background = "transparent";
  });
  notificationNum.innerHTML = 0;
});

heroUser.forEach((user) => {
  user.addEventListener("click", () => {
    user.style.background = "white";
  });
});
