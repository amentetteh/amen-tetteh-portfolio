import { projects } from "../data/projects.js";
import { isMobile } from "./util.js";
import { buildProjectDetailsWindow } from "../js/project-details-popup.js";
const hamburger = document.querySelector(".menu-button-container");
const menu = document.querySelector(".menu");
const logo = document.querySelector("#logo-placeholder");
const canceIcon = document.querySelector(".cancel-icon");
const menuIcon = document.querySelector(".menu-icon");
const projectDetailId = document.querySelector("#project-detail-id");

hamburger.addEventListener("click", () => {
    console.log("sssssssssssssss");
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    logo.classList.toggle("active");
    canceIcon.classList.toggle("active");
    menuIcon.classList.toggle("active");
});

document.querySelectorAll(".menu .nav-link").forEach((item) =>
    item.addEventListener("click", () => {
        onCancel();
        console.log("xxxxxxxxxxxxxxxxxxx");
        console.log(buildProjectDetailsWindow());
        console.log("xxxxxxxxxxxxxxxxxxx");
    })
);
injectProjectSectionHML();
injectbuildProjectDetailsWindowHML();

document
    .querySelectorAll("section#recent-works .detail-button")
    .forEach((item) =>
        item.addEventListener("click", (event) => {
            let project_id =
                event.target.parentNode.getElementsByTagName("span")[0].innerHTML;
            let project = projects.find((item) => item.id == project_id),
                imageField = document.querySelector(
                    "#project-detail-id .project-details-header img"
                ),
                titleField = document.querySelector(
                    "#project-detail-id .project-detail-headline h1"
                ),
                descriptionField = document.querySelector("#project-detail-id p"),
                technologyButtons = document.querySelectorAll(
                    "#project-detail-id .tag-button"
                );

            imageField.src = isMobile()
                ? project.featured_image_link[0]
                : project.featured_image_link[1];
            titleField.innerHTML = project.title;
            descriptionField.innerHTML = project.description;
            for (let i = 0; i < project.technologies.length; i++) {
                if (technologyButtons[i]) {
                    technologyButtons[i].innerHTML = project.technologies[i];
                    console.log(technologyButtons[i].innerHTML);
                }
            }
            console.log(imageField.src);

            //console.log(document.querySelector(event.target.parentNode+" #project-detail-id-value"))
            projectDetailId.classList.toggle("active");
        })
    );

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    console.log("WWWWWWWWWWWWIIIIIIIIIIIIIIIIIIIIII");
    projectDetailId.classList.remove("active");
});

function onCancel() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    logo.classList.remove("active");
    canceIcon.classList.remove("active");
    menuIcon.classList.remove("active");
}
function buildProjecstSection() {
    let projectsSection = "";
    projectsSection += `<h2 class="primary-header">
                            My Recent Works
                            <span id="indicator"></span>
                        </h2>
                        <ul class="works-cards">`;

    let projectsList = "";

    for (let i = 0; i < projects.length; i++) {
        projectsList += `<li class="card">
        <header class="card-header"></header>
        <div class="card-content">
        <span id="project-detail-id-value">${projects[i].id}</span>
          <h3 class="project-title">${projects[i].title}</h3>
          <p class="project-tags">
          <ul class="project-tags-list">`;
        let tech = "";
        for (let j = 0; j < projects[i].technologies.length; j++) {
            tech += `<li><button class="tag-button">${projects[i].technologies[j]}</button></li>`;
        }
        projectsList += tech;
        projectsList += `</ul></p>
          <button class="green-button detail-button">See Project</button>
        </div>
      </li>`;
    }
    projectsSection += projectsList;
    return projectsSection;
}

function injectProjectSectionHML() {
    document
        .getElementById("recent-works")
        .insertAdjacentHTML("afterbegin", buildProjecstSection());
}

function injectbuildProjectDetailsWindowHML() {
    document
        .getElementById("project-detail-id")
        .insertAdjacentHTML("afterbegin", buildProjectDetailsWindow());
}


//Add form validation


/* let form=document.querySelector("#contact-form form"),
emailEl=document.querySelector("#contact-form form #email"),
emailClass=document.querySelector("#email")

function isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return re.test(email);
};

function isRequired(value){
    return value === '' ? false : true;
}

function showSuccess(input){
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

function showError(input, message){

    // add the error class
    emailClass.classList.remove('success');
    emailClass.classList.add('error');

    // show the error message
    const error = document.querySelector('#error-message');
    error.innerHTML = message;
    console.log("dddddddddddddddd")
}; 


function checkEmail(){
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

form.addEventListener('input', function (event) {
    if(event.target.id==='email')  {
        console.log(checkEmail())
        checkEmail();
    }   
});

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate email fields
    let isEmailValid = checkEmail();

    let isFormValid = isEmailValid ;

    // submit to the server if the form is valid ,either display 
    if (!isFormValid) {
        console.log("sssssssssssssssssssssssss")
        showError()
    }
});
 */

let form=document.querySelector("#contact-form form"),
errMessageZone  = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  const email = document.querySelector('#email');
  console.log('email.value')
  console.log(email.value)
  console.log('email.value')
  const emailRegExp = /[A-Z]/;
  if (!emailRegExp.test(email.value)) {
    form.submit();
  } else {
    event.preventDefault();
    errMessageZone.innerText = 'Please Enter Your Email Only In Lower Case';
  }
});

