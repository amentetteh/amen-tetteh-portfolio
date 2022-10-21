import {isMobile} from "./util.js";
function buildProjectDetailsWindow(
    id=1,
    title="Keeping track of hundreds of components",
    featured_image_link="assets/images/desktop-snapshot-portfolio.png",
    live_link="#",
    source_link="#",
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies =["Ruby on rails","css","Javascript","html"]
){
    let res=""
    res += `<div class="project-details-container">
    <div class="project-details-header">
    <span class="close">&times;</span>
    <img src=${featured_image_link} alt="#">
    </div>
    <div class="project-detail-headline">
        <h1>${title}</h1>
        <div class="project-detail-bottom-goup-desktop">
            <button class="green-button detail-button">See Live  <img src="assets/images/see-live-icon.png" alt="Live Version"/></button>
            <button class="green-button detail-button">See Source<img src="assets/images/see-github-source.png" alt="Live Source"/></button>
        </div>
    </div>
    <ul>`;
    let techs=""
    let lg=isMobile()?3:technologies.length
    for (let i = 0; i < lg; i++) {
        techs+=`<li><button class="tag-button">${technologies[i]}</button></li>`    
    }
    res+=techs
    res+=
    `</ul>
    <p>
        ${description}
    </p>
    <div class="project-detail-bottom-goup-mobile">
        <button class="green-button detail-button">See Live  <img src="assets/images/see-live-icon.png" alt="Live Version"/></i></button>
        <button class="green-button detail-button">See Source<img src="assets/images/see-github-source.png" alt="Live Source"/></button>
    </div>
    <div>`;
    return res;
}
export {buildProjectDetailsWindow}