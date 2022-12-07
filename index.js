const number = document.querySelector(".Number");

let count = 7;
number.innerHTML = count;

function divclick() {
    const unread = document.querySelectorAll(".unread");

    if (count > 0) {
        count--;
        number.innerHTML = count;

        unread.forEach((Users) => {
            Users.addEventListener("click", () => {
                Users.classList.remove("unread");
            });
        });

        document.querySelectorAll(".Users").forEach((Users) =>
            Users.addEventListener("click", (e) => {
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
}
