//! Fixed Header
const mainHeader = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY > 100) {
    mainHeader.classList.add("fixedBar");
  } else {
    mainHeader.classList.remove("fixedBar");
  }
};

//! Scrol Top
const scrolBtn = document.querySelector(".scrolTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrolBtn.style.display = "block";
  } else {
    scrolBtn.style.display = "none";
  }
});

scrolBtn.addEventListener("click", () => {
  window.screenTop(0,0)
});

//! AOS
AOS.init();

//! Acardion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  const icons = header.querySelectorAll(".fa-solid");
  const accordionItem = header.parentElement;
  const accordionContent = accordionItem.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    icons.forEach((icon) => {
      if (!icon.classList.contains("clickIcon")) {
        icon.classList.add("clickIcon");
      } else {
        icon.classList.remove("clickIcon");
      }
    });

    if (!accordionItem.classList.contains("active")) {
      closeAllAccordionItems();
      accordionItem.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionItem.classList.remove("active");
      accordionContent.style.maxHeight = 0;
    }
  });
});

function closeAllAccordionItems() {
  accordionHeaders.forEach((header) => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");
    accordionItem.classList.remove("active");
    accordionContent.style.maxHeight = 0;
  });
}

//! Tab Js
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    console.log(element);
  }
};

//! Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

//! Form
const form = document.querySelector(".form_cont");

const nameErr = document.querySelector("#fname");
const surnameErr = document.querySelector("#lname");
const emailErr = document.querySelector("#emails");
const messageErr = document.querySelector("#messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameErr.innerHTML = "";
  surnameErr.innerHTML = "";
  emailErr.innerHTML = "";
  messageErr.innerHTML = "";

  const firstName = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  let isValid = true;

  const nameRegex = /^[A-Za-z]+$/;
  const surnameRegex = /^[A-Za-z]+$/;

  if (firstName.trim() === "") {
    nameErr.innerText = "*name field cannot be empty";
    isValid = false;
  } else if (!nameRegex.test(firstName)) {
    nameErr.innerText = "*only letters are allowed";
    isValid = false;
  } else if (firstName.length < 2 || firstName.length > 12) {
    nameErr.innerText = "*only letters are allowed 2";
    isValid = false;
  }

  if (surname.trim() === "") {
    surnameErr.innerText = "*last name field cannot be empty";
    isValid = false;
  } else if (!surnameRegex.test(surname)) {
    surnameErr.innerText = "*only letters are allowed";
    isValid = false;
  } else if (surname.length < 2 || surname.length > 12) {
    surnameErr.innerText = "*only letters are allowed 3";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "") {
    emailErr.innerText = "*email field cannot be empty";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailErr.innerText = "*invalid email address";
    isValid = false;
  }

  if (message.trim() === "") {
    messageErr.innerText = "*message field cannot be empty";
    isValid = false;
  } else if (message.length < 10) {
    messageErr.innerText = "*only letters are allowed 4";
    isValid = false;
  }

  if (isValid) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your message has been sent!",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      document.querySelector("#name").value = "";
      document.querySelector("#surname").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
    });
  } else {
    if (nameErr.innerText !== "") {
      nameErr.style.display = "block";
    } else {
      nameErr.style.display = "none";
    }
    if (surnameErr.innerText !== "") {
      surnameErr.style.display = "block";
    } else {
      surnameErr.style.display = "none";
    }
  }
});
