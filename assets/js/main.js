const input = document.querySelector("input");
const profileLogo = document.querySelector(".profile-logo");
const modal = document.querySelector(".modal");

const toggleModal = () => {
  
};

let timeout;

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    input.value = "";
    input.blur();
    
    clearTimeout(timeout)
    modal.classList.add("active");
    timeout = setTimeout(() => modal.classList.remove("active"), 4000);
  }
});

logo.addEventListener("click", () => window.open("https://discordapp.com/users/479188998716129301", '_blank'));
