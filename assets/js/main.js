//! Fixed Header
const mainHeader = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY > 170) {
    mainHeader.classList.add("fixedBar");
  } else {
    mainHeader.classList.remove("fixedBar");
  }
};

//! Scrol Top
const scrolBtn = document.querySelector(".scrolTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 170) {
    scrolBtn.style.display = "block";
  } else {
    scrolBtn.style.display = "none";
  }
});

scrolBtn.addEventListener("click", () => {
  window.screenTop(0, 0);
});

//! Nav-item active
const navItems = document.querySelectorAll(".nav");
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navItems.forEach((navItem) => {
      navItem.parentElement.classList.remove("active");
      navItem.style = "color: #fff;";
    });
    if (item.href === e.target.href) {
      item.style = "color: var(--color);";
      item.parentElement.classList.add("active");
    }
  });
});

//! Scroll Section

var links = document.querySelectorAll(".nav");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    var targetSectionId = link.getAttribute("href");
    var targetSection = document.querySelector(targetSectionId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
  });
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
const form = document.querySelector("#form");
const firstname = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const nameRegex = /^[A-Za-z]+$/;
const surnameRegex = /^[A-Za-z]+$/;
let isValidFirstName = false;
let isValidSurname = false;
let isValidEmail = false;
let isValidMessage = false;

firstname.oninput = function () {
  let nameValue = firstname.value.trim();
  if (nameValue === "") {
    firstname.style.borderBottom = "2px solid red";
    isValidFirstName = false;
  } else if (!nameRegex.test(nameValue)) {
    firstname.style.borderBottom = "2px solid red";
    isValidFirstName = false;
  } else if (nameValue.length < 3 || nameValue.length > 12) {
    firstname.style.borderBottom = "2px solid red";
    isValidFirstName = false;
  } else {
    firstname.style.borderBottom = "2px solid green";
    isValidFirstName = true;
  }
};

surname.oninput = function () {
  let surnameValue = surname.value.trim();
  if (surnameValue === "") {
    surname.style.borderBottom = "2px solid red";
    isValidSurname = false;
  } else if (!nameRegex.test(surnameValue)) {
    surname.style.borderBottom = "2px solid red";
    isValidSurname = false;
  } else if (surnameValue.length < 3 || surnameValue.length > 12) {
    surname.style.borderBottom = "2px solid red";
    isValidSurname = false;
  } else {
    surname.style.borderBottom = "2px solid green";
    isValidSurname = true;
  }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
email.oninput = function () {
  let emailValue = email.value.trim();
  if (emailValue === "") {
    email.style.borderBottom = "2px solid red";
    isValidEmail = false;
  } else if (!emailRegex.test(emailValue)) {
    email.style.borderBottom = "2px solid red";
    isValidEmail = false;
  } else if (emailValue.length < 7 || emailValue.length > 30) {
    email.style.borderBottom = "2px solid red";
    isValidEmail = false;
  } else {
    email.style.borderBottom = "2px solid green";
    isValidEmail = true;
  }
};

message.oninput = function () {
  let messageValue = message.value.trim();
  if (messageValue === "") {
    message.style.borderBottom = "2px solid red";
    isValidMessage = false;
  } else if (messageValue.length < 12) {
    message.style.borderBottom = "2px solid red";
    isValidMessage = false;
  } else {
    message.style.borderBottom = "2px solid green";
    isValidMessage = true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isValidFirstName && isValidSurname && isValidEmail && isValidMessage) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message has been sent!",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      document.querySelector("#name").value = "";
      document.querySelector("#surname").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      isValidFirstName = false;
      isValidSurname = false;
      isValidEmail = false;
      isValidMessage = false;
      firstname.style.border = "1px solid #088395";
      surname.style.border = "1px solid #088395";
      email.style.border = "1px solid #088395";
      message.style.border = "1px solid #088395";
    });
    localStorage.setItem(
      "message",
      JSON.stringify({
        firstName: firstname.value,
        surname: surname.value,
        email: email.value,
        message: message.value,
      })
    );
  } else {
    firstname.style.borderBottom = isValidFirstName
      ? "2px solid green"
      : "2px solid red";
    surname.style.borderBottom = isValidSurname
      ? "2px solid green"
      : "2px solid red";
    email.style.borderBottom = isValidEmail
      ? "2px solid green"
      : "2px solid red";
    message.style.borderBottom = isValidMessage
      ? "2px solid green"
      : "2px solid red";
  }
});

setTimeout(() => {
  document.querySelector(".year").innerHTML = new Date().getFullYear();
  document.querySelector("#page").classList.remove("active");
}, 2000);
