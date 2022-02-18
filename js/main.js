const emailInput = document.getElementById("email");
const err = document.querySelector("small");
const btn = document.querySelector(".cta-btn");

const validation = (email) => {
  let regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLocaleLowerCase());
};

btn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !validation(emailValue)) {
    err.innerHTML = "Oops! That doesn’t look like email address";
    emailInput.classList.add("err-border");
  } else {
    emailInput.classList.remove("err-border");
    emailInput.value = "";
    err.innerHTML = "";
  }
});
