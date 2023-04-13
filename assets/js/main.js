const input = document.querySelector("input");
const modal = document.querySelector(".modal");

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
