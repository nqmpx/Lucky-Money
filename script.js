
let modalContent = document.querySelector(".pop-up");
let openModal = document.querySelector(".rut");
let closeModal = document.querySelector(".close-pop-up");
let blurBg = document.querySelector(".blur-bg");
let money = null;
let moneyElement = document.querySelector('.money')
let lucky = document.querySelector('.lucky-number')


openModal.addEventListener("click", function () {
    modalContent.classList.remove("hidden-pop-up");
    blurBg.classList.remove("hidden-blur");
    if (money === null) {
        const luckyNumber = parseInt(lucky.value);
        if (luckyNumber == 8 || luckyNumber == 3 || luckyNumber == 6 || luckyNumber == 30) {
            money = Math.random() * (50000 - 1000) + 1000;
        } else {
            money = Math.random() * (10000 - 1000) + 1000;
        }
        money = Math.round(money);
        money = money.toLocaleString();
        moneyElement.textContent = money + 'đ';
    }
    else{
        moneyElement.textContent = "Rút 1 lần thui má | " + money;
    }
});

let closeModalFunction = function () {
  modalContent.classList.add("hidden-pop-up");
  blurBg.classList.add("hidden-blur");
};

blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
    closeModalFunction();
    }
});
