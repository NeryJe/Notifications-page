const unread = document.querySelectorAll(".unread");

const number = document.querySelector(".Number");
let count = 8;
number.innerHTML = count;

window.onload = function () {
    if (count > 0) {
        count--;
        number.innerHTML = count;
        unread.forEach((Users) => {
            Users.addEventListener("click", () => {
                Users.classList.remove("unread");
                count--;
                number.innerHTML = count;
            });
        });

        document.querySelectorAll(".Users").forEach((Users) =>
            Users.addEventListener("click", () => {
                Users.style.pointerEvents = "none";
            })
        );

        const marks = document
            .getElementById("Mark")
            .addEventListener("click", () => {
                unread.forEach((Users) => {
                    Users.classList.remove("unread");
                    number.innerHTML = 0;
                });
            });
    }
};
