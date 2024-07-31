let btn = document.querySelector(".bars");
let list = document.querySelector(".position");
let x = document.querySelector(".mark")


btn.addEventListener("click", () => {
    btn.style.display = "none"
    list.style.display = "block"
    x.style.display = "block"
})
x.addEventListener("click", () => {
    x.style.display = "none"
    list.style.display = "none"
    btn.style.display = "block"
})








function startTimer() {
    let timeLeft = 30 * 60;
    const timerElement = document.querySelector('.span-box');

    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerElement.textContent = `00:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
        }
        else if (minutes < 10) {
            timerElement.textContent = ` 0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}
startTimer()

let flex = document.querySelector(".flex");
let dropdown = document.querySelector(".two-boxes");

flex.addEventListener("click", () => {
    dropdown.classList.toggle("coming")
})



// window.addEventListener("scroll", () => {
//     if (document.documentElement.scrollTop > 40) {
//         document.querySelector(".under-nav").style.opacity = 1;
//         document.querySelector(".bottom").style.position="fixed";
//         document.querySelector(".bottom").style.top="0";
//         document.querySelector(".bottom").style.left="0";
//         document.querySelector(".bottom").style.right="0";

//     }
//     else {
//         document.querySelector(".under-nav").style.opacity = 0
//     }
//     console.log("salom")

// })


let mind = document.querySelector(".mind");
let buttonIcon = document.querySelector(".display");
let buttonClose = document.querySelector(".logo-icon");
let card = document.querySelector(".card")
buttonIcon.addEventListener("click", () => {
    card.style.display = "block";
    // mind.style.filter="blur(5px)"
})
buttonClose.addEventListener("click", () => {
    card.style.display = "none"


})
let input = document.querySelector(".first-blood").value
let btnTel = document.querySelector(".text-number button")



let arr = ['908285952', '901850968', '905524064', '911223938', '339787908']
let tell = document.querySelector(".first-blood")
let submit = document.querySelector(".text-number button ")

submit.addEventListener("click", () => {

    arr.forEach((val, ind) => {
        if (tell.value == val) {
            document.querySelector(".input ").classList.add("hide")
            document.querySelector('.new-card').classList.remove("hide")
        }


    });


})

// btnTel.addEventListener("click", () => {
//     let arr = ['908285952', '901850968', '905524064', '911223938', '339787908']
//     function checkNumber(inputNumber) {
//         let found = false;

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].includes(inputNumber)) {
//                 found = true;
//                 break;
//             }
//         }

//         if (found) {

//             let randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
//             alert(randomFourDigitNumber);
//         } else {

//             document.querySelector('.important-text p').innerHTML = 'Raqam topilmadi';
//         }
//     }

   


// })


