const aslideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");

const signinbtn = document.getElementById("sign-in-btn");
const signupbtn = document.getElementById("sign-up-btn");

signinbtn.addEventListener("click", () =>{
    mainSection.classList.add("slideRight");
    aslideSection.classList.add("slideleft")
})

signupbtn.addEventListener("click",() =>{
    mainSection.classList.remove("slideRight")
    aslideSection.classList.remove("slideLeft")
});