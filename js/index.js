import { projects } from '../data/projects.js';
import { isMobile } from './util.js';
import { buildProjectDetailsWindow } from '../js/project-details-popup.js';
const hamburger = document.querySelector('.menu-button-container');
const menu = document.querySelector('.menu');
const logo = document.querySelector('#logo-placeholder');
const canceIcon = document.querySelector('.cancel-icon');
const menuIcon = document.querySelector('.menu-icon');
const projectDetailId = document.querySelector('#project-detail-id');

hamburger.addEventListener('click', () => {
  console.log('sssssssssssssss');
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  canceIcon.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

document.querySelectorAll('.menu .nav-link').forEach((item) =>
  item.addEventListener('click', () => {
    onCancel();
    console.log('xxxxxxxxxxxxxxxxxxx');
    console.log(buildProjectDetailsWindow());
    console.log('xxxxxxxxxxxxxxxxxxx');
  })
);
injectProjectSectionHML();
injectbuildProjectDetailsWindowHML();

document
  .querySelectorAll('section#recent-works .detail-button')
  .forEach((item) =>
    item.addEventListener('click', (event) => {
      let project_id =
        event.target.parentNode.getElementsByTagName('span')[0].innerHTML;
      let project = projects.find((item) => item.id == project_id),
        imageField = document.querySelector(
          '#project-detail-id .project-details-header img'
        ),
        titleField = document.querySelector(
          '#project-detail-id .project-detail-headline h1'
        ),
        descriptionField = document.querySelector('#project-detail-id p'),
        technologyButtons = document.querySelectorAll(
          '#project-detail-id .tag-button'
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
      projectDetailId.classList.toggle('active');
    })
  );

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  console.log('WWWWWWWWWWWWIIIIIIIIIIIIIIIIIIIIII');
  projectDetailId.classList.remove('active');
});

function onCancel() {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  logo.classList.remove('active');
  canceIcon.classList.remove('active');
  menuIcon.classList.remove('active');
}
function buildProjecstSection() {
  let projectsSection = '';
  projectsSection += `<h2 class="primary-header">
                            My Recent Works
                            <span id="indicator"></span>
                        </h2>
                        <ul class="works-cards">`;

  let projectsList = '';

  for (let i = 0; i < projects.length; i++) {
    projectsList += `<li class="card">
        <header class="card-header"></header>
        <div class="card-content">
        <span id="project-detail-id-value">${projects[i].id}</span>
          <h3 class="project-title">${projects[i].title}</h3>
          <p class="project-tags">
          <ul class="project-tags-list">`;
    let tech = '';
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
    .getElementById('recent-works')
    .insertAdjacentHTML('afterbegin', buildProjecstSection());
}

function injectbuildProjectDetailsWindowHML() {
  document
    .getElementById('project-detail-id')
    .insertAdjacentHTML('afterbegin', buildProjectDetailsWindow());
}

//Add form validation

let form = document.querySelector('#contact-form form'),
  errMessageZone = document.querySelector('#error-message'),
  emailClass = document.querySelector('#contact-form .email');

form.addEventListener('submit', (event) => {
  let email = document.querySelector('#email');
  let emailRegExp = /[A-Z]/;

  if (!emailRegExp.test(email.value.trim())) {
    form.submit();
  } else {
    event.preventDefault();
    //emailClass.classList.toggle('error');
    errMessageZone.innerText =
      'Please enter an entirely lower case email, please';
  }
});

// preserving Data

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');

document.addEventListener('change', () => {

  const data = {
    fullName: fullName.value,
    messsage: message.value,
    email: email.value,
  };
  localStorage.setItem('contacts', JSON.stringify(data));
});

window.addEventListener('DOMContentLoaded', function (e) {
    let contacts=JSON.parse(localStorage.getItem('contacts')) 
    if(contacts){
        fullName.value=contacts.fullName
        message.value=contacts.message
        email.value=contacts.email
    }   
  });



